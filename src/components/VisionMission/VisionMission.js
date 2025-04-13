import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="vision-mission-content">
        <div className="vision-section">
          <h2>Tầm Nhìn</h2>
          <p>
            Trở thành nền tảng ẩm thực hàng đầu, nơi kết nối và truyền cảm hứng
            cho cộng đồng yêu thích ẩm thực, góp phần phát triển văn hóa ẩm thực
            và nâng cao trải nghiệm nấu ăn của mọi người.
          </p>
        </div>

        <div className="mission-section">
          <h2>Sứ Mệnh</h2>
          <ul>
            <li>
              Cung cấp nguồn công thức nấu ăn đa dạng, chất lượng và dễ thực
              hiện
            </li>
            <li>Xây dựng cộng đồng chia sẻ kiến thức và đam mê ẩm thực</li>
            <li>Bảo tồn và phát triển văn hóa ẩm thực các vùng miền</li>
            <li>Hỗ trợ người dùng nâng cao kỹ năng nấu ăn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
