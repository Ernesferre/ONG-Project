import "./App.css";
//REACT-ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//CHAKRA
import { ChakraProvider } from "@chakra-ui/react";

//CLIENT
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nosotros from "./pages/Nosotros";
// BACKOFFICE
import Header from "./components/backoffice/layout/Header";
import Backoffice from "./components/backoffice/Backoffice";
import NoveltiesList from "./components/backoffice/novelties/NoveltiesList";
import { CategoryList } from "./components/backoffice/categories/CategoryList";
import { CategoryPatch } from "./pages/backoffice/categories/CategoryPatch";
import { CategoryCreate } from "./pages/backoffice/categories/CategoryCreate";
import ListOfActivities from "./components/backoffice/activities/ListOfActivities";
import CreateActivity from "./components/backoffice/activities/CreateActivity";
import EditActivity from "./components/backoffice/activities/EditActivity";
import SlidesShow from "./components/backoffice/slides/SlidesShow";
import { OrganizationPage } from "./pages/backoffice/organization/OrganizationPage";
import TestimonialList from "./components/backoffice/testimonials/TestimonialList";
import { UserList } from "./components/backoffice/users/UserList";
import { CreateOrEditUser } from "./components/backoffice/users/CreateOrEditUser";
import { UserCreate } from "./pages/backoffice/users/UserCreate";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Switch>
            <Route exact path="/backoffice" component={Backoffice} />
            <Route exact path="/backoffice/news" component={NoveltiesList} />
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
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/nosotros" component={Nosotros} />
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
            <Route exact path="/backoffice/slides" component={SlidesShow} />
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
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
