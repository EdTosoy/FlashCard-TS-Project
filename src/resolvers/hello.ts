import { Query, Resolver } from "type-graphql";

@Resolver()
export class Hello {
  @Query(() => String)
  async hello() {
    return "hello po";
  }
}
