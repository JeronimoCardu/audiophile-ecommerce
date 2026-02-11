import BtnPrimary from "./Buttons/BtnPrimary";

export default function ProductCard({ product }) {
  return (
    <article className="defaultWidth mx-auto flex flex-col items-center gap-6 rounded-lg text-center text-black">
      <img
        className="rounded-lg"
        src={`${product.image.mobile.replace(".", "")}`}
        alt={product.name}
      />
      {product?.new && <p className="overlineClass text-orange">NEW PRODUCT</p>}
      <h3>{product?.name.toUpperCase()}</h3>
      <p className="opacity-50">{product?.description}</p>
      <BtnPrimary />
    </article>
  );
}
