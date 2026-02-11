import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen w-full">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryPage products={products} />}
          />
          <Route path="/product/:productId" element={<Home />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/checkout" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
