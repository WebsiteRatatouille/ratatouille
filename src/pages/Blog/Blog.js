import React from "react";
import "./Blog.css";

import imageBlog1 from "../../assets/imgBlog/halong1.jpg";
import imageBlog2 from "../../assets/imgBlog/hanoi1.jpg";
import imageBlog3 from "../../assets/imgBlog/hanoi2.jpg";
import videoBlog from "../../assets/imgBlog/video1.mp4";

import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <div className="video-blog-background">
        <div style={{ width: "100%", maxWidth: "800px" }}>
          {/* Video không có controls, không tự động phát */}
          <video
            src={videoBlog}
            disablePictureInPicture
            autoPlay
            loop
            muted
            width="100%"
            style={{ display: "block" }}
          />
        </div>
        <h1></h1>
      </div>
      <div className="blog-container">
        <div className="text-field-1">
          <Link className="dieu-huong" to="/">
            HOME
          </Link>
          <i class="bx bx-chevron-right"></i>
          <Link className="dieu-huong" to="/recipes">
            CÔNG THỨC
          </Link>
          <i class="bx bx-chevron-right"></i>
          <Link className="dieu-huong" to="/contact">
            LIÊN HỆ
          </Link>
          <i class="bx bx-chevron-right"></i>
          <Link className="dieu-huong" to="/aboutUs">
            CHÚNG TÔI
          </Link>
        </div>
        <h1 className="title">RATATOUILLE</h1>
        <div className="author-info">
          <span>
            By{" "}
            <Link className="author-link" to="/author">
              Những Chú Chuột
            </Link>
          </span>
          <span className="article-date">Updated on April 1, 2024</span>
        </div>

        <div className="social-icon">
          <a href="https://web.facebook.com/people/Ratatouille-Page/61574059620067/">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <i className="bx bxl-tiktok"></i>
          <i class="bx bxl-youtube"></i>
        </div>
        <div className="image-blog">
          <img src={imageBlog1}></img>
        </div>
      </div>
    </>
  );
}

export default Blog;
