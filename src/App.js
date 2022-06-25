import './App.css';
import Dashboard from './components/designerPage/DesignerPage'
import TshirtDesign from "./components/designedCollection/TshirtDesign";
import LandingPage from "./components/landingPage/LandingPage";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Nav from './components/landingPage/Header';


function App() {
  return (
    <div className="App">

      <Router>

        <div>
          <nav style={{ color: "blue" }}></nav>
          <Switch>

            <Route path="/dashboard">
              <Nav />
              <Dashboard />
            </Route>

            <Route path="/projects">
              <Nav />
              <TshirtDesign />
            </Route>

            <Route path="/">
              <Link to="/home"></Link>
              <LandingPage />
            </Route>

          </Switch>
        </div>

      </Router>

    </div>
  );
}

export default App;
