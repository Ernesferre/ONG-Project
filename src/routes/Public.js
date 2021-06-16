import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../components/public/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Us from "../pages/Us";
import News from "../components/public/News";
import { Contact } from "../components/public/contact";
import Layout from "../components/public/layout/Layout";
import { ActivitiesList } from "../components/public/activities/ActivitiesList";
import { PublicActivities } from "../components/public/activities/PublicActivities";
import { Activity } from "../components/public/activities/Activity";
import { PublicNews } from "../components/public/News/PublicNews";
import Detail from "../components/public/News/Detail";


export const Public = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/us" component={Us} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/actividades" component={PublicActivities} />
        <Route exact path="/actividades/:id" component={Activity} />
        <Route exact path="/novedades" component={News} />
        <Route exact path="/news" component={PublicNews} />
        <Route exact path="/novedades/:id" component={Detail} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};
