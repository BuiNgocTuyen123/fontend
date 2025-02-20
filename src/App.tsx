import React from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

const App: React.FC = () => {
    return (
        <div className="App">
            <ProductList />
            <AddProduct />
        </div>
    );
};

export default App;
