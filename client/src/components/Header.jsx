import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { productContext } from "../contexts/productContext";

import CartPopup from "./CartPopup";

export default function Header({ menuOpen, setOpenMenu }) {
  const location = useLocation().pathname;
  const { toggleCartPopup, cartPopupOpen } = useContext(productContext);

  const cartRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideInteraction = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction);
    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
    };
  }, [menuOpen]);

  return (
    <div className="relative z-50 w-full">
      <header
        className={`${location === "/" ? " border-b border-gray-600 bg-[#1A1A1A] " : "bg-black"} ${cartPopupOpen ? "opacity-70" : ""} top-0 flex w-full items-center justify-between p-6`}
      >
        <img
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="menu"
          onClick={() => {
            setOpenMenu(!menuOpen);
          }}
        />
        <Link to="/">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
        <button onClick={toggleCartPopup}>
          <img src="/assets/shared/desktop/icon-cart.svg" alt="cart" />
        </button>
      </header>
      <CartPopup />

      {menuOpen && (
        <div ref={cartRef} className="absolute w-full">
          <ul className="items-center justify-center gap-12 bg-white text-center">
            <li className="hover:bg-gray py-4">
              <Link
                onClick={() => setOpenMenu(false)}
                to="/category/headphones"
              >
                HEADPHONES
              </Link>
            </li>
            <li className="hover:bg-gray py-4">
              <Link onClick={() => setOpenMenu(false)} to="/category/speakers">
                SPEAKERS
              </Link>
            </li>
            <li className="hover:bg-gray py-4">
              <Link onClick={() => setOpenMenu(false)} to="/category/earphones">
                EARPHONES
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
