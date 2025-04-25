import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./AdminSideBoard.css";
import Logo from "../../assets/img/ratatouille-original.png";

function AdminSideBoard() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    // Clear user data and reload the app to return to the homepage
    window.location.href = "/";
  };

<<<<<<< HEAD
  return (
    <div className="admin-side-board-wrapper">
      <div className="navigation">
        <ul>
          <li>
            <NavLink className="logo" to="#">
              <img src={Logo} alt="" />
            </NavLink>
          </li>

          <li>
            <NavLink className="side-bar-link" to="#">
              <span className="icon">
                <i className="bx bx-home"></i>
              </span>
              <span className="title">Tổng quan</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="side-bar-link" to="#">
              <span className="icon">
                <i className="bx bx-detail"></i>
              </span>
              <span className="title">Công thức</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="side-bar-link" to="#">
              <span className="icon">
                <i class="bx bx-book-alt"></i>
              </span>
              <span className="title">Danh mục</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="side-bar-link" to="#">
              <span className="icon">
                <i className="bx bx-collection"></i>
              </span>
              <span className="title">Bộ sưu tập</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="side-bar-link" to="#">
              <span className="icon">
                <i className="bx bx-user-circle"></i>
              </span>
              <span className="title">Người dùng</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="side-bar-link" to="#" onClick={handleLogout}>
              <span className="icon">
                <i className="bx bx-exit"></i>
              </span>
              <span className="title">Đăng xuất</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
=======
    return (
        <div className="admin-side-board-wrapper">
            <div className="navigation">
                <div className="logo">
                    <i class="bx bx-menu"></i>
                    <img src={Logo} alt="" />
                </div>

                <div className="side-bar-menu">
                    <ul>
                        <li>
                            <NavLink className="side-bar-link" to="/admin">
                                <span className="icon">
                                    <i className="bx bx-home"></i>
                                </span>
                                <span className="title">Tổng quan</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="side-bar-link" to="/adminRecipes">
                                <span className="icon">
                                    <i className="bx bx-detail"></i>
                                </span>
                                <span className="title">Công thức</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="side-bar-link" to="adminCategories">
                                <span className="icon">
                                    <i class="bx bx-book-alt"></i>
                                </span>
                                <span className="title">Danh mục</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="side-bar-link" to="adminCollections">
                                <span className="icon">
                                    <i className="bx bx-collection"></i>
                                </span>
                                <span className="title">Bộ sưu tập</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="side-bar-link" to="adminUsers">
                                <span className="icon">
                                    <i className="bx bx-user-circle"></i>
                                </span>
                                <span className="title">Người dùng</span>
                            </NavLink>
                        </li>

                        <li>
                            <button
                                className="side-bar-link logout-btn"
                                to="#"
                                onClick={handleLogout}
                            >
                                <span className="icon">
                                    <i className="bx bx-exit"></i>
                                </span>
                                <span className="title">Đăng xuất</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
>>>>>>> refs/remotes/origin/main
}

export default AdminSideBoard;
