import { Link } from "react-router-dom";
import BtnTertiary from "./Buttons/BtnTertiary";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category}`}
      className="tablet:mb-0 mb-18 block last:mb-0"
    >
      <div className="relative group">
        <img
          src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
          alt={category}
          className="tablet:h-40 tablet:max-w-50 tablet:-top-16 desktop:h-38 desktop:max-w-48 absolute -top-12 left-1/2 z-10 mx-auto h-30 max-w-40 -translate-x-1/2 transform drop-shadow-lg drop-shadow-black"
        />
        <div className="bg-gray tablet:pt-15 desktop:pt-22 relative flex flex-col items-center rounded-lg pt-18">
          <p className="subtitle tablet:text-[20px]! tablet:pt-8 desktop:text-[18px]!">
            {category.toUpperCase()}
          </p>
          <BtnTertiary />
        </div>
      </div>
    </Link>
  );
}
