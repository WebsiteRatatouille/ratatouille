import React from "react";
import "./Home.css";
import Swiper from "../../components/Swiper/Swiper";
import Trending from "../../components/Trending/Trending";
import LineSeparator from "../../components/LineSeparator/LineSeparator";
import DontMiss from "../../components/DontMiss/DontMiss";
import Explore from "../../components/Explore/Explore";
import FeatureCollection from "../../components/FeatureCollection/FeatureCollection";
import FanFavorite from "../../components/FanFavorite/FanFavorite";

function Home() {
    return (
        <div className="home">
            <Swiper />

            <LineSeparator />
            <Trending />
            <DontMiss />
            <Explore />

            <LineSeparator />
            <FeatureCollection />
            <FanFavorite />
        </div>
    );
}

export default Home;
