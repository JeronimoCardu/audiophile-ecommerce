import BtnPrimary from "../components/Buttons/BtnPrimary";
import CategoryCard from "../components/CategoryCard";

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

      <section className="mx-auto mb-12 w-8/10">
        <CategoryCard category="headphones" />
        <CategoryCard category="speakers" />
        <CategoryCard category="earphones" />
      </section>
    </>
  );
}
