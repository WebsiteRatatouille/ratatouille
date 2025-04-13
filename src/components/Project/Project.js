import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-content">
        <h2 className="project-title">Dự Án Ratatouille</h2>
        <div className="project-description">
          <p>
            Ratatouille là một nền tảng ẩm thực trực tuyến, nơi kết nối những
            người đam mê nấu ăn và khám phá ẩm thực từ khắp nơi trên thế giới.
            Dự án của chúng tôi không chỉ là một trang web công thức nấu ăn
            thông thường, mà còn là một cộng đồng nơi mọi người có thể chia sẻ,
            học hỏi và phát triển đam mê ẩm thực của mình.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
