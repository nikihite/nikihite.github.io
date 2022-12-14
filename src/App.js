import './App.css';
import {
  BrowserRouter as Router,
  Routes,
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

        <Routes>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
