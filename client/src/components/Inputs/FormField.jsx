export default function FormField({ field, text, placeholder, register }) {
  return (
    <>
      <label htmlFor={field} className="subtitle font-bold">
        {text}
      </label>
      <label
        htmlFor={field}
        className="hover:border-orange has-[input:focus]:border-orange m-0 mt-2 mb-4 flex cursor-pointer items-center gap-4 rounded-lg border border-gray-300 p-4 transition-colors duration-200"
      >
        <input
          type="text"
          id={field}
          {...register}
          className="outline-0"
          placeholder={placeholder}
        />{" "}
      </label>
    </>
  );
}
