import React from "react";
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import UpdateProfile from "./component/User/UpdateProfile.js";
import store from "./store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./actions/userAction";
import Profile from "./component/User/Profile.js";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";
import AddtoCart from "./component/layout/Not Found/Cart";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Roboto",
          "Droid Sans",
          " Chilanka",
          "Poppins",
          "Young Serif",
        ],
      },
    });
    store.dispatch(loadUser());
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />

        {/* protected Routes */}

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route exact path="/shop" element={<AddtoCart />} />

          <Route exact path="/account" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
