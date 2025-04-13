import React from "react";
import "./AboutUs.css";
import Project from "../../components/Project/Project";
import VisionMission from "../../components/VisionMission/VisionMission";
import Team from "../../components/Team/Team";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-header-content">
          <h1>About Us</h1>
          <h2 className="tagline">Where Passion Meets the Plate</h2>
          <p className="intro-text">
            Chào mừng đến với Ratatouille – nơi mỗi món ăn là một câu chuyện,
            mỗi công thức đều chứa đựng truyền thống. Chúng tôi không chỉ đơn
            thuần chia sẻ công thức nấu ăn – chúng tôi là một cộng đồng những
            người yêu ẩm thực, cùng nhau mang niềm vui của việc nấu ăn đậm chất
            truyền thống đến gian bếp của bạn.
          </p>
        </div>
      </div>
      <div className="about-content">
        <Project />
        <VisionMission />
        <Team />
      </div>
    </div>
  );
};

export default AboutUs;
