import React from "react";
import { useAddProduct } from "../../../hooks/Product";  // Import custom hook

const AddProduct = ({ onProductAdded }: { onProductAdded: () => void }) => {
    // Sử dụng hook useAddProduct
    const {
        name,
        description,
        price,
        stock,
        image,
        setName,
        setDescription,
        setPrice,
        setStock,
        setImage,
        handleSubmit,
    } = useAddProduct(onProductAdded);  // Gọi hook với callback

    return (
        <div>
            <h2>Thêm sản phẩm mới</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Mô tả"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Giá"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                />
                <input
                    type="number"
                    placeholder="Số lượng tồn kho"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
                <button type="submit">Thêm Sản Phẩm</button>
            </form>
        </div>
    );
};

export default AddProduct;
