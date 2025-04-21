import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBoard from "../components/AdminSideBoard/AdminSideBoard";

function AdminLayout() {
    return (
        <div className="admin-layout">
            <AdminSideBoard />
            <Outlet />
        </div>
    );
}

export default AdminLayout;
