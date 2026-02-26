import { formContext } from "./formContext";
import { useState } from "react";
import { createOrderToAPI } from "../api/orderAPI";

const initalFormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
  paymentMethod: "",
  eMoneyNumber: "",
  eMoneyPIN: "",
};

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initalFormData);

  const handleOrder = async (cartId, data, total) => {
    await createOrderToAPI({
      cartId,
      personalInfo: {
        name: data.name,
        email: data.email,
        number: data.phone,
      },
      shippingInfo: {
        address: data.address,
        zipCode: data.zip,
        city: data.city,
        country: data.country,
      },
      paymentInfo: {
        method: data.paymentMethod,
        eMoneyNumber: data.eMoneyNumber || "",
        eMoneyPIN: data.eMoneyPIN || "",
      },
      total,
    });
  };

  const values = { formData, setFormData, handleOrder };

  return <formContext.Provider value={values}>{children}</formContext.Provider>;
};

export default FormProvider;
