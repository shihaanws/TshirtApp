import './App.css';
import Dashboard from './components/Dashboard'
import TshirtDesign from "./components/TshirtDesign";
import Home from "./components/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <div className="App">

      <Router>

        <div>
          <nav style={{ color: "blue" }}></nav>
          <Switch>

            <Route path="/dashboard">
              <Header />
              <Dashboard />
            </Route>

            <Route path="/projects">
              <Header />
              <TshirtDesign />
            </Route>

            <Route path="/">
              <Link to="/home"></Link>
              <Home />
            </Route>

          </Switch>
        </div>

      </Router>

    </div>
  );
}

export default App;
