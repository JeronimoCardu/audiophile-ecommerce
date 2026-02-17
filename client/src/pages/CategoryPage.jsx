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
      <h3 className="bg-black py-8 text-center text-white">
        {categoryName.toUpperCase()}
      </h3>
      <section className="mt-10 mb-28 space-y-28">
        {productsInCategory.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
      <Categories />
      <Information />
    </>
  );
}
