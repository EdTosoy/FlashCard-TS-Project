import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { getAccessToken } from "./accessToken";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAccessToken();
  // return the headers to the context so httpLink can read them
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `bearer ${token}`,
      },
    };
  }
});
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
