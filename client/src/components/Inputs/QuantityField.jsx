import { useState } from "react";
import { useContext } from "react";

import { productContext } from "../../contexts/productContext";

export default function QuantityField({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const { removeProductOfTheCartFromAPI, updateCartToAPI } = useContext(productContext);
   return (
    <div className="bg-gray border-gray grid w-full max-w-30 grid-cols-3 items-center border rounded-lg"
>

      {/* minus */}
      <button
        type="button"
        className="hover:text-orange flex h-full w-full items-center justify-center py-2 text-gray-400 font-semibold transition-colors"
        onClick={() => {
          if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateCartToAPI(item.product, newQuantity);
          } else {
            removeProductOfTheCartFromAPI(item.product);
          }
        }}
      >
        −
      </button>

      {/* input */}
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => {
          const newQuantity = Number(e.target.value);
          setQuantity(newQuantity);
          updateCartToAPI(item.product, newQuantity);
        }}
        className="w-full bg-transparent text-center text-sm font-semibold outline-none [appearance:textfield]
        [&::-webkit-inner-spin-button]:appearance-none 
        [&::-webkit-outer-spin-button]:appearance-none"
      />

      {/* plus */}
      <button
        type="button"
        className="hover:text-orange flex h-full w-full items-center justify-center py-2 text-gray-400 font-semibold transition-colors"
        onClick={() => {
          const newQuantity = quantity + 1;
          setQuantity(newQuantity);
          updateCartToAPI(item.product, newQuantity);
        }}
      >
        +
      </button>

    </div>
  );

}
