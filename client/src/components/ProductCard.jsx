import BtnPrimary from "./Buttons/BtnPrimary";

export default function ProductCard({ product, index = 0 }) {
  const isReverseDesktop = index % 2 !== 0;

  return (
    <article
      className={`defaultWidth tablet:last:mb-45 desktop:grid desktop:grid-cols-2 desktop:gap-30 desktop:text-left mx-auto flex flex-col items-center gap-8 rounded-lg text-center text-black ${isReverseDesktop ? "desktop:[&>*:first-child]:order-2" : ""}`}
    >
      <picture className="bg-gray w-full rounded-lg">
        <source media="(min-width: 1440px)" srcSet={product.image.desktop} />
        <source media="(min-width: 768px)" srcSet={product.image.tablet} />
        <img
          className="tablet:h-100 tablet:w-3/5! desktop:w-full tablet:mx-auto tablet:object-cover w-full rounded-lg"
          src={product.image.mobile}
          alt={product.name}
        />
      </picture>
      <div className="tablet:mx-auto tablet:max-w-150 desktop:max-w-none space-y-6">
        {product?.new && (
          <p className="overlineClass text-orange">NEW PRODUCT</p>
        )}
        <h2 className="tablet:text-[40px]! desktop:text-[28px]!">
          {product?.name.toUpperCase()}
        </h2>
        <p className="tablet:text-[22px]! desktop:text-[18px]! opacity-50">
          {product?.description}
        </p>
        <BtnPrimary productId={product._id} />
      </div>
    </article>
  );
}
