import React from "react";
import "./RecipeGrid.css";

import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeGrid({ recipeList }) {
    return (
        <div className="recipe-grid-wrapper">
            <div className="card-container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {recipeList.map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            title={recipe.title}
                            image={recipe.image}
                            link={recipe.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecipeGrid;
