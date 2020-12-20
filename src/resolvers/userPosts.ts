import { Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../entity/Post";
import { User } from "../entity/User";
import { verify } from "jsonwebtoken";
import { MyContext } from "src/MyContext";

@Resolver()
export class Posts {
  @Query(() => [Post])
  async posts(@Ctx() context: MyContext) {
    const authorization = context.req.headers["authorization"];
    const token = authorization!.split(" ")[1];
    const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    const user = await User.findOne(payload.userId);
    const author = user!.email;
    const post = await Post.find({ where: { author: author } });
    console.log(post);
    return post;
  }
}
