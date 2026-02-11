import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation().pathname;
  return (
    <header
      className={`${location === "/" ? " border-b border-gray-600 bg-[#1A1A1A] " : "bg-black"} top-0 z-50 flex w-full items-center justify-between p-6`}
    >
      <img src="/assets/shared/tablet/icon-hamburger.svg" alt="menu" />
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </Link>
      <img src="/assets/shared/desktop/icon-cart.svg" alt="cart" />
    </header>
  );
}
