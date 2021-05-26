import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/nosotros" component={Nosotros} />

          </Switch>
        </div>
      </Router>
  );
}

export default App;
