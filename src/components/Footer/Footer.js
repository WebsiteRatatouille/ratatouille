import React, { useContext } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/ratatouille-original.png";
import { MenuContext } from "../../context/MenuContext";

function Footer() {
    const { menu, setMenu } = useContext(MenuContext);

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Ratatouille</h4>
                        <ul>
                            <li>
                                <Link
                                    onClick={() => setMenu("aboutUs")}
                                    className="footer-nav-link"
                                    to="/aboutUs"
                                >
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMenu("blog")}
                                    className="footer-nav-link"
                                    to="/blog"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMenu("recipes")}
                                    className="footer-nav-link"
                                    to="/recipes"
                                >
                                    Mục lục công thức
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMenu("contact")}
                                    className="footer-nav-link"
                                    to="/contact"
                                >
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Món ăn & Công thức</h4>
                        <ul>
                            <li>
                                <Link
                                    className="footer-nav-link"
                                    to="#"
                                >
                                    Nhanh & Dễ dàng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="footer-nav-link"
                                    to="#"
                                >
                                    Thuần chay
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="footer-nav-link"
                                    to="#"
                                >
                                    Nấu súp
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="footer-nav-link"
                                    to="#"
                                >
                                    Đồ uống
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Theo dõi chúng tôi</h4>

                        <div className="social-icon">
                            <a
                                href="https://www.facebook.com/profile.php?id=61574059620067"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bx bxl-facebook-circle"></i>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bx bxl-tiktok"></i>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bx bxl-youtube"></i>
                            </a>
                        </div>
                        <img src={Logo} alt="Logo" />
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    Copyright &copy;2025; Designed by{" "}
                    <span className="designer">Remy</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
