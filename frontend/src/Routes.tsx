import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.scss";
import { ApolloProvider } from "@apollo/client";
import { client } from "./index";
import { HomeProvider } from "./ContextAPI/homeContext";
import Auth from "./Pages/Auth/Auth";

export default function Routes(): ReactElement {
  return (
    <ApolloProvider client={client}>
      <HomeProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/:tag" component={Home} />
            </Switch>
          </div>
        </Router>
      </HomeProvider>
    </ApolloProvider>
  );
}
