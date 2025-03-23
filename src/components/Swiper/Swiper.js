import React from "react";
import { Link } from "react-router-dom";
import "./Swiper.css";

import "swiper/css";
import "swiper/css/navigation";

import Slide1 from "../../assets/img/slide1.webp";
import Slide2 from "../../assets/img/slide2.webp";
import Slide3 from "../../assets/img/slide3.webp";

function Swiper() {
    return (
        // <!-- Home Swiper-->
        <section class="swiper">
            <div class="swiper-wrapper">
                {/* <!-- Slide 1 --> */}
                <div class="swiper-slide slide-container">
                    <div class="home-text">
                        <span>Foods of the day</span>
                        <h1>Cơm sốt cà ri</h1>
                        <p>Cơm sốt cà ri là món ăn thơm ngon với cơm trắng dẻo kết hợp cùng sốt cà ri đậm đà, béo nhẹ. Sốt được nấu từ thịt, khoai tây, cà rốt và gia vị đặc trưng, tạo nên hương vị cay nhẹ, hấp dẫn</p>
                        <p>Thời gian nấu: 20 phút</p>
                        <Link to="#">
                            <button type="button" class="btn btn-light btn-check-now">
                                Check now <i class="bx bx-right-arrow-alt"></i>
                            </button>
                        </Link>
                    </div>

                    <img src={Slide1} alt="Slide 1" />
                </div>

                {/* <!-- Slide 2 --> */}
                <div class="swiper-slide slide-container">
                    <div class="home-text">
                        <span>Foods of the day</span>
                        <h1>Gumbo hải sản</h1>
                        <p>Gumbo hải sản là món súp đậm đà của ẩm thực Louisiana, kết hợp tôm, xúc xích, rau củ và gia vị Cajun đặc trưng. Nước dùng sánh mịn, thơm lừng, thấm đẫm hương vị cay nồng và ngọt tự nhiên từ hải sản.</p>
                        <p>Thời gian nấu: 1 tiếng</p>
                        <Link to="#">
                            <button type="button" class="btn btn-light btn-check-now">
                                Check now <i class="bx bx-right-arrow-alt"></i>
                            </button>
                        </Link>
                    </div>
                    <img src={Slide2} alt="Slide 2" />
                </div>

                {/* <!-- Slide 3 --> */}
                <div class="swiper-slide slide-container">
                    <div class="home-text">
                        <span>Foods of the day</span>
                        <h1>Bánh sừng bò nhân kem</h1>
                        <p>Bánh sừng bò nhân kem là món bánh ngọt thơm ngon với lớp vỏ bơ giòn rụm và nhân kem mịn màng, béo ngậy bên trong. Khi cắn vào, lớp vỏ xốp tan hòa quyện cùng vị ngọt dịu của kem, tạo nên trải nghiệm ẩm thực hấp dẫn.</p>
                        <p>Thời gian nấu: 2 tiếng</p>
                        <Link to="#">
                            <button type="button" class="btn btn-light btn-check-now">
                                Check now <i class="bx bx-right-arrow-alt"></i>
                            </button>
                        </Link>
                    </div>
                    <img src={Slide3} alt="Slide 3" />
                </div>
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </section>
    );
}

export default Swiper;
