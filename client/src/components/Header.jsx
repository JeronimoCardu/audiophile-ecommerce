export default function Header() {
  const isWindowHome = window.location.pathname === "/";

  return (
    <header
      className={`${isWindowHome ? " bg-[#1A1A1A] " : "bg-black"} top-0 z-50 flex w-full items-center justify-between border-b border-gray-600 p-6`}
    >
      <img src="/assets/shared/tablet/icon-hamburger.svg" alt="menu" />
      <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      <img src="/assets/shared/desktop/icon-cart.svg" alt="cart" />
    </header>
  );
}
