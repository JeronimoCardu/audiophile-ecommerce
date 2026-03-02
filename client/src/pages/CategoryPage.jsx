import ProductCard from "../components/ProductCard.jsx";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories.jsx";
import Information from "../components/Information.jsx";

export default function CategoryPage({ products }) {
  const { categoryName } = useParams();
  const productsInCategory = products.filter(
    (product) => product.category === categoryName,
  );
  return (
    <>
      <h1 className="tablet:py-25 desktop:py-24 bg-black py-8 text-center text-white">
        {categoryName.toUpperCase()}
      </h1>
      <section className="tablet:mt-30 tablet:space-y-34 desktop:mb-40 mt-16 mb-28 space-y-30">
        {productsInCategory.map((product, index) => (
          <ProductCard key={product._id} product={product} index={index} />
        ))}
      </section>
      <Categories />
      <Information />
    </>
  );
}
