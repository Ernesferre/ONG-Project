import "./App.css";
//REACT-ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//CHAKRA
import { ChakraProvider } from "@chakra-ui/react";

// BACKOFFICE
import { Private } from "./routes/Private";
import { Public } from "./routes/Public";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Switch>
            <PrivateRoute path="/backoffice" component={Private} />

            <Route path="/" component={Public} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
