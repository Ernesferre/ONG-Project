import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import CreateActivity from '../components/backoffice/activities/CreateActivity'
import EditActivity from '../components/backoffice/activities/EditActivity'
import ListOfActivities from '../components/backoffice/activities/ListOfActivities'
import Backoffice from '../components/backoffice/Backoffice'
import { CategoryList } from '../components/backoffice/categories/CategoryList'
import HomeEdition from '../components/backoffice/homeEdition/HomeEdition'
import Header from '../components/backoffice/layout/Header'
import NewsList from '../components/backoffice/news/NewsList'
import NewsEdit from '../components/backoffice/news/NewsEdit'
import NewsForm from '../components/backoffice/news/NewsEdit'
import SlidesShow from '../components/backoffice/slides/SlidesShow'
import TestimonialList from '../components/backoffice/testimonials/TestimonialList'
import { CreateOrEditUser } from '../components/backoffice/users/CreateOrEditUser'
import { UserList } from '../components/backoffice/users/UserList'
import { CategoryCreate } from '../pages/backoffice/categories/CategoryCreate'
import { CategoryPatch } from '../pages/backoffice/categories/CategoryPatch'
import { OrganizationPage } from '../pages/backoffice/organization/OrganizationPage'
import { UserCreate } from '../pages/backoffice/users/UserCreate'

export const Private = () => {
    return (
        <>
          <Header />
          <Switch>
            <Route exact path="/backoffice" component={Backoffice} />
            <Route exact path="/backoffice/news" component={NewsList}/>
            <Route exact path="/backoffice/news/edit" component={NewsEdit}/>
            <Route exact path="/backoffice/news/create" component={NewsForm}/>

            <Route
              exact
              path="/backoffice/categories"
              component={CategoryList}
            />
            <Route
              exact
              path="/backoffice/categories/create"
              component={CategoryCreate}
            />
            <Route
              exact
              path="/backoffice/categories/:id"
              component={CategoryPatch}
            />
            
            <Route
              exact
              path="/backoffice/activities"
              component={ListOfActivities}
            />
            <Route
              exact
              path="/backoffice/activities/create"
              component={CreateActivity}
            />
            <Route
              exact
              path="/backoffice/activities/edit"
              component={EditActivity}
            />
            <Route
              exact
              path="/backoffice/slides"
              component={SlidesShow}
            />
            <Route
              exact
              path="/backoffice/organization"
              component={OrganizationPage}
            />
            <Route
              exact
              path="/backoffice/testimonials"
              component={TestimonialList}
            />
            <Route
              exact
              path="/backoffice/users"
              component={UserList}
            />
            <Route
              exact
              path="/backoffice/users/create"
              component={UserCreate}
            />
            <Route
              exact
              path="/backoffice/users/edit"
              component={CreateOrEditUser}
            />
            <Route
              exact
              path="/backoffice/homeEdition"
              component={HomeEdition}
            />

            <Redirect to="/" />

          </Switch>
        </>
        
    )
}
