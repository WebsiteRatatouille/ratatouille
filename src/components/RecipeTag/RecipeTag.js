import React from "react";
import "./RecipeTag.css";
import { Link } from "react-router-dom";

function RecipeTag({ name, link }) {
    return (
        <div className="recipe-tag-wrapper">
            <Link className="nav-link" to={link}>
                <h5 className="name">{name}</h5>
            </Link>
        </div>
    );
}

export default RecipeTag;
