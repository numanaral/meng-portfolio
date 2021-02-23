import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "./index.css";

import Home from "views/Home";
import Profile from "views/Profile";
import Photojournalism from "views/Photojournalism";
import Projects from "views/Projects";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route
        path="/photojournalism"
        exact
        render={(props) => <Photojournalism {...props} />}
      />
      <Route
        path="/projects"
        exact
        render={(props) => <Projects {...props} />}
      />
      {process.env.NODE_ENV !== "production" && (
        <>
          <Route
            path="/profile"
            exact
            render={(props) => <Profile {...props} />}
          />
        </>
      )}
      <Redirect to="/" exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
