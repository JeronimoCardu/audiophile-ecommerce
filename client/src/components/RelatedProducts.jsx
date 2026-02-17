import { useContext } from "react";
import { productContext } from "../contexts/productContext.js";
import BtnPrimary from "./Buttons/BtnPrimary.jsx";

export default function RelatedProducts({ category }) {
  const { products } = useContext(productContext);
  const relatedProducts = products
    .filter((product) => product.category === category)
    .slice(0, 3);
  return (
    <section className="mb-28 space-y-10">
      <h4 className="text-center">YOU MAY ALSO LIKE</h4>
      <div className="defaultWidth mx-auto flex flex-col items-center gap-10">
        {relatedProducts.map((product) => (
          <article
            key={product._id}
            className="flex flex-col items-center gap-6 rounded-lg text-center text-black"
          >
            <img
              className="bg-gray h-40 w-full rounded-lg object-contain object-center"
              src={product.image.mobile}
              alt={product.name}
            />
            <h3>{product.name.toUpperCase()}</h3>
            <BtnPrimary productId={product._id} />
          </article>
        ))}
      </div>
    </section>
  );
}
