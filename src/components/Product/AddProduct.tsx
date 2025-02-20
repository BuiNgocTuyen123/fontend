import { useState } from "react";
import { addProduct } from "../../api/products";

const AddProduct = ({ onProductAdded }: { onProductAdded: () => void }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState<File | null>(null); // 🔹 Chọn file ảnh

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price.toString());
            formData.append("stock", stock.toString());
            if (image) {
                formData.append("image", image); // 🔹 Thêm file ảnh vào FormData
            }

            const response = await addProduct(formData);
            alert(response.message);
            onProductAdded(); // 🔹 Refresh danh sách sản phẩm
        } catch (error: any) {
            console.error("Lỗi khi thêm sản phẩm:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <h2>Thêm sản phẩm mới</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" placeholder="Tên sản phẩm" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Mô tả" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="number" placeholder="Giá" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
                <input type="number" placeholder="Số lượng tồn kho" value={stock} onChange={(e) => setStock(Number(e.target.value))} required />
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} /> {/* 🔹 Chọn ảnh */}
                <button type="submit">Thêm Sản Phẩm</button>
            </form>
        </div>
    );
};

export default AddProduct;
