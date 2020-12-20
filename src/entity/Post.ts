import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity("cartlist")
export class Post extends BaseEntity {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  imgUrl: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  discription: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  tag: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  author: string;

  @ManyToOne(() => User, (user: User) => user.post)
  @JoinColumn({ name: "user_id" })
  user: User;
}
