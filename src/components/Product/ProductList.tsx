import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/products";
import AddProduct from "./AddProduct";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string | null;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const loadProducts = async () => {
        try {
            const data = await fetchProducts();
            setProducts(data.data);
        } catch (error) {
            console.error("Lỗi khi tải sản phẩm:", error);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <AddProduct onProductAdded={loadProducts} />
            <ul>
                {products.map((product) => (
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
