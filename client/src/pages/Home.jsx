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
      <section className="tablet:min-h-175 desktop:min-h-200 tablet:bg-[#1A1A1A] relative min-h-170">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/assets/home/desktop/image-hero.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/home/tablet/image-header.jpg"
          />
          <img
            src="/assets/home/mobile/image-header.jpg"
            alt="hero-image"
            className="desktop:z-0 absolute inset-0 -top-28 z-10 h-full w-full object-contain object-center"
          />
        </picture>

        <div className="defaultWidth tablet:max-w-95 desktop:mx-auto desktop:max-w-none desktop:pt-36 desktop:text-left relative z-10 mx-auto space-y-6 pt-24 text-center text-white">
          <p className="overlineClass desktop:mx-auto tablet:text-[22px]! desktop:text-[18px]">
            NEW PRODUCT
          </p>
          <h1 className="desktop:text-7xl! tablet:w-2/4 desktop:w-2/4 tablet:mx-auto desktop:mx-0">
            {newProduct?.name?.toUpperCase()}
          </h1>
          <p className="tablet:max-w-130 tablet:leading-10 tablet:text-[25px] desktop:mx-0 desktop:text-lg mx-auto max-w-90">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <BtnPrimary productId={newProduct?._id} />
        </div>
      </section>

      <Categories />

      <ProductsSales />

      <Information />
    </>
  );
}
