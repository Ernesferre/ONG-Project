import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Us from '../pages/Us'

export const Public = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/us" component={Us} />
           
            <Redirect to="/" />
        </Switch>
    )
}
