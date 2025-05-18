import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./shipment.css";
import LocationIcon from "../../assets/icons/address1.png";
import ShippingIcon from "../../assets/icons/shipping1.png";
import PaymentIcon from "../../assets/icons/Payment.png";

const shippingOptions = [
  {
    id: 1,
    label: "Free",
    desc: "Regularly shipment",
    date: "17 Oct, 2023",
    price: 0,
  },
  {
    id: 2,
    label: "$8.50",
    desc: "Get your delivery as soon as possible",
    date: "1 Oct, 2023",
    price: 8.5,
  },
  {
    id: 3,
    label: "Schedule",
    desc: "Pick a date when you want to get your delivery",
    date: "Select Date",
    price: null,
  },
];

export default function ShippingPage() {
  const [selected, setSelected] = useState(1);
  const currentStep = 2; // For shipment page
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="shipping-page">
        {/* Stepper Row */}
        <div className="stepper-row">
          <div className={`stepper-step${currentStep === 1 ? " active" : ""}`}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <img src={LocationIcon} alt="Address" className="stepper-step-icon" style={{ filter: currentStep === 1 ? 'none' : 'grayscale(1) brightness(0.6)' }} />
              <span className="stepper-step-number">STEP 1</span>
            </div>
            <span className="stepper-step-label">Address</span>
          </div>
          <div className={`stepper-step${currentStep === 2 ? " active" : ""}`}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <img src={ShippingIcon} alt="Shipping" className="stepper-step-icon" style={{ filter: currentStep === 2 ? 'none' : 'grayscale(1) brightness(0.6)' }} />
              <span className="stepper-step-number">STEP 2</span>
            </div>
            <span className="stepper-step-label">Shipping</span>
          </div>
          <div className={`stepper-step${currentStep === 3 ? " active" : ""}`}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <img src={PaymentIcon} alt="Payment" className="stepper-step-icon" style={{ filter: currentStep === 3 ? 'none' : 'grayscale(1) brightness(0.6)' }} />
              <span className="stepper-step-number">STEP 3</span>
            </div>
            <span className="stepper-step-label">Payment</span>
          </div>
        </div>

        <h2 className="shipping-title">Shipment Method</h2>

        <div className="shipping-options">
          {shippingOptions.map(opt => (
            <label
              key={opt.id}
              className={`shipping-option${selected === opt.id ? " selected" : ""}`}
            >
              <input
                type="radio"
                name="shipping"
                checked={selected === opt.id}
                onChange={() => setSelected(opt.id)}
              />
              <span className="shipping-label">{opt.label}</span>
              <span className="shipping-desc">{opt.desc}</span>
              <span className="shipping-date">{opt.date}</span>
            </label>
          ))}
        </div>

        <div className="shipping-actions">
          <button className="shipping-btn secondary" onClick={() => navigate(-1)}>Back</button>
          <button className="shipping-btn primary" onClick={() => navigate("/payment")}>Next</button>
        </div>
      </div>
    </>
  );
}
