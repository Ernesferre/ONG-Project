import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/backoffice/categories" />
      </Switch>
    </Router>
  );
}

export default App;
