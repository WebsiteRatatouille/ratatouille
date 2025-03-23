import React from "react";
import "./Recipes.css";

const topRatedRecipes = [
  {
    title: "The Best Soft Chocolate Chip Cookies",
    rating: 4.9,
    reviews: 1683,
    image: "img/chocolate-chip-cookies.jpg", // Đường dẫn tới ảnh
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

const Recipes = () => {
  return (
    <div className="recipes-page">
      <h1 className="recipes-title">Recipes</h1>
      <p className="recipes-description">Welcome to Recipes!</p>

      {/* Phần Top Rated Recipes */}
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
    </div>
  );
};

export default Recipes;
