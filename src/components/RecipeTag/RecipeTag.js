import React from "react";
import "./RecipeTag.css";

function RecipeTag({ name }) {
    return (
        <div className="recipe-tag-wrapper">
            <h5 className="name">{name}</h5>
        </div>
    );
}

export default RecipeTag;
