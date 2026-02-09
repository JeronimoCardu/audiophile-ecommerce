import { useState } from "react";

export default function QuantityField({ children }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="border-gray bg-gray flex w-fit items-center gap-2 border p-3.5 text-lg">
        <button
          type="button"
          className="hover:text-orange h-full w-10 cursor-pointer text-gray-300"
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>
        <input
          id="quantity-input"
          name="quantity-input"
          className="w-12 [appearance:textfield] text-center text-black outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button
          type="button"
          className="hover:text-orange h-full w-10 cursor-pointer text-gray-300"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}
