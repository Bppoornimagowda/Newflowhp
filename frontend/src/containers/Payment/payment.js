import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import LocationIcon from "../../assets/icons/address1.png";
import ShippingIcon from "../../assets/icons/Shipping.png";
import PaymentIcon from "../../assets/icons/payment1.png";
import men1 from "../../assets/images/men1.png";
import men2 from "../../assets/images/men2.png";
import men3 from "../../assets/images/men3.png";
import mastercard from "../../assets/images/mastercard.png";
import "./payment.css";

const cartItems = [
  { id: 1, name: "Royale-Cyprus Blue Jacket.", price: 1399, image: men1 },
  { id: 2, name: "Royale-Cyprus Blue Jacket.", price: 549, image: men2 },
  { id: 3, name: "Royale-Cyprus Blue Jacket.", price: 399, image: men3 },
];

export default function PaymentPage() {
  const currentStep = 3;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ordersuccess");
  };

  return (
    <>
      <Header />
      <div className="payment-main">
        {/* Stepper */}
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

        <div className="payment-content">
          {/* Summary */}
          <div className="payment-summary">
            <h3>Summary</h3>
            <div className="payment-summary-items">
              {cartItems.map(item => (
                <div className="payment-summary-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="payment-summary-item-info">
                    <div>{item.name}</div>
                    <div className="payment-summary-item-price">${item.price}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="payment-summary-details">
              <div className="payment-summary-label">Address</div>
              <div className="payment-summary-value">
                1131 Dusty Townline, Jacksonville, TX 40322
              </div>
              <div className="payment-summary-label">Shipment method</div>
              <div className="payment-summary-value">Free</div>
              <div className="payment-summary-totals">
                <div>
                  <span>Subtotal</span>
                  <span>$2347</span>
                </div>
                <div>
                  <span>Estimated Tax</span>
                  <span>$50</span>
                </div>
                <div>
                  <span>Estimated shipping & Handling</span>
                  <span>$29</span>
                </div>
                <div className="payment-summary-total">
                  <span>Total</span>
                  <span>$2426</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="payment-form">
            <h3>Payment</h3>
            <div className="payment-tabs">
              <div className="payment-tab active">Credit Card</div>
              <div className="payment-tab">PayPal</div>
              <div className="payment-tab">PayPal Credit</div>
            </div>
            <img src={mastercard} alt="Mastercard" className="payment-card-logo-inline" />
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Cardholder Name" />
              <input type="text" placeholder="Card Number" />
              <div className="payment-form-row">
                <input type="text" placeholder="Exp.Date" />
                <input type="text" placeholder="CVV" />
              </div>
              <div className="payment-checkbox">
                <input type="checkbox" id="same-billing" defaultChecked />
                <label htmlFor="same-billing">Same as billing address</label>
              </div>
              <div className="payment-form-actions">
                <button type="button" className="payment-btn secondary" onClick={() => navigate(-1)}>Back</button>
                <button type="submit" className="payment-btn primary">Pay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
