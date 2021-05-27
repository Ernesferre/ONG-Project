import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nosotros from "./pages/Nosotros";
import { CategoryList } from "./components/backoffice/categories/CategoryList";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/backoffice/layout/Header";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Header />
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
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
