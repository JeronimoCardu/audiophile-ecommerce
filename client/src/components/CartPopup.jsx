import { useContext, useEffect, useRef } from "react";

import { productContext } from "../contexts/productContext";

import QuantityField from "./Inputs/QuantityField";

import { Link } from "react-router-dom";

export default function CartPopup() {
  const {
    cart,
    getCartFromAPI,
    clearCartFromAPI,
    cartPopupOpen,
    toggleCartPopup,
  } = useContext(productContext);

  const popupRef = useRef(null);

  // Cargar carrito al montar el componente
  useEffect(() => {
    async function fetchCart() {
      try {
        await getCartFromAPI();
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }
    fetchCart();
  }, []);

  // Cerrar el popup al hacer clic fuera de él
  useEffect(() => {
    if (!cartPopupOpen) return;

    const handleOutsideInteraction = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        toggleCartPopup();
      }
    };
    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction);
    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
    };
  }, [cartPopupOpen, toggleCartPopup]);

  if (!cartPopupOpen) return null;
  return (
    <div
      ref={popupRef}
      className="defaultWidth absolute top-full right-0 left-0 z-50 mx-auto mt-4 rounded-lg bg-white px-6 py-8 shadow-lg"
    >
      <div className="flex justify-between">
        <h5>CART ({cart ? cart.products.length : 0})</h5>
        <button
          className="underline opacity-50"
          onClick={() => clearCartFromAPI()}
        >
          Remove all
        </button>
      </div>
      <ul>
        {cart.products.map((item) => (
          <li
            key={item.product._id}
            className="grid grid-cols-[64px_1fr_auto] items-center gap-4 py-4"
          >
            <img
              className="h-16 w-16 rounded-lg object-cover"
              src={item.product.image?.mobile}
              alt={item.product.name}
            />

            <div className="flex min-w-0 flex-col justify-center">
              <p className="text-sm font-bold wrap-break-word">
                {item.product.name.split(" ")[0]}
              </p>
              <p className="text-sm text-gray-500">
                ${(item.product.price * item.quantity).toLocaleString("en-EN")}
              </p>
            </div>

            <div className="flex items-center justify-end">
              <QuantityField item={item} />
            </div>
          </li>
        ))}
      </ul>
      <div className="my-4 flex items-center justify-between text-lg">
        <p className="opacity-50">TOTAL</p>
        <p className="font-bold">
          $
          {cart.products
            .reduce(
              (total, item) => total + item.product.price * item.quantity,
              0,
            )
            .toLocaleString("en-EN")}
        </p>
      </div>
      <Link to="/checkout" onClick={toggleCartPopup}>
        <button className="bg-orange w-full py-3 text-white">CHECKOUT</button>
      </Link>
    </div>
  );
}
