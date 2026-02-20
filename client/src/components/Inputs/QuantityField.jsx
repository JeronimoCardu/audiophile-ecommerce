import { useState } from "react";
import { useContext } from "react";

import { productContext } from "../../contexts/productContext";

export default function QuantityField({ product, cart = null }) {
  const productID = cart ? product.productId : product._id;
  const [quantity, setQuantity] = useState(product.quantity);
  const { removeProductOfTheCartFromAPI, updateCartToAPI } =
    useContext(productContext);

  function handleSetQuantity(action = null) {
    if (action === "decrease") {
      if (quantity <= 1 && cart) {
        removeProductOfTheCartFromAPI(productID);
        return;
      } else if (quantity > 1 && cart) {
        setQuantity(quantity - 1);
        updateCartToAPI(productID, quantity - 1);
      } else if (!cart && quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
    if (action === "increase" && cart) {
      setQuantity(quantity + 1);
      updateCartToAPI(productID, quantity + 1);
    } else if (action === "increase" && !cart) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <div className="bg-gray border-gray products-center grid w-full max-w-30 grid-cols-3 rounded-lg border">
      {/* minus */}
      <button
        type="button"
        className="hover:text-orange products-center flex h-full w-full justify-center py-2 font-semibold text-gray-400 transition-colors"
        onClick={() => handleSetQuantity("decrease")}
      >
        −
      </button>

      {/* input */}
      <input
        id={`quantity-${productID}`}
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full [appearance:textfield] bg-transparent text-center text-sm font-semibold outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />

      {/* plus */}
      <button
        type="button"
        className="hover:text-orange products-center flex h-full w-full justify-center py-2 font-semibold text-gray-400 transition-colors"
        onClick={() => handleSetQuantity("increase")}
      >
        +
      </button>
    </div>
  );
}
