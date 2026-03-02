export default function Information() {
  return (
    <section className="defaultWidth desktop:my-42 desktop:grid desktop:grid-cols-2 desktop:items-center desktop:gap-28 desktop:space-y-0 mx-auto my-35 space-y-12 text-center">
      <picture className="desktop:order-2">
        <source
          media="(min-width: 1440px)"
          srcSet="/assets/shared/desktop/image-best-gear.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/shared/tablet/image-best-gear.jpg"
        />
        <img
          className="rounded-lg"
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="best audio gear"
        />
      </picture>
      <div className="desktop:order-1 desktop:text-left mt-8">
        <h2 className="tablet:text-[60px]! tablet:leading-16! desktop:text-[50px]! desktop:leading-17.5!">
          BRINGING YOU THE <strong className="text-orange">BEST</strong> AUDIO
          GEAR
        </h2>
        <p className="tablet:text-[22px] desktop:leading-8 desktop:mx-0 tablet:w-4/5 mx-auto mt-8 opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
