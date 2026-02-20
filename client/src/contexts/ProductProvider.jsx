import { useState } from "react";

import { getAllProducts, getProductById } from "../api/productsAPI";
import {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
  clearCart,
} from "../api/cartAPI";

import { productContext } from "./productContext";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);

  const getAllProductsFromAPI = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProductByIdFromAPI = async (productId) => {
    try {
      const product = await getProductById(productId);
      return product;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      throw error;
    }
  };

  const [cartPopupOpen, setCartPopupOpen] = useState(false);
  const toggleCartPopup = () => {
    setCartPopupOpen((prev) => !prev);
  };

  const getCartFromAPI = async () => {
    try {
      const cart = await getCart();
      setCart(cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  };

  const addToCartToAPI = async (productId, quantity, image, name, price) => {
    try {
      const updatedCart = await addToCart(
        productId,
        quantity,
        image,
        name,
        price,
      );
      setCart(updatedCart);
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  };

  const updateCartToAPI = async (productId, quantity) => {
    try {
      const updatedCart = await updateCart(productId, quantity);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error updating cart:", error);
      throw error;
    }
  };

  const removeProductOfTheCartFromAPI = async (productId) => {
    try {
      const updatedCart = await removeFromCart(productId);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing from cart:", error);
      throw error;
    }
  };

  const clearCartFromAPI = async () => {
    try {
      const updatedCart = await clearCart();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error clearing cart:", error);
      throw error;
    }
  };

  const values = {
    products,
    setProducts,
    getAllProductsFromAPI,
    getProductByIdFromAPI,
    getCartFromAPI,
    addToCartToAPI,
    updateCartToAPI,
    removeProductOfTheCartFromAPI,
    clearCartFromAPI,
    cart,
    cartPopupOpen,
    toggleCartPopup,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductProvider;
