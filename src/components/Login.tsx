import React, { useState } from "react";
import axios from "axios";  // Sử dụng axios để gửi yêu cầu HTTP
import './User/CSS/login.css'
import { useNavigate } from 'react-router-dom';  // Import useNavigate để điều hướng
import API_URL from "../config"

const Login = () => {
    const [name, setName] = useState("");  // Sử dụng admin_name hoặc user_name thay vì email
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();  // Sử dụng hook để điều hướng

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/api/v1/admin/login`, {
                name: name,  
                password,
            });

            // Lưu token vào localStorage
            localStorage.setItem("admin_token", response.data.token);

            // Kiểm tra role của người dùng
            if (response.data.role === "admin") {
                // Điều hướng đến trang admin-dashboard nếu là admin
                window.location.href = "/admin-dashboard"; 
            } else if (response.data.role === "user") {
                // Điều hướng đến trang user-dashboard nếu là user
                window.location.href = "/";
            } else {
                setError("Bạn không có quyền truy cập.");
            }

        } catch (err) {
            setError("Đăng nhập không thành công, vui lòng kiểm tra lại thông tin.");
        }
    };

    const handleRegister = () => {
        // Điều hướng người dùng tới trang đăng ký
        navigate("/sign-up");  // Trang đăng ký sẽ có path là '/register'
    };

    return (
        <div>
            <h2>Trang đăng nhập</h2>
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
                <button type="submit">Đăng nhập</button>
            </form>
            <p>
                Chưa có tài khoản?{" "}
                <button onClick={handleRegister} className="no-account">
                    Đăng ký
                </button>
            </p>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
