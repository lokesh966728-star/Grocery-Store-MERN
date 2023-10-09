import React from "react";
import { Rating } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
    size: "small",
  };
  const navigate = useNavigate();
  function shopnow() {
    navigate("/shop");
  }
  return (
    <div className="productCard">
      <img src={product.images[0].url} alt={product.name} />
      <p> {product.name} </p>
      <div>
        <Rating className="rating" {...options} />
      </div>
      <span>{`₹${product.price}`}</span>
      <button onClick={shopnow}> Add to Cart </button>
    </div>
  );
};

export default ProductCard;
