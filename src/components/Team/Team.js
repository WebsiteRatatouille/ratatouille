import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Nguyễn Đức Lộc",
      role: "Founder & CEO",
      description:
        "Người sáng lập với hơn 10 năm kinh nghiệm trong lĩnh vực ẩm thực",
      image: "path_to_image", // Thêm đường dẫn hình ảnh thực tế sau
    },
    {
      name: "Nguyễn Hữu Huynh",
      role: "Head Chef",
      description: "Bếp trưởng với chuyên môn về ẩm thực Á - Âu",
      image: "path_to_image",
    },
    {
      name: "Mai Vũ Tuấn Minh",
      role: "Content Manager",
      description: "Quản lý nội dung với đam mê chia sẻ kiến thức ẩm thực",
      image: "path_to_image",
    },
    {
      name: "Nguyễn Bá Đạt",
      role: "Community Manager",
      description: "Phụ trách phát triển cộng đồng và tương tác người dùng",
      image: "path_to_image",
    },
  ];

  return (
    <div className="team-container">
      <div className="team-content">
        <h2 className="team-title">Đội Ngũ Của Chúng Tôi</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-image">
                {/* Tạm thời dùng div với background màu, sau này thay bằng hình ảnh thật */}
                <div className="placeholder-image"></div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
