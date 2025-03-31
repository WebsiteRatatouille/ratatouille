import React from "react";
import "./RecipeGrid.css";

import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeGrid({ recipeList, category = "All" }) {
    const filteredRecipes =
        category === "All"
            ? recipeList
            : recipeList.filter(
                  (recipe) => recipe.category === category
              );

    return (
        <div className="recipe-grid-wrapper">
            <div className="card-container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {filteredRecipes.map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            name={recipe.name}
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
