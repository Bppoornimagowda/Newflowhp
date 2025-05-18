import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./bookpage.css";
import LocationIcon from "../../assets/icons/Location.png";
import ShippingIcon from "../../assets/icons/Shipping.png";
import PaymentIcon from "../../assets/icons/Payment.png";

const addresses = [
  {
    id: 1,
    name: "2118 Thornridge",
    type: "HOME",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    phone: "(209) 555-0104",
    selected: true,
  },
  {
    id: 2,
    name: "Headoffice",
    type: "OFFICE",
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    phone: "(704) 555-0127",
    selected: false,
  },
];

function BookPage() {
  const [selectedId, setSelectedId] = useState(addresses[0].id);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="address-page">
        {/* Stepper */}
        <div className="address-stepper">
          <span className={`step${selectedId === 1 ? " active" : ""}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <img src={LocationIcon} alt="Address" className="step-icon-img" />
              <span className="step-number">STEP 1</span>
            </div>
            <span className="step-label">Address</span>
          </span>
          <span className={`step${selectedId === 2 ? " active" : ""}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <img src={ShippingIcon} alt="Shipping" className="step-icon-img" />
              <span className="step-number">STEP 2</span>
            </div>
            <span className="step-label">Shipping</span>
          </span>
          <span className={`step${selectedId === 3 ? " active" : ""}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <img src={PaymentIcon} alt="Payment" className="step-icon-img" />
              <span className="step-number">STEP 3</span>
            </div>
            <span className="step-label">Payment</span>
          </span>
        </div>
        {/* Title */}
        <h2 className="address-title">Select Address</h2>
        {/* Address List */}
        <div className="address-list">
          {addresses.map((addr) => (
            <div
              className={"address-card" + (selectedId === addr.id ? " selected" : "")}
              key={addr.id}
              onClick={() => setSelectedId(addr.id)}
            >
              <div className="address-radio">
                <input type="radio" checked={selectedId === addr.id} readOnly />
              </div>
              <div className="address-info">
                <div className="address-name-row">
                  <span className="address-name">{addr.name}</span>
                  <span className={"address-type" + (addr.type === "HOME" ? " home" : " office")}>{addr.type}</span>
                </div>
                <div className="address-line">{addr.address}</div>
                <div className="address-phone">{addr.phone}</div>
              </div>
              <div className="address-actions">
                <span className="address-edit">✎</span>
                <span className="address-remove">×</span>
              </div>
            </div>
          ))}
        </div>
        {/* Add New Address */}
        <div className="address-add-row">
          <div className="address-add-dash" />
          <button className="address-add-btn">+</button>
          <span className="address-add-label">Add New Address</span>
        </div>
        {/* Navigation Buttons */}
        <div className="address-nav-btns">
          <button className="address-back-btn" onClick={() => navigate(-1)}>Back</button>
          <button
            className="address-next-btn"
            onClick={() => navigate("/shipment")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default BookPage;
