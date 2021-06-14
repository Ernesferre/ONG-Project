import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../components/public/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Us from "../pages/Us";
import { Contact } from "../components/public/contact";
import Layout from "../components/public/layout/Layout";

export const Public = () => {
  return (
    <>
      <HeaderPublic />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/nosotros" component={Us} />
        <Route exact path="/contacto" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
