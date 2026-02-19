import { Link } from "react-router-dom";

import { useContext } from "react";
import { productContext } from "../contexts/productContext";

export default function Footer() {
  const { cartPopupOpen } = useContext(productContext);
  return (
    <footer className={`${cartPopupOpen ? "opacity-70" : ""} bg-bgBlackFooter relative space-y-12 p-8 pt-12 text-center`}>
      <div className="bg-orange absolute top-0 left-1/2 h-1 w-2/6 -translate-x-1/2"></div>
      <img
        src="/assets/shared/desktop/logo.svg"
        className="mx-auto"
        alt="audiophile logo"
      />
      <nav className="flex flex-col items-center gap-4 text-white">
        <Link to="/">HOME</Link>
        <Link to="/category/headphones">HEADPHONES</Link>
        <Link to="/category/speakers">SPEAKERS</Link>
        <Link to="/category/earphones">EARPHONES</Link>
      </nav>
      <p className="text-white opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="text-white opacity-50">
        Copyright {new Date().getFullYear()}. All Rights Reserved
      </p>
      <section className="flex items-center justify-center gap-4">
        <img
          src="/assets/shared/desktop/icon-facebook.svg"
          alt="facebook icon"
        />
        <img src="/assets/shared/desktop/icon-twitter.svg" alt="twitter icon" />
        <img
          src="/assets/shared/desktop/icon-instagram.svg"
          alt="instagram icon"
        />
      </section>
    </footer>
  );
}
