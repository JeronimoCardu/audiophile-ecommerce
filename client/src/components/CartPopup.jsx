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
        {cart && cart.products.length > 0 && (
          <button
            className="underline opacity-50"
            onClick={() => clearCartFromAPI()}
          >
            Remove all
          </button>
        )}
      </div>

      {cart && cart.products.length > 0 ? (
        <>
          <ul>
            {cart.products.map((product) => (
              <li
                key={product._id}
                className="grid grid-cols-[64px_1fr_auto] items-center gap-4 py-4"
              >
                <img
                  className="h-16 w-16 rounded-lg object-cover"
                  src={product?.image}
                  alt={product.name}
                />

                <div className="flex min-w-0 flex-col justify-center">
                  <p className="text-sm font-bold wrap-break-word">
                    {product.name.split(" ")[0]}
                  </p>
                  <p className="text-sm text-gray-500">
                    $
                    {(product.price * product.quantity).toLocaleString("en-EN")}
                  </p>
                </div>

                <div className="flex items-center justify-end">
                  <QuantityField product={product} cart={cart} />
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
                  (total, product) => total + product.price * product.quantity,
                  0,
                )
                .toLocaleString("en-EN")}
            </p>
          </div>
          <Link to="/checkout" onClick={toggleCartPopup}>
            <button className="bg-orange w-full py-3 text-white">
              CHECKOUT
            </button>
          </Link>
        </>
      ) : (
        <p className="my-4 text-center text-sm text-gray-500">
          Your cart is empty.
        </p>
      )}
    </div>
  );
}
