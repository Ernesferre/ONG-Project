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
import { CategoryList } from "./components/backoffice/categories/CategoryList";
import { CategoryPatch } from "./pages/backoffice/categories/CategoryPatch";
import { CategoryCreate } from "./pages/backoffice/categories/CategoryCreate";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/backoffice" component={Backoffice} />
            <Route
              exact
              path="/backoffice/categories"
              component={CategoryList}
            />
            <Route
              exact
              path="/backoffice/categories/:id"
              component={CategoryPatch}
            />
            <Route
              exact
              path="/backoffice/categories/create"
              component={CategoryCreate}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/nosotros" component={Nosotros} />
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
