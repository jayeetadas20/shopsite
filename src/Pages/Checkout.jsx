import React, { useState } from "react";
import "./css/Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    cod: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.cod) {
      setSubmitted(true);
    } else {
      alert("Please select Cash on Delivery to proceed.");
    }
  };

  if (submitted) {
    return (
      <div className="thankyou_box">
        <h2 className="thank_you">🎉 Thank you for your order!</h2>
      </div>
    );
  }

  return (
    <div className="checkout_container">
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <div className="cod_checkbox">
          <input
            type="checkbox"
            name="cod"
            id="cod"
            checked={formData.cod}
            onChange={handleChange}
          />
          <label htmlFor="cod">Cash on Delivery (COD)</label>
        </div>

        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default Checkout;
