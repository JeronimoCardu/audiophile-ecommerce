import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="defaultWidth mx-auto my-12">
      <CategoryCard category="headphones" />
      <CategoryCard category="speakers" />
      <CategoryCard category="earphones" />
    </section>
  );
}
