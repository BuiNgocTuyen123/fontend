// src/hooks/useAuthRedirect.js

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = (requiredRole = 'admin') => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('admin_token');

        if (!token) {
            // Nếu không có token, điều hướng về trang đăng nhập
            navigate('/login');
        } else {
            // Kiểm tra nếu token hợp lệ và có quyền admin
            const role = JSON.parse(atob(token.split('.')[1]))?.role;
            if (role !== requiredRole) {
                // Nếu người dùng không phải admin (hoặc role khác), điều hướng về trang khác
                navigate('/');
            }
        }
    }, [navigate, requiredRole]);
};

export default useAuthRedirect;
