import { Arg, Mutation, Resolver } from "type-graphql";
import { Post } from "../entity/Post";

@Resolver()
export class AddPost {
  @Mutation(() => Boolean)
  async addPost(
    @Arg("title") title: string,
    @Arg("discription") discription: string,
    @Arg("author") author: string
  ) {
    try {
      await Post.insert({
        title,
        discription,
        author,
      });
    } catch (error) {
      console.error(error);
    }
    return true;
  }
}
