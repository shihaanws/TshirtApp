import './App.css';
import Dashboard from './Dashboard'
import Project from "./Project";
import Home from "./Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Header from './Header';

    
function App() {
  return (
    <div className="App">

<Router>

      <div>
        <nav style={{color:"blue"}}>
        </nav>



        <Switch>
          
          <Route path="/dashboard">
             <Header/>
            <Dashboard/>
          </Route>


         


          <Route path="/projects">
            <Header/>
             <Project/>
          </Route>


           <Route path="/">
          <Link to="/home"></Link>
            
              <Home/>
          </Route>


        </Switch>
      </div>
    </Router>
  
            
    </div>
    
  );
}

export default App;
