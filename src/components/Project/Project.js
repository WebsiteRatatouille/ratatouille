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
        <div className="project-features">
          <h3>Các Tính Năng Chính</h3>
          <ul>
            <li>Thư viện công thức nấu ăn đa dạng</li>
            <li>Hệ thống tìm kiếm và lọc thông minh</li>
            <li>Blog chia sẻ kiến thức ẩm thực</li>
            <li>Cộng đồng người dùng tương tác</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
