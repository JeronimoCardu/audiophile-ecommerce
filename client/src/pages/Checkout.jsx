import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { productContext } from "../contexts/productContext";
import { formContext } from "../contexts/formContext";

import PaymentField from "../components/Inputs/PaymentField";
import FormField from "../components/Inputs/FormField";
import CheckoutModal from "../components/CheckoutModal";

export default function Checkout() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const { handleOrder } = useContext(formContext);
  const { cart, clearCartFromAPI } = useContext(productContext);
  const paymentMethod = watch("paymentMethod");

  const [orderedProducts, setOrderedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [grandTotalOrder, setGrandTotalOrder] = useState(0);

  const totalBuy = cart?.products?.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  const shippingCost = 50;
  const vat = Math.round(totalBuy * 0.2);
  const grandTotal = totalBuy + shippingCost + vat;

  return (
    <>
      <CheckoutModal
        isOpen={isModalOpen}
        products={orderedProducts}
        grandTotal={grandTotalOrder}
      />
      <button
        onClick={() => navigate(-1)}
        className="defaultWidth tablet:py-8 tablet:text-xl mx-auto block py-6 text-left opacity-50"
      >
        Go Back
      </button>
      <form
        className="defaultWidth desktop:grid-cols-[1.7fr_1fr] desktop:items-start mx-auto mb-20 grid gap-8"
        onSubmit={handleSubmit(async (data) => {
          const parsedData = { ...data };

          if (paymentMethod !== "e-money") {
            delete parsedData.eMoneyNumber;
            delete parsedData.eMoneyPIN;
          }
          await handleOrder(cart._id, parsedData, grandTotal);
          setOrderedProducts(cart.products);
          setGrandTotalOrder(grandTotal);
          setIsModalOpen(true);

          await clearCartFromAPI();
        })}
      >
        <section className="tablet:p-8 desktop:p-12 flex flex-col rounded-lg p-6 shadow-[0px_0px_40px_rgba(0,0,0,0.15)]">
          <h1>CHECKOUT</h1>
          <h2 className="tablet:text-xl! text-orange subtitle pt-6 pb-4">
            BILLING DETAILS
          </h2>
          <div className="tablet:grid tablet:grid-cols-2 tablet:gap-4">
            <div>
              <FormField
                register={register("name", { required: true })}
                error={errors.name}
                field="name"
                text="Name"
                placeholder="Insert your name"
              />
            </div>
            <div>
              <FormField
                register={register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                error={errors.email}
                field="email"
                text="Email Address"
                placeholder="Insert your email address"
              />
            </div>
            <div>
              <FormField
                register={register("phone", {
                  required: true,
                  pattern: /^\d+$/,
                  minLength: 7,
                  maxLength: 15,
                })}
                error={errors.phone}
                field="phone"
                text="Phone Number"
                placeholder="Insert your phone number"
              />
            </div>
          </div>

          <h2 className="tablet:text-xl! text-orange subtitle pt-6 pb-4">
            SHIPPING INFO
          </h2>
          <div>
            <FormField
              register={register("address", { required: true })}
              error={errors.address}
              field="address"
              text="Your Address"
              placeholder="Insert your address"
            />
          </div>
          <div className="tablet:grid tablet:grid-cols-2 tablet:gap-4">
            <div>
              <FormField
                register={register("zip", { required: true })}
                error={errors.zip}
                field="zip"
                text="ZIP Code"
                placeholder="Insert your ZIP code"
              />
            </div>
            <div>
              <FormField
                register={register("city", { required: true })}
                error={errors.city}
                field="city"
                text="City"
                placeholder="Insert your city"
              />
            </div>
            <div>
              <FormField
                register={register("country", { required: true })}
                error={errors.country}
                field="country"
                text="Country"
                placeholder="Insert your country"
              />
            </div>
          </div>

          <h2 className="tablet:text-xl! text-orange subtitle pt-6 pb-4">
            PAYMENT DETAILS
          </h2>
          <div className="tablet:grid tablet:grid-cols-2 tablet:items-start tablet:gap-4 mb-8">
            <h3 className="subtitle tablet:text-xl! font-bold">
              Payment Method
            </h3>
            {errors.paymentMethod && (
              <p className="tablet:text-sm text-xs font-bold text-red-500">
                formato incorrecto
              </p>
            )}
            <div className="space-y-4">
              <PaymentField
                field="eMoneyMethod"
                value="e-money"
                register={register("paymentMethod", { required: true })}
              >
                e-Money
              </PaymentField>
              <PaymentField
                field="deliveryMethod"
                value="cash-on-delivery"
                register={register("paymentMethod", { required: true })}
              >
                Cash on Delivery
              </PaymentField>
            </div>
          </div>
          <div className="tablet:grid tablet:grid-cols-2 tablet:gap-4">
            <div>
              <FormField
                register={register("eMoneyNumber", {
                  validate: (value) => {
                    if (paymentMethod !== "e-money") return true;
                    return value?.trim().length > 0;
                  },
                })}
                error={errors.eMoneyNumber}
                field="eMoneyNumber"
                text="e-Money Number"
                placeholder="Insert your e-Money number"
              />
            </div>
            <div>
              <FormField
                register={register("eMoneyPIN", {
                  validate: (value) => {
                    if (paymentMethod !== "e-money") return true;
                    return value?.trim().length > 0;
                  },
                })}
                error={errors.eMoneyPIN}
                field="eMoneyPIN"
                text="e-Money PIN"
                placeholder="Insert your e-Money PIN"
              />
            </div>
          </div>
          {paymentMethod === "cash-on-delivery" && (
            <div
              id="cash-on-delivery-info "
              className="bg-gray mt-6 flex items-center gap-6 rounded-lg px-6 py-6"
            >
              <img
                src="/assets/checkout/icon-cash-on-delivery.svg"
                alt="Cash on Delivery"
              />
              <p className="tablet:text-lg! opacity-50">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </section>
        <section className="tablet:p-8 desktop:sticky desktop:top-8 flex flex-col rounded-lg p-6 shadow-[0px_0px_40px_rgba(0,0,0,0.15)]">
          <h2>SUMMARY</h2>
          <div className="mt-6 space-y-4">
            {cart?.products.map((product) => (
              <article
                key={product._id}
                className="flex items-center justify-between"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="tablet:h-20 tablet:w-20 h-16 w-16 rounded-lg object-cover"
                />
                <div className="tablet:text-lg mr-auto ml-4">
                  <p className="font-[manropeBold] uppercase">{product.name}</p>
                  <p className="opacity-50">${product.price}</p>
                </div>
                <p className="tablet:text-lg! font-[manropeBold] opacity-50">
                  x{product.quantity}
                </p>
              </article>
            ))}
          </div>
          <div className="tablet:text-xl! mt-8 flex items-center justify-between">
            <p className="opacity-50">TOTAL</p>
            <p className="font-[manropeBold]">
              ${(totalBuy ?? 0).toLocaleString("en-US")}
            </p>
          </div>
          <div className="tablet:text-xl! mt-2 flex items-center justify-between">
            <p className="opacity-50">SHIPPING</p>
            <p className="font-[manropeBold]">
              ${(shippingCost ?? 0).toLocaleString("en-US")}
            </p>
          </div>
          <div className="tablet:text-xl! mt-2 flex items-center justify-between">
            <p className="opacity-50">VAT (INCLUDED)</p>
            <p className="font-[manropeBold]">
              ${(vat ?? 0).toLocaleString("en-US")}
            </p>
          </div>
          <div className="tablet:text-xl! mt-6 flex items-center justify-between">
            <p className="opacity-50">GRAND TOTAL</p>
            <p className="text-orange font-[manropeBold]">
              ${(grandTotal ?? 0).toLocaleString("en-US")}
            </p>
          </div>
          {cart?.products.length > 0 ? (
            <button
              type="submit"
              className="bg-orange border-orange hover:border-orange-hover hover:bg-orange-hover mt-8 cursor-pointer border px-8 py-4 font-[manropeBold] tracking-widest text-white"
            >
              CONTINUE & PAY
            </button>
          ) : (
            <p className="mt-8 text-center text-red-500">Your cart is empty</p>
          )}
        </section>
      </form>
    </>
  );
}
