import { useState, useCallback } from "react";
import CategoryList from "../components/CategoryList";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Faq from "../components/Faq";
import FollowUs from "../components/FollowUs";
import { useFetch } from "../hooks/useFetch";
import { fetchCategories, fetchProducts } from "../services/api";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch(fetchCategories, []);

  const fetchProductsCallback = useCallback(
    () => fetchProducts(selectedCategory === "all" ? null : selectedCategory),
    [selectedCategory]
  );

  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    refetch,
  } = useFetch(fetchProductsCallback, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const error = categoriesError || productsError;


  if (error) {
    return (
      <div className="container mx-auto px-4 pb-8">
        <Error message={error} onRetry={refetch} />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">New Clothes</h2>
        
        {categoriesLoading ? (
          <Loading />
        ) : (
          <CategoryList
            categories={categories || []}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        )}

        {productsLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Good Clothes for You
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 mb-8">
              We have nice clothes. Good quality. Good price.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={foto1} 
                alt="Featured product 1" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={foto2} 
                alt="Featured product 2" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={foto3} 
                alt="Featured product 3" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <FollowUs />
    </div>
  );
}

export default HomePage;
