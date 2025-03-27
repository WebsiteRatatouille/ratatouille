import React, { useEffect, useState } from "react";
import "./LoginPopup.css";

function LoginPopup({ setShowLogin }) {
    const [currState, setCurrState] = useState("Đăng nhập");

    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = "hidden";

        return () => {
            // Re-enable scrolling
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div>
                    <span></span>
                    <i
                        onClick={() => setShowLogin(false)}
                        className="close-icon bx bx-x"
                    ></i>
                </div>

                <div className="login-popup-title">
                    <h2>{currState}</h2>

                    {currState === "Đăng nhập" ? (
                        <p>
                            Khám phá hàng ngàn công thức, lưu lại món
                            ăn yêu thích và chia sẻ trải nghiệm của
                            bạn!
                        </p>
                    ) : (
                        <p>
                            Tham gia ngay để lưu công thức, viết đánh
                            giá và kết nối với những người yêu ẩm
                            thực!
                        </p>
                    )}
                </div>

                <div className="login-popup-inputs">
                    {currState === "Đăng nhập" ? (
                        <></>
                    ) : (
                        <input
                            type="text"
                            placeholder="Tên của bạn"
                            required
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        required
                    />
                </div>
                <button>
                    {currState === "Đăng kí"
                        ? "Tạo tài khoản"
                        : "Đăng nhập"}
                </button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>
                        Tôi đồng ý với Điều khoản sử dụng & Chính sách
                        quyền riêng tư
                    </p>
                </div>
                <div className="auth-switch">
                    {currState === "Đăng nhập" ? (
                        <p>
                            Tạo tài khoản?
                            <span
                                onClick={() =>
                                    setCurrState("Đăng kí")
                                }
                            >
                                Đăng kí
                            </span>
                        </p>
                    ) : (
                        <p>
                            Đã có tài khoản?
                            <span
                                onClick={() =>
                                    setCurrState("Đăng nhập")
                                }
                            >
                                Đăng nhập
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}

export default LoginPopup;
