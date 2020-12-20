import { Query, Resolver } from "type-graphql";
import { User } from "../entity/User";

@Resolver()
export class Users {
  @Query(() => [User])
  async users() {
    const users = await User.find();
    return users;
  }
}
