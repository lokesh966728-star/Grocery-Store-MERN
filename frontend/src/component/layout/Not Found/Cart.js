import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import MetaData from "../MetaData";

const AddtoCart = () => {
  return (
    <div className="AddtoCart">
      <MetaData title="Page not Found" description="Shop Now | Add to Cart " />
      <h3> We're Sorry...</h3>

      <h5 className="page">
        {" "}
        This functionality is temporarily stopped by the Admin{" "}
      </h5>

      <Link to="/"> Go To HomePage </Link>
    </div>
  );
};

export default AddtoCart;
