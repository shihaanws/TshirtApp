import React from 'react';


function Navbar() {
    return (
        <nav className="navbar navbar-expang-lg navbar-light bg-primary">
            <div className="container">
                <a href="/" className="navbar-brand text-white">Tshirt Designer</a>
            </div>
            <div className="collapse" >
                <div class="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">SignUp</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Login</a>
                    </li>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
