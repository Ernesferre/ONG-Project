import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../components/public/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Us from "../pages/Us";
import { Contact } from "../components/public/contact";
import Layout from "../components/public/layout/Layout";
import { PublicActivities } from "../components/public/activities/PublicActivities";
import { PublicNews } from "../components/public/news/PublicNews";

export const Public = () => {
  return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/us" component={Us} />
          <Route exact path="/contacto" component={Contact} />
             <Route exact path="/activities" component={PublicActivities} />
               <Route exact path="/news" component={PublicNews} />
          <Redirect to="/" />
        </Switch>
      </Layout>
  )

};
