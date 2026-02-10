import BtnPrimary from "../components/Buttons/BtnPrimary";
import CategoryCard from "../components/CategoryCard";
import ProductsSales from "../components/ProductsSales";

export default function Home() {
  return (
    <>
      <section className="relative min-h-160 overflow-hidden">
        <img
          src="assets/home/mobile/image-header.jpg"
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

      <section className="defaultWidth mx-auto mb-12">
        <CategoryCard category="headphones" />
        <CategoryCard category="speakers" />
        <CategoryCard category="earphones" />
      </section>
      <ProductsSales />
      <section className="defaultWidth mx-auto my-35 space-y-12 text-center">
        <img
          className="rounded-lg"
          src="assets/shared/mobile/image-best-gear.jpg"
          alt="best audio gear"
        />
        <h3>
          BRINGING YOU THE <strong className="text-orange">BEST</strong> AUDIO
          GEAR
        </h3>
        <p className="opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </section>
    </>
  );
}
