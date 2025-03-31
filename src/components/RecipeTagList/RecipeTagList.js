import React from "react";
import "./RecipeTagList.css";
import RecipeTag from "../RecipeTag/RecipeTag";

function RecipeTagList() {
    const RecipeTags = [
        { name: "Bữa sáng" },
        { name: "Bữa trưa" },
        { name: "Bữa tối" },
        { name: "Ăn nhẹ" },
        { name: "Tráng miệng" },
        { name: "Nước ép" },
        { name: "Chế biến nhanh" },
        { name: "Đồ chay" },
    ];

    return (
        <div className="recipe-tag-list-wrapper">
            <h5 className="title">Khám phá</h5>
            <div className="recipe-tag-list">
                {RecipeTags.map((item, index) => (
                    <RecipeTag name={item.name} />
                ))}
            </div>
        </div>
    );
}

export default RecipeTagList;
