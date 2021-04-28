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
            
            
              {/* <Link to="/dashboard">Dashboard</Link> */}
            {/* <Link to="/home">Home</Link> */}
            
        </nav>



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/dashboard">
            {/* <Link to="/projects">Projects Page</Link> */}
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
  




            {/* <Navbar/>
            <Dashboard/> 

            <Router>
<Link to="/projects">for projs</Link>

        <Route exact path="/projects">
          <Project />
        </Route>
</Router> */}
       

            
    </div>
    
  );
}

export default App;
