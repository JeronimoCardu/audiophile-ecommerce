import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../contexts/productContext";

import CartPopup from "./CartPopup";

export default function Header() {
  const location = useLocation().pathname;
  const { toggleCartPopup, cartPopupOpen } = useContext(productContext);
  return (
    <div className="relative z-50 w-full">
      <header
        className={`${location === "/" ? " border-b border-gray-600 bg-[#1A1A1A] " : "bg-black"} ${cartPopupOpen ? "opacity-70" : ""} top-0 flex w-full items-center justify-between p-6`}
      >
        <img src="/assets/shared/tablet/icon-hamburger.svg" alt="menu" />
        <Link to="/">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
        <button onClick={toggleCartPopup}>
          <img src="/assets/shared/desktop/icon-cart.svg" alt="cart" />
        </button>
      </header>
      <CartPopup />
    </div>
  );
}
