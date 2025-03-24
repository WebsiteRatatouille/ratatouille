import React from "react";
import { Link } from "react-router-dom";

import Slide from "../Slide/Slide";

import Slide1 from "../../assets/img/slide1.webp";
import Slide2 from "../../assets/img/slide2.webp";
import Slide3 from "../../assets/img/slide3.webp";

function Swiper() {
    const swiperSlides = [
        {
            image: Slide1,
            title: "hiasd",
            subtitle: "asd",
            description: "sadd",
            link: "#",
        },

        {
            image: Slide2,
            title: "hiasd",
            subtitle: "asd",
            description: "sadd",
            link: "#",
        },

        {
            image: Slide3,
            title: "hiasd",
            subtitle: "asd",
            description: "sadd",
            link: "#",
        },
    ];

    return (
        <div className="swiper-wrapper">
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    {swiperSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${
                                index === 0 ? "active" : ""
                            }`}
                        >
                            <Slide
                                image={slide.image}
                                title={slide.title}
                                subtitle={slide.subtitle}
                                description={slide.description}
                                link={slide.link}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Swiper;
