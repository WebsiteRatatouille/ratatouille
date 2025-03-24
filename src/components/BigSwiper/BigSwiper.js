import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../Slide/Slide";
import "./BigSwiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slide1 from "../../assets/img/slide1.webp";
import Slide2 from "../../assets/img/slide2.webp";
import Slide3 from "../../assets/img/slide3.webp";
import BackGroundImage from "../../assets/img/background.jpg";

function BigSwiper() {
    const bigSwiperSlides = [
        {
            image: Slide1,
            title: "aksdjasd",
            subtitle: "asdasd",
            description: "asdasd",
            link: "#",
        },

        {
            image: Slide2,
            title: "aksdjasd",
            subtitle: "asdasd",
            description: "asdasd",
            link: "#",
        },

        {
            image: Slide3,
            title: "aksdjasd",
            subtitle: "asdasd",
            description: "asdasd",
            link: "#",
        },
    ];
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {bigSwiperSlides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            backgroundImage: `url(${BackGroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <Slide
                            image={slide.image}
                            title={slide.title}
                            subtitle={slide.subtitle}
                            description={slide.description}
                            link={slide.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BigSwiper;
