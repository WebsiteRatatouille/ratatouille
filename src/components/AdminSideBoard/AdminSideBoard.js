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
}

export default AdminSideBoard;
