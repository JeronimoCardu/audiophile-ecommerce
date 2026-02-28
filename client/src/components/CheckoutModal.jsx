import { Link } from "react-router-dom";

export default function CheckoutModal({
  isOpen,
  products = [],
  grandTotal = 0,
}) {
  if (!isOpen) return null;

  const firstProduct = products[0];
  const otherItemsCount = Math.max(products.length - 1, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <article className="w-full max-w-135 rounded-lg bg-white p-8 md:p-12">
        <img
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="Order confirmed"
          className="h-16 w-16"
        />

        <h4 className="mt-6 uppercase">THANK YOU FOR YOUR ORDER</h4>
        <p className="mt-4 text-[15px] opacity-50">
          You will receive an email confirmation shortly.
        </p>

        <div className="mt-6 overflow-hidden rounded-lg md:grid md:grid-cols-[1fr_198px]">
          <div className="bg-gray px-6 py-6">
            {firstProduct ? (
              <>
                <div className="flex items-center gap-4">
                  <img
                    src={firstProduct.image}
                    alt={firstProduct.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />

                  <div className="min-w-0">
                    <p className="truncate font-[manropeBold] uppercase">
                      {firstProduct.name}
                    </p>
                    <p className="font-[manropeBold] opacity-50">
                      ${firstProduct.price.toLocaleString("en-EN")}
                    </p>
                  </div>

                  <p className="ml-auto font-[manropeBold] opacity-50">
                    x{firstProduct.quantity}
                  </p>
                </div>

                {otherItemsCount > 0 && (
                  <>
                    <hr className="my-3 border-black/8" />
                    <p className="text-center font-[manropeBold] text-xs opacity-50">
                      and {otherItemsCount} other item(s)
                    </p>
                  </>
                )}
              </>
            ) : (
              <p className="text-sm opacity-50">No items in summary.</p>
            )}
          </div>

          <div className="bg-black px-6 py-4 md:py-10">
            <p className="text-textWhite/50">GRAND TOTAL</p>
            <p className="mt-2 font-[manropeBold] text-2xl text-white">
              ${grandTotal.toLocaleString("en-EN")}
            </p>
          </div>
        </div>

        <Link to="/" className="mt-6 block">
          <button className="bg-orange hover:bg-orange-hover w-full cursor-pointer py-4 font-[manropeBold] tracking-widest text-white transition-colors">
            BACK TO HOME
          </button>
        </Link>
      </article>
    </div>
  );
}
