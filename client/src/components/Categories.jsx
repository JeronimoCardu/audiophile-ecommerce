import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="defaultWidth tablet:my-24 tablet:grid-cols-3 tablet:gap-3 desktop:my-30  desktop:gap-7 mx-auto my-20 grid">
      <h2 className="sr-only">Product Categories</h2>
      <CategoryCard category="headphones" />
      <CategoryCard category="speakers" />
      <CategoryCard category="earphones" />
    </section>
  );
}
