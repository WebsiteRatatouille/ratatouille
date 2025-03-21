import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/recipes" exact element={<Recipes />} />
                    <Route path="/blog" exact element={<Blog />} />
                    <Route path="/contact" exact element={<Contact />} />
                    <Route path="/aboutUs" exact element={<AboutUs />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
