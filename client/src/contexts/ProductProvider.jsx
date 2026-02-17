import { useState } from "react";

import { getAllProducts, getProductById } from "../api/productsAPI";

import { productContext } from "./productContext";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

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

  const values = {
    products,
    setProducts,
    getAllProductsFromAPI,
    getProductByIdFromAPI,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductProvider;
