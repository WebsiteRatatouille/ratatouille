import React from "react";
import "./Slide.css";
import { Link } from "react-router-dom";

function Slide({ image, title, subtitle, description, link }) {
    return (
        <div className="slide-wrapper">
            <div className="carousel-item">
                <div class="home-text">
                    <span>Foods of the day</span>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>{subtitle}</p>
                    <Link to={link}>
                        <button
                            type="button"
                            class="btn btn-light btn-check-now"
                        >
                            Check now
                            <i class="bx bx-right-arrow-alt"></i>
                        </button>
                    </Link>
                </div>

                <img src={image} alt="Slide" />
            </div>
        </div>
    );
}

export default Slide;
