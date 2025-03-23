import React from "react";
import "./Home.css";
import Swiper from "../../components/Swiper/Swiper";
import Trending from "../../components/Trending/Trending";
import LineSeparator from "../../components/LineSeparator/LineSeparator";

function Home() {
    return (
        <div className="home">
            <Swiper />
            <LineSeparator />
            <Trending />
        </div>
    );
}

export default Home;
