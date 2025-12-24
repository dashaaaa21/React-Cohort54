import { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { fetchCategories, fetchProducts } from "../services/api";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [selectedCategory]);

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProducts(
        selectedCategory === "all" ? null : selectedCategory
      );
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRetry = () => {
    loadProducts();
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 pb-8">
        <Error message={error} onRetry={handleRetry} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-8">
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {loading ? <Loading /> : <ProductList products={products} />}
    </div>
  );
}

export default HomePage;
