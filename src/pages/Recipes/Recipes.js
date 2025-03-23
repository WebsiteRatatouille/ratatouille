import React from "react";
import "../styles/Recipes.css";

{
  /* Top rate */
}
const topRatedRecipes = [
  {
    title: "The Best Soft Chocolate Chip Cookies",
    rating: 4.9,
    reviews: 1683,
    image: "src/assets/img/chocolate-chip-cookies.jpg", // Đường dẫn tới ảnh
  },
  {
    title: "The Best Sunday Chili",
    rating: 4.9,
    reviews: 115,
    image: "img/sunday-chili.jpg",
  },
  {
    title: "Miracle No Knead Bread",
    rating: 4.8,
    reviews: 577,
    image: "img/no-knead-bread.jpg",
  },
  {
    title: "Best Anytime Baked Chicken Meatballs",
    rating: 4.9,
    reviews: 735,
    image: "img/baked-chicken-meatballs.jpg",
  },
  {
    title: "The Best Chicken Tinga Tacos",
    rating: 4.9,
    reviews: 185,
    image: "img/chicken-tinga-tacos.jpg",
  },
  {
    title: "The Best Detox Crockpot Lentil Soup",
    rating: 4.8,
    reviews: 373,
    image: "img/lentil-soup.jpg",
  },
  {
    title: "Vegetarian Shepherd’s Pie",
    rating: 4.8,
    reviews: 397,
    image: "img/shepherds-pie.jpg",
  },
  {
    title: "Fruit Pizza",
    rating: 4.8,
    reviews: 67,
    image: "img/fruit-pizza.jpg",
  },
  {
    title: "Fluffiest Blueberry Pancakes",
    rating: 4.8,
    reviews: 356,
    image: "img/blueberry-pancakes.jpg",
  },
];
{
  /* End Top rate */
}

function Recipes() {
  return (
    <div className="recipes-page">
      <div className="recipes-header">
        <h1>Recipes</h1>
        <p>Welcome to Recipes !</p>
      </div>
      {/* Add Searchbar */}
      <form className="search-form">
        <input
          type="text"
          placeholder="Search by keyword"
          className="search-input"
        />
      </form>
      {/* End Searchbar */}

      {/* Top Rated Recipes */}
      <div className="top-rated-section">
        <h2 className="top-rated-title">Top Rated Recipes</h2>
        <p className="top-rated-description">
          Out of all the many recipes, these are our shining stars - the recipes
          we come back to again and again.
        </p>
        <div className="recipe-grid">
          {topRatedRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-rating">
                {recipe.rating} stars | {recipe.reviews} reviews
              </p>
            </div>
          ))}
        </div>
        <button className="view-all-button">+ View All Recipes</button>
      </div>
      {/* End Top rate */}

      <div className="recipe-content">{/* Nội dung khác của trang */}</div>
    </div>
  );
}

export default Recipes;
