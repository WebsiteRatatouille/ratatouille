import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard({ image, title, link }) {
    return (
        <div className="col">
            <Link className="card-link" to={link}>
                <div className="card">
                    <img src={image} alt="Food" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default RecipeCard;
