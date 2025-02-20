import React, { useState } from "react";
import "./AppHeader.css"; // Import CSS file
import { FaSearch } from "react-icons/fa/index";

const AppHeader = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        alert(`Tìm kiếm sản phẩm: ${searchTerm}`);
    };

    return (
        <header className="header bg-dark">
            {/* React Logo */}
            <div className="logo">
                <a href="#">
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
                           <button className="search-btn">
    <i className="fas fa-search"></i>
</button>

                            </li>
                            <li className="nav-item">
                                <a className="menu nav-link login-btn" href="#">Đăng nhập</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
