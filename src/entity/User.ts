import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Post } from "./Post";

@ObjectType()
@Entity({ name: "users" })
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @OneToMany(() => Post, (post: Post) => post.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  post: Post[];
}
