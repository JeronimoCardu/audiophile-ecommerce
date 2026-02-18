import BtnPrimary from "../components/Buttons/BtnPrimary";
import ProductsSales from "../components/ProductsSales";
import Categories from "../components/Categories";
import Information from "../components/Information";

import { useContext } from "react";
import { productContext } from "../contexts/productContext";

export default function Home() {
  const { products } = useContext(productContext);
  const newProduct = products.find(
    (product) => product.name == "XX99 Mark II Headphones",
  );
  return (
    <>
      <section className="relative min-h-160">
        <img
          src="/assets/home/mobile/image-header.jpg"
          alt="hero-image"
          className="absolute inset-0 -top-28 -z-10 h-full w-full object-cover"
        />

        <div className="mx-5 space-y-6 pt-24 text-center text-white">
          <p className="overlineClass">NEW PRODUCT</p>
          <h3 className="text-[35px]!">{newProduct?.name}</h3>
          <p>{newProduct?.description}</p>
          <BtnPrimary productId={newProduct?._id} />
        </div>
      </section>

      <Categories />

      <ProductsSales />

      <Information />
    </>
  );
}
