import React from "react"
import { useHistory } from "react-router-dom";

function Nav() {
    const history = useHistory();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary static-top header-a">
            <div className="container nav-container">
                <a onClick={e=> history.push('/home')} className="navbar-brand brand" href="/">Tshirt Designer</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Courses
        </a> */}
                            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div> */}
                        </li>

                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Why Us <span className="sr-only">(current)</span></a>
                        </li> */}
                        <li className="nav-item">
                            <a style={{color:"black"}} className="btn btn-outline-light start" onClick={e=> history.push('/projects')}  href="/projects#">View Designs</a>
                        </li>
                        <a style={{color:"black"}} className="btn btn-outline-light start" onClick={e=> history.push('/dashboard')}  href="/dashboard"> Go to App</a>


                        {/* <a className="btn btn-outline-light start "  >Start Designing</a> */}

                    </ul>


                </div>


            </div>
        </nav>
    );
}

export default Nav;
