import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MenuContextProvider from "./context/MenuContext";
import { BrowserRouter } from "react-router-dom";
import RecipeMenuProvider from "./context/RecipeMenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <MenuContextProvider>
        <RecipeMenuProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecipeMenuProvider>
    </MenuContextProvider>
);
