import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../contexts/productContext";
import PaymentField from "../components/Inputs/PaymentField";
import FormField from "../components/Inputs/FormField";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart } = useContext(productContext);
  const totalBuy = cart?.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  const shippingCost = 50;
  const vat = totalBuy * 0.2;
  const grandTotal = totalBuy + shippingCost + vat;
  return (
    <>
      <button onClick={() => navigate(-1)} className="px-6 py-3 opacity-50">
        Go Back
      </button>
      <section className="mx-auto flex w-18/20 flex-col rounded-lg p-8 shadow-[0px_0px_40px_rgba(0,0,0,0.15)]">
        <h3>CHECKOUT</h3>
        <form>
          <p className="text-orange subtitle pt-6 pb-4">BILLING DETAILS</p>
          <FormField text="Name" placeholder="Insert your name" />

          <FormField
            text="Email Address"
            placeholder="Insert your email address"
          />
          <FormField
            text="Phone Number"
            placeholder="Insert your phone number"
          />
          <p className="text-orange subtitle pt-6 pb-4">SHIPPING INFO</p>
          <FormField text="Your Address" placeholder="Insert your address" />
          <FormField text="ZIP Code" placeholder="Insert your ZIP code" />
          <FormField text="City" placeholder="Insert your city" />
          <FormField text="Country" placeholder="Insert your country" />
          <p className="text-orange subtitle pt-6 pb-4">PAYMENT DETAILS</p>
          <div className="mb-8 space-y-4">
            <PaymentField>e-Money</PaymentField>
            <PaymentField>Cash on Delivery</PaymentField>
          </div>
          <FormField
            text="e-Money Number"
            placeholder="Insert your e-Money number"
          />
          <FormField text="e-Money PIN" placeholder="Insert your e-Money PIN" />
        </form>
      </section>
      <section className="mx-auto mt-8 flex w-18/20 flex-col rounded-lg p-8 shadow-[0px_0px_40px_rgba(0,0,0,0.15)] mb-20">
        <h3>SUMMARY</h3>
        <div className="mt-6 space-y-4">
          {cart?.products.map((product) => (
            <article
              key={product.id}
              className="flex items-center justify-between"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="mr-auto ml-4">
                <p className="font-[manropeBold] uppercase">{product.name}</p>
                <p className="opacity-50">${product.price}</p>
              </div>
              <p className="font-[manropeBold] opacity-50">
                x{product.quantity}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="opacity-50">TOTAL</p>
          <p className="font-[manropeBold]">${totalBuy}</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="opacity-50">SHIPPING</p>
          <p className="font-[manropeBold]">${shippingCost}</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="opacity-50">VAT (INCLUDED)</p>
          <p className="font-[manropeBold]">${vat}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="opacity-50">GRAND TOTAL</p>
          <p className="text-orange font-[manropeBold]">${grandTotal}</p>
        </div>
        {cart?.products.length > 0 ? (
          <button className="bg-orange border-orange hover:border-orange-hover hover:bg-orange-hover mt-8 cursor-pointer border px-8 py-4 font-[manropeBold] tracking-widest text-white">
            CONTINUE & PAY
          </button>
        ) : (
          <p className="mt-8 text-center text-red-500">Your cart is empty</p>
        )}
      </section>
    </>
  );
}
