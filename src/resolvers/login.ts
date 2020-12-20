import { User } from "../entity/User";
import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import { MyContext } from "../MyContext";
import { createRefreshToken, createAccessToken } from "../Auth";
import { sendRefreshToken } from "../sendRefreshToken";
import argon2 from "argon2";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class Login {
  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: MyContext
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw new Error("user does not exist");
    }
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      throw new Error("bad password");
    }
    // login succussfully

    sendRefreshToken(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
    };
  }
}
