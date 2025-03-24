import React from "react";
import "./Trending.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import TrendingRecipeImage1 from "../../assets/img/trending-now.webp";
import TrendingRecipeImage2 from "../../assets/img/trending-now-2.webp";
import TrendingRecipeImage3 from "../../assets/img/trending-now-3.webp";
import TrendingRecipeImage4 from "../../assets/img/trending-now-4.webp";

function Trending() {
    const trendingRecipes = [
        {
            image: TrendingRecipeImage1,
            title: "Bánh waffle siro bơ",
            link: "#",
        },
        {
            image: TrendingRecipeImage2,
            title: "Bò hầm kiểu Pháp",
            link: "#",
        },
        {
            image: TrendingRecipeImage3,
            title: "Bánh táo Crumble",
            link: "#",
        },
        {
            image: TrendingRecipeImage4,
            title: "Chocolate Mousse",
            link: "#",
        },
    ];

    return (
        <div className="trending-wrapper">
            <div className="trending-title">
                <h2>Xu hướng</h2>
            </div>

            <div className="card-container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {trendingRecipes.map((recipe, index) => (
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

export default Trending;
