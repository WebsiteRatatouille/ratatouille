import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/img/ratatouille-original.png";
import Profile from "../assets/img/ratatouille-icon.png";

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img src={Logo} alt="Logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className="nav-link active" aria-current="page" to="/home">
                                Home
                            </Link>
                            <Link className="nav-link" to="/recipes">
                                Recipe
                            </Link>
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                            <Link className="nav-link" to="/aboutUs">
                                About us
                            </Link>
                        </ul>
                    </div>
                    {/* <!-- Profile --> */}
                    <div className="profile">
                        <img src={Profile} alt="Remy" />
                        <span>Remy</span>
                        <i className="bx bx-caret-down"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
