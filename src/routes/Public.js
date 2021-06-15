import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../components/public/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Us from "../pages/Us";
import News from "../components/public/News";
import { Contact } from "../components/public/contact";
import Layout from "../components/public/layout/Layout";

export const Public = () => {
  return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/novedades" component={News} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/us" component={Us} />
          <Route exact path="/contacto" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Layout>
  );
};
