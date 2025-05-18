import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cartpage.css";
import men1 from "../../assets/images/men1.png";
import men2 from "../../assets/images/men2.png";
import men3 from "../../assets/images/men3.png";
import specs from "../../assets/images/specs.png";
import Header from "../../components/header/Header";

const cartItemsData = [
  {
    id: 1,
    name: "Royale-Cyprus Blue Jacket.",
    code: "#25139526913984",
    price: 1399,
    image: men1,
  },
  {
    id: 2,
    name: "Royale-Cyprus Blue Jacket.",
    code: "#25139526913984",
    price: 1399,
    image: men2,
  },
  {
    id: 3,
    name: "Royale-Cyprus Blue Jacket.",
    code: "#25139526913984",
    price: 1399,
    image: men3,
  },
  {
    id: 4,
    name: "Royale-Cyprus Blue Jacket.",
    code: "#25139526913984",
    price: 1399,
    image: specs,
  },
];

function CartPage() {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const navigate = useNavigate();

  var subtotal = 2347;
  var estimatedTax = 50;
  var shipping = 29;
  var total = subtotal + estimatedTax + shipping;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header, null),
    React.createElement(
      "div",
      { className: "cart-page" },
      React.createElement(
        "nav",
        { className: "cart-breadcrumbs" },
        React.createElement("span", null, "BROWSE BY CATEGORY"),
        React.createElement("span", { className: "breadcrumb-sep" }, "/"),
        React.createElement("span", null, "WOMEN"),
        React.createElement("span", { className: "breadcrumb-sep" }, "/"),
        React.createElement("span", null, "CART VIEW"),
        React.createElement("span", { className: "breadcrumb-sep" }, "/"),
        React.createElement("span", { className: "breadcrumb-active" }, "VIEW CART DETAILS")
      ),
      React.createElement(
        "div",
        { className: "cart-header" },
        React.createElement("h2", null, "Shopping Cart")
      ),
      React.createElement(
        "div",
        { className: "cart-content" },
        // Cart Items
        React.createElement(
          "div",
          { className: "cart-items" },
          cartItems.map(function (item) {
            return React.createElement(
              "div",
              { className: "cart-item", key: item.id },
              React.createElement("img", {
                src: item.image,
                alt: item.name,
                className: "cart-item-img",
              }),
              React.createElement(
                "div",
                { className: "cart-item-details" },
                React.createElement("div", { className: "cart-item-title" }, item.name),
                React.createElement("div", { className: "cart-item-code" }, item.code)
              ),
              React.createElement(
                "div",
                { className: "cart-item-qty" },
                React.createElement("button", null, "-"),
                React.createElement("span", null, "1"),
                React.createElement("button", null, "+")
              ),
              React.createElement("div", { className: "cart-item-price" }, "$" + item.price),
              React.createElement("button", { className: "cart-item-remove" }, "\u00D7")
            );
          })
        ),
        // Order Summary
        React.createElement(
          "div",
          { className: "cart-summary" },
          React.createElement("h3", null, "Order Summary"),
          React.createElement(
            "div",
            { className: "cart-summary-group" },
            React.createElement("label", null, "Discount code / Promo code"),
            React.createElement("input", { type: "text", placeholder: "Code" })
          ),
          React.createElement(
            "div",
            { className: "cart-summary-group" },
            React.createElement("label", null, "Your bonus card number"),
            React.createElement(
              "div",
              { className: "cart-summary-bonus" },
              React.createElement("input", { type: "text", placeholder: "Enter Card Number" }),
              React.createElement("button", null, "Apply")
            )
          ),
          React.createElement(
            "div",
            { className: "cart-summary-totals" },
            React.createElement(
              "div",
              null,
              React.createElement("span", null, "Subtotal"),
              React.createElement("span", null, "$" + subtotal)
            ),
            React.createElement(
              "div",
              null,
              React.createElement("span", null, "Estimated Tax"),
              React.createElement("span", null, "$" + estimatedTax)
            ),
            React.createElement(
              "div",
              null,
              React.createElement("span", null, "Estimated shipping & Handling"),
              React.createElement("span", null, "$" + shipping)
            ),
            React.createElement(
              "div",
              { className: "cart-summary-total" },
              React.createElement("span", null, "Total"),
              React.createElement("span", null, "$" + total)
            )
          ),
          React.createElement(
            "button",
            {
              className: "cart-summary-checkout",
              onClick: () => navigate("/bookpage")
            },
            "Checkout"
          )
        )
      )
    )
  );
}

export default CartPage;
