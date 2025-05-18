import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import giftPop from "../../assets/images/gif.gif";
import "./OrderSuccess.css";

export default function OrderSuccess() {
 
  return (
    <>
      <Header />
      <div className="order-success-container">
        <img src={giftPop} alt="Gift" className="order-success-gift" />
        <h1 className="order-success-title">
          Congratulation <span className="order-success-user">John</span>
        </h1>
        <div className="order-success-subtitle">
          Your Order have been placed successfully
        </div>
        <div className="order-success-desc">
          You will receive a confirmation email with the details of your order, including the price, and any additional instructions.
        </div>
      </div>
    </>
  );
} 