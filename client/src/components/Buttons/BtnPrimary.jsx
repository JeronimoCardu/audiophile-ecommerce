import { Link } from "react-router-dom";

export default function BtnPrimary({ productId }) {
  return (
    <Link to={`/${productId}`}>
      <button className="bg-orange border-orange hover:border-orange-hover hover:bg-orange-hover cursor-pointer border px-8 py-4 font-[manropeBold] tracking-widest text-white">
        SEE PRODUCT
      </button>
    </Link>
  );
}
