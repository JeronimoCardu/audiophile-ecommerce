import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <main className=''>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/category/:categoryName" element={<Home />} />
          <Route path="/product/:productId" element={<Home />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/checkout" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
