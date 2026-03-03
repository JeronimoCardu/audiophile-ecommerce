import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

import { productContext } from "./contexts/productContext";

export default function App() {
  const { getAllProductsFromAPI, products, cartPopupOpen } =
    useContext(productContext);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    getAllProductsFromAPI();
  }, []);

  return (
    <>
      <Header menuOpen={openMenu} setOpenMenu={setOpenMenu} />
      <ScrollToTop />
      <main
        className={`${openMenu ? "opacity-50 " : ""} ${cartPopupOpen ? "opacity-70" : ""} w-full flex-1`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryPage products={products} />}
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2600}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        className="app-toast-container"
        toastClassName="app-toast"
        bodyClassName="app-toast-body"
      />
    </>
  );
}
