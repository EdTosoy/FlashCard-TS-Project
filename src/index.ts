import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

(async () => {
  const app = express();
  app.get("hello");
  app.get("/", (_, res) => {
    res.send("hello");
  });

  await createConnection();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname + "/resolvers/*.ts"],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });
  app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log("server start at http://localhost:4000/graphql");
  });
})();
