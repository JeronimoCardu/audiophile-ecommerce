import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { productContext } from "../contexts/productContext";

import CartPopup from "./CartPopup";

export default function Header({ menuOpen, setOpenMenu }) {
  const location = useLocation().pathname;
  const { toggleCartPopup, cartPopupOpen, cart } = useContext(productContext);

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const cartButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideInteraction = (event) => {
      if (
        menuButtonRef.current &&
        menuButtonRef.current.contains(event.target)
      ) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <div className="desktop:bg-[#1A1A1A] relative z-50 w-full">
      <header
        className={`${location === "/" ? " border-b border-gray-600 bg-[#1A1A1A] " : "bg-black"} ${cartPopupOpen ? "opacity-70" : ""} desktop:defaultWidth top-0 mx-auto`}
      >
        <div className="defaultWidth tablet:py-8 mx-auto flex items-center justify-between py-6">
          <button
            ref={menuButtonRef}
            className="tablet:w-8 desktop:hidden cursor-pointer"
            onClick={() => {
              setOpenMenu(!menuOpen);
            }}
          >
            <img
              ref={menuButtonRef}
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt="menu"
              className="tablet:w-8 desktop:hidden cursor-pointer"
            />
          </button>
          <Link to="/">
            <img src="/assets/shared/desktop/logo.svg" alt="logo" />
          </Link>
          <nav className="desktop:flex hidden items-center gap-8 text-sm tracking-widest text-white">
            <Link to="/" className="hover:text-orange">
              HOME
            </Link>
            <Link to="/category/headphones" className="hover:text-orange">
              HEADPHONES
            </Link>
            <Link to="/category/speakers" className="hover:text-orange">
              SPEAKERS
            </Link>
            <Link to="/category/earphones" className="hover:text-orange">
              EARPHONES
            </Link>
          </nav>
          <button
            ref={cartButtonRef}
            onClick={toggleCartPopup}
            className="tablet:w-10 tablet:h-10 w-8 h-8 relative flex cursor-pointer items-center justify-center"
          >
            <img
              src="/assets/shared/desktop/icon-cart.svg"
              className="tablet:scale-150"
              alt="cart"
            />
            <div
              className={`${cartPopupOpen ? "hidden" : "block"} ${cart?.products?.length > 0 ? "block" : "hidden"} bg-orange-500 absolute right-0 bottom-0 tablet:h-4 tablet:w-4 w-3 h-3 rounded-full`}
            ></div>
          </button>
        </div>
      </header>
      <CartPopup triggerRef={cartButtonRef} />

      {menuOpen && (
        <div ref={menuRef} className="desktop:hidden absolute w-full">
          <ul className="tablet:text-2xl items-center justify-center gap-12 bg-white text-center">
            <li className="hover:bg-gray tablet:py-8 py-4">
              <Link
                onClick={() => setOpenMenu(false)}
                to="/category/headphones"
              >
                HEADPHONES
              </Link>
            </li>
            <li className="hover:bg-gray tablet:py-8 py-4">
              <Link onClick={() => setOpenMenu(false)} to="/category/speakers">
                SPEAKERS
              </Link>
            </li>
            <li className="hover:bg-gray tablet:py-8 py-4">
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
