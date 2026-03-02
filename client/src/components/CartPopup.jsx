import { useContext, useEffect, useRef } from "react";

import { productContext } from "../contexts/productContext";

import QuantityField from "./Inputs/QuantityField";

import { Link } from "react-router-dom";

export default function CartPopup({ triggerRef }) {
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
      if (triggerRef?.current && triggerRef.current.contains(event.target)) {
        return;
      }

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
  }, [cartPopupOpen, toggleCartPopup, triggerRef]);

  if (!cartPopupOpen) return null;
  return (
    <div
      ref={popupRef}
      className="defaultWidth tablet:w-1/2! desktop:w-1/3! tablet:left-auto tablet:right-10 tablet:mt-10 absolute top-full right-0 left-0 z-50 mx-auto mt-4 rounded-lg bg-white px-6 py-8 shadow-[0_0px_10px_rgba(0,0,0,0.15)] tablet:py-10 desktop:right-10 desktop:mt-12"
    >
      <div className="flex tablet:mb-4 justify-between">
        <h5>CART ({cart ? cart.products.length : 0})</h5>
        {cart && cart.products.length > 0 && (
          <button
            className="tablet:text-xl hover:text-orange-hover cursor-pointer underline opacity-50"
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
                className="grid grid-cols-[64px_1fr_auto] tablet:grid-cols-[90px_1fr_auto] items-center gap-4 py-4"
              >
                <img
                  className="h-16 w-16 tablet:h-22 tablet:w-22 rounded-lg object-cover"
                  src={product?.image}
                  alt={product.name}
                />

                <div className="flex min-w-0 text-sm tablet:text-xl flex-col justify-center">
                  <p className=" font-bold wrap-break-word">
                    {product.name.split(" ")[0]}
                  </p>
                  <p className=" text-gray-500">
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
          <div className="my-4 flex items-center tablet:text-xl justify-between text-lg">
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
            <button className="bg-orange w-full py-3 tablet:text-xl tablet:py-4 text-white hover:bg-orange-hover cursor-pointer">
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
