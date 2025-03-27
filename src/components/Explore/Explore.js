import React from "react";
import "./Explore.css";
import RecipeGrid from "../RecipeGrid/RecipeGrid";

import ExploreRecipeImage1 from "../../assets/img/explore-more.webp";
import ExploreRecipeImage2 from "../../assets/img/explore-more-2.webp";
import ExploreRecipeImage3 from "../../assets/img/explore-more-3.webp";
import ExploreRecipeImage4 from "../../assets/img/explore-more-4.webp";

function Explore() {
    const exploreRecipes = [
        {
            image: ExploreRecipeImage1,
            title: "Bánh waffle siro bơ",
            link: "#",
        },
        {
            image: ExploreRecipeImage2,
            title: "Bò hầm kiểu Pháp",
            link: "#",
        },
        {
            image: ExploreRecipeImage3,
            title: "Bánh táo Crumble",
            link: "#",
        },
        {
            image: ExploreRecipeImage4,
            title: "Chocolate Mousse",
            link: "#",
        },
    ];

    return (
        <div className="explore-more-wrapper" id="explore-more">
            <div className="explore-more-title">
                <h2>Khám phá thêm</h2>
            </div>
            <RecipeGrid recipeList={exploreRecipes} />
        </div>
    );
}

export default Explore;
