import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { productContext } from "../contexts/productContext.js";

import QuantityField from "../components/Inputs/QuantityField.jsx";
import RelatedProducts from "../components/RelatedProducts.jsx";
import Categories from "../components/Categories.jsx";
import Information from "../components/Information.jsx";
import BackButton from "../components/Buttons/BackButton.jsx";

export default function ProductDetail() {
  const { productId } = useParams();
  const { getProductByIdFromAPI, addToCartToAPI } = useContext(productContext);

  const [productData, setProductData] = useState(null);

  async function handleAddToCart() {
    await addToCartToAPI(
      productData._id,
      Number(document.getElementById(`quantity-${productData._id}`).value),
      productData.image.mobile,
      productData.name,
      productData.price,
    );
  }

  useEffect(() => {
    async function fetchProductById() {
      const product = await getProductByIdFromAPI(productId);
      setProductData(product);
    }
    fetchProductById();
  }, [productId]);

  return (
    <>
      <section className="defaultWidth mx-auto">
        <article className="tablet:my-10 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:gap-12 tablet:space-y-0 desktop:gap-24 my-6 space-y-6">
          <BackButton />
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={productData?.image?.desktop}
            />
            <source
              media="(min-width: 768px)"
              srcSet={productData?.image?.tablet}
            />
            <img
              className="w-full rounded-lg"
              src={productData?.image?.mobile}
              alt={productData?.name}
            />
          </picture>
          <div className="mt-6 space-y-6">
            {productData?.new && (
              <p className="text-orange overlineClass">NEW PRODUCT</p>
            )}
            <h1>{productData?.name.toUpperCase()}</h1>
            <p className="tablet:text-xl opacity-50">
              {productData?.description}
            </p>
            <p className="subtitle tablet:text-4xl! tablet:my-12 text-lg!">
              ${productData?.price.toLocaleString("en-EN")}
            </p>
            <div className="grid w-fit grid-cols-[40%_60%] gap-6">
              <QuantityField product={{ ...productData, quantity: 1 }} />
              <button
                onClick={handleAddToCart}
                className="bg-orange hover:bg-orange-hover tablet:px-12 tablet:py-6 tablet:text-lg w-fit cursor-pointer px-8 text-white"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </article>
        <section className="desktop:grid desktop:grid-cols-[2fr_1fr] desktop:gap-24 my-20">
          <div>
            <h2 className="tablet:text-5xl! mb-6">FEATURES</h2>
            <p className="tablet:text-xl whitespace-pre-line opacity-50">
              {productData?.features}
            </p>
          </div>
          <div className="tablet:mt-18 tablet:grid tablet:grid-cols-2 tablet:items-start tablet:gap-8 tablet:text-xl desktop:mt-0 desktop:block mt-20">
            <h2 className="tablet:mb-0 desktop:mb-6 tablet:text-5xl! mb-6">
              IN THE BOX
            </h2>
            <ul className="space-y-2">
              {productData?.includes.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-orange font-[manropeBold]">
                    {item.quantity}x
                  </span>
                  <span className="opacity-50">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:space-y-0 desktop:gap-7 my-20 space-y-6">
          <picture className="tablet:col-start-1 tablet:row-start-1">
            <source
              media="(min-width: 1440px)"
              srcSet={productData?.gallery?.first?.desktop}
            />
            <source
              media="(min-width: 768px)"
              srcSet={productData?.gallery?.first?.tablet}
            />
            <img
              className="h-full w-full rounded-lg object-cover"
              src={productData?.gallery?.first?.mobile}
              alt={productData?.name}
            />
          </picture>
          <picture className="tablet:col-start-1 tablet:row-start-2">
            <source
              media="(min-width: 1440px)"
              srcSet={productData?.gallery?.second?.desktop}
            />
            <source
              media="(min-width: 768px)"
              srcSet={productData?.gallery?.second?.tablet}
            />
            <img
              className="h-full w-full rounded-lg object-cover"
              src={productData?.gallery?.second?.mobile}
              alt={productData?.name}
            />
          </picture>
          <picture className="tablet:col-start-2 tablet:row-span-2 tablet:h-full">
            <source
              media="(min-width: 1440px)"
              srcSet={productData?.gallery?.third?.desktop}
            />
            <source
              media="(min-width: 768px)"
              srcSet={productData?.gallery?.third?.tablet}
            />
            <img
              className="h-full w-full rounded-lg object-cover"
              src={productData?.gallery?.third?.mobile}
              alt={productData?.name}
            />
          </picture>
        </section>
        <RelatedProducts category={productData?.category} />
      </section>
      <Categories />
      <Information />
    </>
  );
}
