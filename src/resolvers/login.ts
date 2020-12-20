import { Arg, Mutation, Resolver } from "type-graphql";
import argon2 from "argon2";
import { User } from "../entity/User";

@Resolver()
export class Login {
  @Mutation(() => Boolean)
  async login(@Arg("email") email: string, @Arg("password") password: string) {
    const hasdedPassword = await argon2.hash(password);
    const user = await User.findOne({ where: { email: email } });
    const valid = await argon2.verify(hasdedPassword, password);
    if (!user) {
      throw new Error("user does not exist");
    }
    if (!valid) {
      throw new Error("Incorrect Password");
    }
    return true;
  }
}
