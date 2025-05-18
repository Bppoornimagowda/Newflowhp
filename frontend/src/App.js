import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./containers/cartpage/cartpage";
import BookPage from "./containers/Bookpage/bookpage";
import ShipmentPage from "./containers/shipmentpage/shipment";
import PaymentPage from "./containers/Payment/payment";
import OrderSuccess from "./containers/OrderSuccess/OrderSuccess";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/bookpage" element={<BookPage />} />
        <Route path="/shipment" element={<ShipmentPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/ordersuccess" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
