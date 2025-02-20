import { useState } from "react";
import { addProduct } from "../api/products";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newProduct = { name, description, price, stock, image };
            const response = await addProduct(newProduct);
            alert(response.message);
        } catch (error: any) {
            console.error("Lỗi khi thêm sản phẩm:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <h2>Thêm sản phẩm mới</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Tên sản phẩm" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Mô tả" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="number" placeholder="Giá" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
                <input type="number" placeholder="Số lượng tồn kho" value={stock} onChange={(e) => setStock(Number(e.target.value))} required />
                <input type="text" placeholder="Ảnh (URL)" value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit">Thêm Sản Phẩm</button>
            </form>
        </div>
    );
};

export default AddProduct;
