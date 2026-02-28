import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import ProductProvider from "./contexts/ProductProvider.jsx";
import FormProvider from "./contexts/FormProvider";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <FormProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </FormProvider>
    </BrowserRouter>
);
