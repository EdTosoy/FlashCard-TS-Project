import { Arg, Mutation, Resolver } from "type-graphql";
import { User } from "../entity/User";

@Resolver()
export class Register {
  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const userExist = await User.findOne({ where: { email: email } });
    if (userExist) {
      throw new Error("user already exist");
    }
    await User.insert({
      email,
      password,
    });
    return true;
  }
}
