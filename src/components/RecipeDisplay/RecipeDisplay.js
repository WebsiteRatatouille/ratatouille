import React, { useContext } from "react";
import "./RecipeDisplay.css";
import { food_list } from "../../assets/frontend_assets/assets";
import { RecipeMenuContext } from "../../context/RecipeMenuContext";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeGrid from "../RecipeGrid/RecipeGrid";

function RecipeDisplay({ category }) {
    const { food_list } = useContext(RecipeMenuContext);

    return (
        <div className="recipe-display">
            <RecipeGrid recipeList={food_list} category={category} />
        </div>
    );
}

export default RecipeDisplay;
