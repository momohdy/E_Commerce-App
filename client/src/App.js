import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Container } from "react-bootstrap";

import Header from "./views/partials/Header";
import Footer from "./views/partials/Footer";
import Home from "./views/home/Home";
import DeatilsOfProduct from "./views/DeatilsOfProduct/DeatilsOfProduct";
import ShoppingCarts from "./views/ShoppingCarts/ShoppingCarts";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Profile from "./views/Profile/Profile";
import Shipping from "./views/Shipping/Shipping";
import Payment from "./views/Payment/Payment";
import PlaceOrder from "./views/PlaceOrder/PlaceOrder";
import OrderDetails from "./views/OrderDetails/OrderDetails";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/product/:id" element={<DeatilsOfProduct />} exact />
            <Route
              path="/ShoppingCarts/:id?/:qty?"
              element={<ShoppingCarts />}
              exact
            />
            <Route path="/login" element={<Login />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/shipping" element={<Shipping />} exact />
            <Route path="/payment" element={<Payment />} exact />
            <Route path="/placeOrder" element={<PlaceOrder />} exact />
            <Route path="/orders/:id" element={<OrderDetails />} exact />
          </Routes>
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
