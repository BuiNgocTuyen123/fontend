import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { useNavigate } from "react-router-dom";
import  useAuthRedirect  from "../../hooks/useAuthRedirect"

const AdminDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const ProductList = () =>{
        navigate ("/admin/product-list");
    }
    useAuthRedirect('admin');
    return (
        <Sidebar className="sidebar" collapsed={collapsed}>
            <Menu> {/* Không cần thuộc tính iconShape */}
                {/* Thay thế icon của fa-arrow-alt-circle-left bằng icon Bootstrap */}
                <MenuItem icon={<i className="bi bi-arrow-left-circle" />} onClick={() => setCollapsed(!collapsed)}>
                    Toggle
                </MenuItem>
                
                {/* Menu Sản phẩm */}
                <SubMenu title="Sản phẩm">
                    {/* Thay thế icon của FaList bằng icon Bootstrap */}
                    <MenuItem onClick={ProductList} icon={<i className="bi bi-list" />}>Danh sách sản phẩm</MenuItem>
                    <MenuItem>Thêm sản phẩm</MenuItem>
                </SubMenu>

                {/* Menu Khách hàng */}
                <SubMenu title="Khách hàng" icon={<i className="bi bi-person" />}>
                    <MenuItem>Danh sách khách hàng</MenuItem>
                    <MenuItem>Thêm khách hàng</MenuItem>
                </SubMenu>

                {/* Cài đặt */}
                <MenuItem icon={<i className="bi bi-gear" />}>Cài đặt</MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default AdminDashboard;
