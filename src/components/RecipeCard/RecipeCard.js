import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard({ image, name, link }) {
    return (
        <div className="recipe-card">
            <div className="col">
                <Link className="card-link" to={link}>
                    <div className="card">
                        <img src={image} alt="Food" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default RecipeCard;
