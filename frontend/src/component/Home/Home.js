import React, { Fragment, useEffect } from "react";
import "./Home.css";
import { FiArrowDownCircle } from "react-icons/fi";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function seemoreitems() {
    navigate("/products");
  }
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData
            title="ECOMMERCE--Home page"
            description="Grocery-Store to buy food items"
          />
          <div className="banner">
            <h1> THE ONE-STOP DESTINATION </h1>
            <p>For All Your Grocery Needs</p>

            <a href="#container">
              <button>
                <FiArrowDownCircle className="aicon" />
              </button>
            </a>
          </div>
          <h2 className="homeHeading"> Fruits </h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div>
            <button onClick={seemoreitems} className="button">
              {" "}
              See More Items{" "}
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Home;
