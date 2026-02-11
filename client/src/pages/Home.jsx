import BtnPrimary from "../components/Buttons/BtnPrimary";
import ProductsSales from "../components/ProductsSales";
import Categories from "../components/Categories";
import Information from "../components/Information";

export default function Home() {
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
          <h3 className="text-[35px]!">XX99 MARK II HEADPHONES</h3>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <BtnPrimary />
        </div>
      </section>

      <Categories />

      <ProductsSales />

      <Information />
    </>
  );
}
