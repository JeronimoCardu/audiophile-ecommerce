export default function PaymentField({ children, value, register }) {
  return (
    <label
      htmlFor={value}
      className="hover:border-orange has-[input:checked]:border-orange active:border-orange flex cursor-pointer items-center gap-4 rounded-lg border border-gray-300 p-4 transition-colors duration-200"
    >
      <input
        type="radio"
        id={value}
        value={value}
        {...register}
        className="accent-orange size-6 appearance-auto transition-colors duration-200"
      />{" "}
      {children}
    </label>
  );
}
