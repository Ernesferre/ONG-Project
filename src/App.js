import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nosotros from "./pages/Nosotros";
import { CategoryList } from "./components/backoffice/categories/CategoryList";
import { ChakraProvider } from "@chakra-ui/react";
import ListOfActivities from "./components/backoffice/activities/ListOfActivities";
import CreateActivity from "./components/backoffice/activities/CreateActivity";
import EditActivity from "./components/backoffice/activities/EditActivity";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/backoffice/categories"
              component={CategoryList}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/backoffice/activities" component={ListOfActivities} />
            <Route exact path="/backoffice/activities/create" component={CreateActivity} />
            <Route exact path="/backoffice/activities/edit" component={EditActivity} />
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
