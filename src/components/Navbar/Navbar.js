import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/ratatouille-original.png";
import Profile from "../../assets/img/ratatouille-icon.png";

function Navbar() {
    const [menu, setMenu] = useState("home");

    return (
        <header>
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link
                                onClick={() => setMenu("home")}
                                className={
                                    menu === "home"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/"
                            >
                                Trang chủ
                            </Link>
                            <Link
                                onClick={() => setMenu("recipes")}
                                className={
                                    menu === "recipes"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/recipes"
                            >
                                Công thức
                            </Link>
                            <Link
                                onClick={() => setMenu("blog")}
                                className={
                                    menu === "blog"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/blog"
                            >
                                Blog
                            </Link>
                            <Link
                                onClick={() => setMenu("contact")}
                                className={
                                    menu === "contact"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/contact"
                            >
                                Liên hệ
                            </Link>
                            <Link
                                onClick={() => setMenu("aboutUs")}
                                className={
                                    menu === "aboutUs"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/aboutUs"
                            >
                                Chúng tôi
                            </Link>
                        </ul>
                    </div>
                    {/* <!-- Profile --> */}
                    <div className="profile">
                        {/* <img src={Profile} alt="Remy" />
                        <span>Remy</span>
                        <i className="bx bx-caret-down"></i> */}
                        <button>Đăng nhập</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
