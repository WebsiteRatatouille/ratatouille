import React from "react";
import "./RecipeTable.css";

function RecipeTable() {
    const recipeList = [
        {
            id: 1,
            name: "Phở Bò",
            image: "/images/pho.jpg",
            cookingTime: 90,
            category: "Món nước",
        },
        {
            id: 2,
            name: "Bánh Mì",
            image: "/images/banhmi.jpg",
            cookingTime: 15,
            category: "Ăn sáng",
        },
    ];
    return (
        <div className="recipe-table-wrapper">
            <h1>Công thức</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ảnh</th>
                        <th>Tên món</th>
                        <th>Thời gian nấu</th>
                        <th>Danh mục</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {recipeList.length === 0 ? (
                        <tr>
                            <td colSpan="5">Không có công thức nào.</td>
                        </tr>
                    ) : (
                        recipeList.map((recipe) => (
                            <tr key={recipe.id}>
                                <td>
                                    <img src={recipe.image} alt={recipe.name} width="60" />
                                </td>
                                <td>{recipe.name}</td>
                                <td>{recipe.cookingTime} phút</td>
                                <td>{recipe.category}</td>
                                <td>
                                    <button
                                        title="Chỉnh sửa"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Tooltip on top"
                                    >
                                        <i className="bx bxs-edit"></i>
                                    </button>

                                    <button title="Xóa">
                                        <i className="bx bxs-trash"></i>
                                    </button>
                                    <button title="Chi tiết">
                                        <i className="bx bxs-file-find"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default RecipeTable;
