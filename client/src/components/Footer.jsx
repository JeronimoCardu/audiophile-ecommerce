import { Link } from "react-router-dom";

import { useContext } from "react";
import { productContext } from "../contexts/productContext";

export default function Footer() {
  const { cartPopupOpen } = useContext(productContext);
  return (
    <footer
      className={`${cartPopupOpen ? "opacity-70" : ""} bg-bgBlackFooter tablet:text-left relative text-center text-white`}
    >
      <div className="defaultWidth tablet:py-15 desktop:py-18 relative mx-auto py-14">
        <div className="bg-orange tablet:left-0 tablet:w-25 tablet:translate-x-0 absolute top-0 left-1/2 h-1 w-2/6 -translate-x-1/2"></div>

        <div className="tablet:space-y-8 desktop:grid desktop:grid-cols-2 desktop:gap-x-10 desktop:gap-y-9 desktop:space-y-0 space-y-12">
          <img
            src="/assets/shared/desktop/logo.svg"
            className="tablet:w-40 tablet:h-auto tablet:mx-0 mx-auto"
            alt="audiophile logo"
          />

          <nav className="tablet:text-lg tablet:flex-row desktop:justify-end flex flex-col items-center gap-4 text-sm tracking-widest">
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

          <p className="desktop:max-w-130 tablet:text-lg opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="desktop:col-span-2 tablet:text-lg opacity-50">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
          <section className="tablet:justify-start desktop:justify-start desktop:self-end flex items-center  justify-center gap-4">
            <img
              className="tablet:w-8 tablet:h-8 cursor-pointer"
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook icon"
            />
            <img
              className="tablet:w-8 tablet:h-8 cursor-pointer"
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="twitter icon"
            />
            <img
              className="tablet:w-8 tablet:h-8 cursor-pointer"
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="instagram icon"
            />
          </section>
        </div>
      </div>
    </footer>
  );
}
