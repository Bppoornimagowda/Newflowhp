import React from "react";
import "./Header.css";
import logo from "../../assets/icons/logo.png";
import cartIcon from "../../assets/icons/Cart.png";
import profileIcon from "../../assets/icons/profile.png";
import searchIcon from "../../assets/icons/search-normal.png";
import arrowDown from "../../assets/icons/arrow-down.png";
import favoritesIcon from "../../assets/icons/Favorites.png";
import arrowRight from "../../assets/icons/rightarrow.png";
import arrowLeft from "../../assets/icons/left arrow.png";


function Header() {
  return React.createElement(
    React.Fragment,
    null,
    // Promo bar
    React.createElement(
      "div",
      { className: "header-promo-bar" },
      React.createElement("img", {
        src: arrowLeft,
        alt: "arrow left",
        className: "promo-arrow-right"
      }),
      React.createElement(
        "span",
        { className: "promo-text" },
        "Summer Sale: Up to 60% off"
      ),
      React.createElement("img", {
        src: arrowRight,
        alt: "arrow right",
        className: "promo-arrow-right"
      })
    ),
    // Main header row
    React.createElement(
      "header",
      { className: "main-header main-header-single" },
      React.createElement(
        "div",
        { className: "header-row" },
        // Left nav
        React.createElement(
          "nav",
          { className: "header-nav left" },
          React.createElement("span", { className: "header-nav-item" }, "MEN"),
          React.createElement("span", { className: "header-nav-item" }, "WOMEN"),
          React.createElement("span", { className: "header-nav-item" }, "ACCESSORIES"),
          React.createElement("span", { className: "header-nav-item" }, "BAGS & LUGGAGE"),
          React.createElement("span", { className: "header-nav-item" }, "SPORTSWEAR")
        ),
        // Center logo
        React.createElement(
          "div",
          { className: "header-logo-center" },
          React.createElement("img", {
            src: logo,
            alt: "Areta360 Logo",
            className: "logo-img-center"
          })
        ),
        // Right icons
        React.createElement(
          "div",
          { className: "header-icons-right" },
          React.createElement(
            "span",
            { className: "header-currency" },
            "USA (USD $)",
            React.createElement("img", {
              src: arrowDown,
              alt: "arrow down",
              className: "header-arrow-down"
            })
          ),
          React.createElement("img", {
            src: favoritesIcon,
            alt: "favorites",
            className: "header-icon"
          }),
          React.createElement("img", {
            src: searchIcon,
            alt: "search",
            className: "header-icon"
          }),
          React.createElement("img", {
            src: cartIcon,
            alt: "cart",
            className: "header-icon"
          }),
          React.createElement("img", {
            src: profileIcon,
            alt: "profile",
            className: "header-icon"
          })
        )
      )
    )
  );
}

export default Header; 