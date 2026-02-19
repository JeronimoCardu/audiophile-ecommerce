import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";

import { productContext } from "./contexts/productContext";

export default function App() {
  const { getAllProductsFromAPI, products, cartPopupOpen } =
    useContext(productContext);
  useEffect(() => {
    getAllProductsFromAPI();
  }, []);

  return (
    <>
      <Header />
      <main
        className={`${cartPopupOpen ? "opacity-70" : ""} min-h-screen w-full`}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryPage products={products} />}
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/checkout" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
