import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate từ react-router-dom
import "./AppHeader.css"; // Import CSS file

const AppHeader = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // Trạng thái đăng nhập
    const navigate = useNavigate();  // Sử dụng useNavigate

    useEffect(() => {
        // Kiểm tra nếu có token trong localStorage (giả sử token được lưu ở đây)
        const token = localStorage.getItem("admin_token");
        if (token) {
            setIsLoggedIn(true);  // Người dùng đã đăng nhập
        } else {
            setIsLoggedIn(false);  // Người dùng chưa đăng nhập
        }
    }, []); // useEffect chỉ chạy một lần khi component mount

    const handleSearch = () => {
        alert(`Tìm kiếm sản phẩm: ${searchTerm}`);
    };

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            // Nếu người dùng đã đăng nhập, thực hiện đăng xuất
            localStorage.removeItem("admin_token");  // Xóa token khỏi localStorage
            setIsLoggedIn(false);  // Cập nhật trạng thái đăng nhập
            navigate("/login");  // Điều hướng về trang đăng nhập
        } else {
            // Nếu người dùng chưa đăng nhập, điều hướng đến trang login
            navigate("/login"); 
        }
    };

    return (
        <header className="header bg-dark">
            {/* React Logo */}
            <div className="logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                         alt="React Logo" 
                         className="react-icon" />
                </a>
            </div>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="menu nav-link" href="#">Bộ sưu tập</a>
                            </li>
                            <li className="nav-item">
                                <a className="menu nav-link" href="#">Khuyến mãi - Giảm giá</a>
                            </li>
                            <li className="nav-item search-container">
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="search-btn" onClick={handleSearch}>
                                    <i className="fas fa-search"></i>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="menu nav-link login-btn" 
                                    onClick={handleLoginLogout}
                                >
                                    {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}  {/* Nếu đã đăng nhập, hiển thị "Đăng xuất", nếu chưa thì "Đăng nhập" */}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
