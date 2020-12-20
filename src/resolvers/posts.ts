import { Query, Resolver } from "type-graphql";
import { Post } from "../entity/Post";

@Resolver()
export class Posts {
  @Query(() => [Post])
  async posts() {
    const post = await Post.find();
    console.log(post);
    return post;
  }
}
