import { useState } from "react";
import products from "./fake-data/all-products";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter((product) =>
                product.category.toLowerCase().includes(
                    selectedCategory.toLowerCase()
                )
            );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 pb-8">
                <CategoryList 
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <ProductList products={filteredProducts} />
            </main>
        </div>
    );
}

export default App;
