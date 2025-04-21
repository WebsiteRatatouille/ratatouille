import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import UserLayout from "./layouts/UserLayout";
import Home from "./pages/UserPages/Home/Home";
import Recipes from "./pages/UserPages/Recipes/Recipes";
import Contact from "./pages/UserPages/Contact/Contact";
import AboutUs from "./pages/UserPages/AboutUs/AboutUs";
import Blog from "./pages/UserPages/Blog/Blog";

import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminPages/AdminDashboard/AdminDashboard";

import LoginPopup from "./components/LoginPopup/LoginPopup";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log("app render");
    return (
        <>
            <ProgressBar />
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

            <div className="App">
                <Routes>
                    <Route element={<UserLayout setShowLogin={setShowLogin} />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes" element={<Recipes />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/aboutUs" element={<AboutUs />} />
                    </Route>

                    <Route element={user?.role === "admin" ? <AdminLayout /> : <Navigate to="/" />}>
                        <Route path="/admin" element={<AdminDashboard />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
