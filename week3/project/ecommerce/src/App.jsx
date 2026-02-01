import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { FavouritesProvider } from "./context/FavouritesContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FavouritesPage from "./pages/FavouritesPage";
import CartPage from "./pages/CartPage";

function AppContent() {
  const location = useLocation();
  const showHero = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {showHero && <HeroSection />}
      <Navigation />
      <main className={showHero ? "" : "py-8"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <FavouritesProvider>
        <Router>
          <AppContent />
        </Router>
      </FavouritesProvider>
    </CartProvider>
  );
}

export default App;
