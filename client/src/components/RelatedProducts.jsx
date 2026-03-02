import { useContext } from "react";
import { productContext } from "../contexts/productContext.js";
import BtnPrimary from "./Buttons/BtnPrimary.jsx";
import { useParams } from "react-router-dom";

export default function RelatedProducts({ category }) {
  const { products } = useContext(productContext);
  const { productId } = useParams();
  const relatedProducts = products
    .filter((product) => {
      if (product.category === category && product._id !== productId) {
        return product;
      }
    })
    .slice(0, 3);
  if (relatedProducts.length === 0) {
    return null;
  }
  return (
    <section className="mb-28 space-y-10">
      <h2 className="text-center">YOU MAY ALSO LIKE</h2>
      <div
        className={`tablet:grid tablet:grid-cols-${relatedProducts.length} tablet:items-start tablet:gap-3 desktop:gap-7 gap-10 mx-auto flex w-full flex-col items-center`}
      >
        {relatedProducts.map((product) => (
          <article
            key={product._id}
            className="flex w-full flex-col items-center gap-6 rounded-lg text-center text-black"
          >
            <picture className="w-full">
              <source
                media="(min-width: 1440px)"
                srcSet={product.image.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={product.image.tablet}
              />
              <img
                className="bg-gray tablet:h-50 desktop:h-80 h-35 w-full rounded-lg object-contain object-center"
                src={product.image.mobile}
                alt={product.name}
              />
            </picture>
            <h3>
              {product.name
                .toUpperCase()
                .split(" ")
                .map((word) => (word !== category.toUpperCase() ? word : ""))
                .join(" ")}
            </h3>
            <BtnPrimary productId={product._id} />
          </article>
        ))}
      </div>
    </section>
  );
}
