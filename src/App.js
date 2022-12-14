import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Projects from './Projects';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
