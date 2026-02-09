import { Link } from "react-router-dom";
import BtnTertiary from "./buttons/BtnTertiary";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category}`} className="block mb-18 last:mb-0">
      <div className='relative'>
        <img
          src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
          alt={category}
          className="mx-auto z-10 absolute h-30 max-w-40 -top-12 left-1/2 transform -translate-x-1/2 drop-shadow-lg drop-shadow-black"
        />
        <div className="bg-gray relative rounded-lg flex flex-col items-center pt-18">
          <p className="subtitle">{category.toUpperCase()}</p>
          <BtnTertiary />
        </div>
      </div>
    </Link>
  );
}
