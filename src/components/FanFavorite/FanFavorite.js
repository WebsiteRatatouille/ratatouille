import React from "react";
import "./FanFavorite.css";
import RecipeGrid from "../RecipeGrid/RecipeGrid";

import FanFavoriteRecipeImage1 from "../../assets/img/fan-favorite-1.webp";
import FanFavoriteRecipeImage2 from "../../assets/img/fan-favorite-2.webp";
import FanFavoriteRecipeImage3 from "../../assets/img/fan-favorite-3.webp";
import FanFavoriteRecipeImage4 from "../../assets/img/fan-favorite-4.webp";
import FanFavoriteRecipeImage5 from "../../assets/img/fan-favorite-5.webp";
import FanFavoriteRecipeImage6 from "../../assets/img/fan-favorite-6.webp";
import FanFavoriteRecipeImage7 from "../../assets/img/fan-favorite-7.webp";
import FanFavoriteRecipeImage8 from "../../assets/img/fan-favorite-8.webp";
import FanFavoriteRecipeImage9 from "../../assets/img/fan-favorite-9.webp";
import FanFavoriteRecipeImage10 from "../../assets/img/fan-favorite-10.webp";
import FanFavoriteRecipeImage11 from "../../assets/img/fan-favorite-11.webp";
import FanFavoriteRecipeImage12 from "../../assets/img/fan-favorite-12.webp";

function FanFavorite() {
    const fanFavoriteRecipes = [
        {
            image: FanFavoriteRecipeImage1,
            title: "Sườn nướng lò",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage2,
            title: "Thanh phô mai Mozzarella",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage3,
            title: "Bánh pancake thuần chay 5 phút",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage4,
            title: "Shakshuka",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage5,
            title: "Sốt Teriyaki Nhà Hàng",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage6,
            title: "Chili Skylike - Phiên Bản Mô Phỏng Skyline Chili",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage7,
            title: "Bánh Chuối Hạt Thơm Ngon & Mềm Ẩm",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage8,
            title: "Món Ớt Chuông Đoạt Giải",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage9,
            title: "Mì pasta bông cải xanh và tỏi",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage10,
            title: "Cánh gà giòn lò nướng",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage11,
            title: "Nướng bít tết hoàn hảo",
            link: "#",
        },
        {
            image: FanFavoriteRecipeImage12,
            title: "Bánh quế Bỉ ngon nhất",
            link: "#",
        },
    ];

    return (
        <div className="fan-favorite-wrapper" id="fan-favorite">
            <div className="fan-favorite-title">
                <h2>Công thức ưu thích</h2>
            </div>
            <RecipeGrid recipeList={fanFavoriteRecipes} />
        </div>
    );
}

export default FanFavorite;
