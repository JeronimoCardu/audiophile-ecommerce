import EMoneyField from "./components/Inputs/EMoneyField";
import NameField from "./components/Inputs/NameField";
import QuantityField from "./components/Inputs/QuantityField";
export default function App() {
  return (
    <>
      <h1 className="text-red-500">Hola</h1>
      <form action="">
        <NameField />
        <EMoneyField>E-money</EMoneyField>
        <EMoneyField>Cash on Delivery</EMoneyField>
        <QuantityField />
      </form>
    </>
  );
}
