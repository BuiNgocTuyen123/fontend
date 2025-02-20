import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Danh Sách Sản Phẩm</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Giá: {product.price} VND</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
