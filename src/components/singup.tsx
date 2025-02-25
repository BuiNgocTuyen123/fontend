import React, { useState } from "react";
import axios from "axios";  // Sử dụng axios để gửi yêu cầu HTTP
import './User/CSS/login.css';
import API_URL from "../config"

const Signup = () => {
    const [name, setName] = useState("");  // Sử dụng name cho đăng ký
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");  // Thông báo đăng ký thành công

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/api/v1/admin/signup`, {
                name,  
                password,
                email,
            });

            // Nếu đăng ký thành công, lưu thông tin vào localStorage và hiển thị thông báo
            localStorage.setItem("user_token", response.data.token);
            setSuccessMessage("Đăng ký thành công!");
            setError("");  // Xóa thông báo lỗi nếu thành công

            // Điều hướng đến trang user-dashboard sau khi đăng ký thành công
            window.location.href = "/";
        } catch (err) {
            // Nếu có lỗi, hiển thị thông báo lỗi
            setError("Đăng ký không thành công. Vui lòng kiểm tra lại thông tin.");
            setSuccessMessage("");  // Xóa thông báo thành công
        }
    };

    return (
        <div className="login-container">
            <h2>Trang đăng ký</h2>
            <form className="formsubmit" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Tên người dùng</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className="sign-up-button" type="submit">Đăng ký</button>
            </form>

            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default Signup;
