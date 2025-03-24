import React from "react";
import "./DontMiss.css";
import SmallCollectionCard from "../SmallCollectionCard/SmallCollectionCard";

import Collection1 from "../../assets/img/dont-miss-1.webp";
import Collection2 from "../../assets/img/dont-miss-2.webp";
import Collection3 from "../../assets/img/dont-miss-3.webp";

function DontMiss() {
    const dontMissCollections = [
        { image: Collection1, title: "Công thức ớt hầm ngon nhất", link: "#" },
        { image: Collection2, title: "Công thức chế biến cà tím đầy sáng tạo", link: "#" },
        { image: Collection3, title: "Công thức nấu gà nhanh và dễ dàng", link: "#" },
    ];

    return (
        <div className="dont-miss-wrapper">
            <div className="dont-miss-title">
                <h2>Đừng bỏ lỡ</h2>
            </div>

            <div className="card-container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {dontMissCollections.map((collection, index) => (
                        <SmallCollectionCard key={index} image={collection.image} title={collection.title} link={collection.link} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DontMiss;
