export default function FormField({
  field,
  text,
  placeholder,
  register,
  error,
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <label htmlFor={field} className="subtitle tablet:text-lg! font-bold">
          {text}
        </label>
        {error && (
          <span className="tablet:text-sm text-xs font-bold text-red-500">
            formato incorrecto
          </span>
        )}
      </div>
      <label
        htmlFor={field}
        className={`hover:border-orange tablet:text-lg! has-[input:focus]:border-orange m-0 mt-2 mb-4 flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-colors duration-200 ${error ? "border-red-500" : "border-gray-300"}`}
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
