export default function EMoneyField({ children }) {
  return (
    <>
      <label
        htmlFor={children}
        className="hover:border-orange has-[input:checked]:border-orange active:border-orange flex cursor-pointer items-center gap-4 rounded-lg border border-gray-300 p-4 transition-colors duration-200"
      >
        <input
          type="radio"
          id={children}
          name="paymentMethod"
          className="accent-orange size-6 appearance-auto transition-colors duration-200"
        />{" "}
        {children}
      </label>
    </>
  );
}
