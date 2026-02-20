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
      <Link to={`product/${productsOffer[2]?._id}`}>
        <article className="bg-orange relative -z-10 rounded-lg pt-12 pb-10 text-center">
          <img
            className="absolute top-0 scale-170"
            src="assets/home/desktop/pattern-circles.svg"
            alt=""
          />
          <img
            className="mx-auto w-1/2"
            src="assets/home/mobile/image-speaker-zx9.png"
            alt="zx9 speaker"
          />
          <div className="mx-auto mt-8 w-4/5 items-center gap-8 space-y-5 text-white">
            <h2>
              ZX9 <br />
              SPEAKER
            </h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <BtnSecondary />
          </div>
        </article>
      </Link>
      <Link to={`product/${productsOffer[1]?._id}`}>
        <article className="relative my-8 overflow-hidden rounded-lg px-4 py-25">
          <img
            src="assets/home/mobile/image-speaker-zx7.jpg"
            alt="zx7 speaker"
            className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
          />
          <h3 className="mb-6">ZX7 SPEAKER</h3>
          <BtnSecondary />
        </article>
      </Link>
      <Link to={`product/${productsOffer[0]?._id}`}>
        <article className="space-y-8">
          <img
            className="rounded-lg"
            src="assets/home/mobile/image-earphones-yx1.jpg"
            alt="yx1 earphones"
          />
          <div className="bg-gray rounded-lg px-4 py-10">
            <h3 className="mb-8">YX1 EARPHONES</h3>
            <BtnSecondary />
          </div>
        </article>
      </Link>
    </section>
  );
}
