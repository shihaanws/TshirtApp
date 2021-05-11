import React from "react"
import { useHistory } from "react-router-dom";
import "./App.css";

function Nav() {
    const history = useHistory();

    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-primary static-top header-a">
            <div className="container nav-container">
                <a onClick={e=> history.push('/home')} className="navbar-brand brand" href="#">Tshirt Dzyner</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                            <a style={{color:"black"}} className="btn btn-outline-light start" onClick={e=> history.push('/projects')}  href="/projects#">View Designs</a>
                        </li>
                        <a style={{color:"black"}} className="btn btn-outline-light start" onClick={e=> history.push('/dashboard')}  href="/dashboard#"> Go to App</a>



                    </ul>


                </div>


            </div>
        </nav>
    );
}

export default Nav;
