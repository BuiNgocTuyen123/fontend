import React from "react";
import ProductList from "./components/Product/ProductList";
import AddProduct from "./components/Product/AddProduct";
import AppHeader from "./components/Header"; // Import đúng tên
const App: React.FC = () => {
    return (
        <div className="App">
            <AppHeader />
            <ProductList />
        </div>
    );
};

export default App;
