import BtnSecondary from "../components/Buttons/BtnSecondary";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../contexts/productContext";

export default function ProductsSales() {
  const { products } = useContext(productContext);
  const productsOffer = products.filter(
    (product) =>
      product.name == "ZX9 Speaker" ||
      product.name == "ZX7 Speaker" ||
      product.name == "YX1 Wireless Earphones",
  );
  return (
    <section id="productsOffer" className="defaultWidth mx-auto mb-12">
      <h2 className="sr-only">Featured Products</h2>
      <Link to={`product/${productsOffer[2]?._id}`}>
        <article className="bg-orange tablet:pt-14 tablet:pb-16 desktop:grid desktop:grid-cols-2 desktop:items-end desktop:px-20 desktop:pt-20 relative -z-10 overflow-hidden rounded-lg pt-12 pb-10 text-center">
          <img
            className="tablet:-top-55 tablet:scale-145 desktop:top-1/8 desktop:scale-120 desktop:left-1/4 absolute top-0 left-1/2 -translate-x-1/2 scale-170"
            src="assets/home/desktop/pattern-circles.svg"
            alt=""
          />
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="assets/home/desktop/image-speaker-zx9.png"
            />
            <source
              media="(min-width: 768px)"
              srcSet="assets/home/tablet/image-speaker-zx9.png"
            />
            <img
              className="tablet:w-2/7 tablet:mb-25 desktop:w-3/5 desktop:scale-150  desktop:top-25 relative z-10 mx-auto w-1/2"
              src="assets/home/mobile/image-speaker-zx9.png"
              alt="zx9 speaker"
            />
          </picture>
          <div className="tablet:max-w-90 desktop:-top-45 desktop:w-full desktop:max-w-95 desktop:text-left relative z-10 mx-auto mt-8 w-4/5 items-center gap-8 space-y-5 text-white">
            <h2 className="tablet:text-[70px]! tablet:leading-16! desktop:text-[70px]! desktop:leading-17.5!">
              ZX9 <br />
              SPEAKER
            </h2>
            <p className="tablet:text-[20px]! desktop:text-[18px]! desktop:leading-7! opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <BtnSecondary />
          </div>
        </article>
      </Link>
      <Link to={`product/${productsOffer[1]?._id}`}>
        <article className="tablet:px-16 relative my-8 overflow-hidden rounded-lg px-4 py-25">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="assets/home/desktop/image-speaker-zx7.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="assets/home/tablet/image-speaker-zx7.jpg"
            />
            <img
              src="assets/home/mobile/image-speaker-zx7.jpg"
              alt="zx7 speaker"
              className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
            />
          </picture>
          <h3 className="tablet:text-[36px]! mb-6">ZX7 SPEAKER</h3>
          <BtnSecondary />
        </article>
      </Link>
      <Link to={`product/${productsOffer[0]?._id}`}>
        <article className="tablet:grid tablet:grid-cols-2 tablet:gap-3 tablet:space-y-0 desktop:gap-7 space-y-8">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="assets/home/desktop/image-earphones-yx1.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="assets/home/tablet/image-earphones-yx1.jpg"
            />
            <img
              className="h-full rounded-lg object-cover"
              src="assets/home/mobile/image-earphones-yx1.jpg"
              alt="yx1 earphones"
            />
          </picture>
          <div className="bg-gray tablet:px-16 tablet:py-30 rounded-lg px-4 py-10">
            <h3 className="tablet:text-[40px]! mb-8">YX1 EARPHONES</h3>
            <BtnSecondary />
          </div>
        </article>
      </Link>
    </section>
  );
}
