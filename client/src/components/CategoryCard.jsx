import { Link } from "react-router-dom";
import BtnTertiary from "./buttons/BtnTertiary";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category}`} className="mb-18 block last:mb-0">
      <div className="relative">
        <img
          src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
          alt={category}
          className="absolute -top-12 left-1/2 z-10 mx-auto h-30 max-w-40 -translate-x-1/2 transform drop-shadow-lg drop-shadow-black"
        />
        <div className="bg-gray relative flex flex-col items-center rounded-lg pt-18">
          <p className="subtitle">{category.toUpperCase()}</p>
          <BtnTertiary />
        </div>
      </div>
    </Link>
  );
}
