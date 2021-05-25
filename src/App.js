import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CategoryList } from "./components/backoffice/categories/CategoryList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/backoffice/categories" component={CategoryList} />
      </Switch>
    </Router>
  );
}

export default App;
