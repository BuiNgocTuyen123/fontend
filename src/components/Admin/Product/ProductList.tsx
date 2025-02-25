import React from "react";
import { useProducts } from "../../../hooks/Product";  // Import custom hook
import { Product } from "../../../hooks/Product";  // Import kiểu Product
import  useAuthRedirect  from "../../../hooks/useAuthRedirect"

const ProductList = () => {
    const { products, loading, error } = useProducts();
    useAuthRedirect('admin')

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {/* Duyệt qua mảng products và chỉ định rõ kiểu cho 'product' */}
                {products.map((product: Product) => (
                    <li key={product.id}>
                        {product.image && <img src={product.image} alt={product.name} width="100" />}
                        <strong>{product.name}</strong> - {product.price} VND
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
