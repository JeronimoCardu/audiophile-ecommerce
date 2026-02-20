import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { productContext } from "../contexts/productContext.js";

import QuantityField from "../components/Inputs/QuantityField.jsx";
import RelatedProducts from "../components/RelatedProducts.jsx";
import Categories from "../components/Categories.jsx";
import Information from "../components/Information.jsx";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
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
    <section className="defaultWidth mx-auto">
      <article className="my-6 space-y-6">
        <button onClick={() => navigate(-1)} className="opacity-50">
          Go Back
        </button>
        <img
          className="rounded-lg"
          src={productData?.image?.mobile}
          alt={productData?.name}
        />
        {productData?.new && (
          <p className="text-orange overlineClass">NEW PRODUCT</p>
        )}
        <h3>{productData?.name.toUpperCase()}</h3>
        <p className="opacity-50">{productData?.description}</p>
        <p className="subtitle text-lg!">${productData?.price}</p>
        <div className="grid w-fit grid-cols-[40%_60%] gap-6">
          <QuantityField product={{ ...productData, quantity: 1 }} />
          <button
            onClick={handleAddToCart}
            className="bg-orange w-fit px-8 text-white"
          >
            ADD TO CART
          </button>
        </div>
      </article>
      <section className="my-20">
        <h3 className="mb-6">FEATURES</h3>
        <p className="whitespace-pre-line opacity-50">
          {productData?.features}
        </p>
      </section>
      <section className="my-20">
        <h3 className="mb-6">IN THE BOX</h3>
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
      </section>
      <section className="my-20 space-y-6">
        <img
          className="rounded-lg"
          src={productData?.gallery?.first?.mobile}
          alt={productData?.name}
        />
        <img
          className="rounded-lg"
          src={productData?.gallery?.second?.mobile}
          alt={productData?.name}
        />
        <img
          className="rounded-lg"
          src={productData?.gallery?.third?.mobile}
          alt={productData?.name}
        />
      </section>
      <RelatedProducts category={productData?.category} />
      <Categories />
      <Information />
    </section>
  );
}
