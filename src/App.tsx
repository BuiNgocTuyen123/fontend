import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/Admin/Product/ProductList";
import AddProduct from "./components/Admin/Product/AddProduct";
import AppHeader from "./components/Header"; 
import Login from "./components/Login";
import Signup from "./components/singup";
import AdminDashboard from "./components/Admin/AdminDashBoard";
const App: React.FC = () => {
    // Tạo một hàm để xử lý khi một sản phẩm được thêm vào
    const handleProductAdded = () => {
        console.log("A product has been added!");
    };

    return (
        <Router>
            <div className="App">
                <AppHeader />
                <Routes>
                    {/* Định nghĩa các đường dẫn */}
                    <Route path="admin/product-list" element={<ProductList />} />
                    {/* Truyền prop onProductAdded vào AddProduct */}
                    <Route path="admin/add-product" element={<AddProduct onProductAdded={handleProductAdded} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
