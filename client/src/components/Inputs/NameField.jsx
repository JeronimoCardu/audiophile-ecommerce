export default function NameField({ children }) {
  // Agregar lógica para validar el campo de nombre si es necesario
  // !@##!$!$!$!$ border-red-500 wrong format top-right

  return (
    <>
      <label
        htmlFor="nameField"
        className="hover:border-orange has-[input:focus]:border-orange flex cursor-pointer items-center gap-4 rounded-lg border border-gray-300 p-4 transition-colors duration-200"
      >
        <input
          type="text"
          id="nameField"
          name="nameField"
          className="outline-0"
          placeholder="Insert your name"
        />{" "}
        {children}
      </label>
    </>
  );
}
