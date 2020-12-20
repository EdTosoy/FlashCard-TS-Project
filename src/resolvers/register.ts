import { Arg, Mutation, Resolver } from "type-graphql";
import { User } from "../entity/User";
import argon2 from "argon2";

@Resolver()
export class Register {
  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const hashedPassword = await argon2.hash(password);
    const userExist = await User.findOne({ where: { email: email } });
    if (userExist) {
      throw new Error("User already exist");
    }
    try {
      await User.insert({
        email,
        password: hashedPassword,
      });
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}
