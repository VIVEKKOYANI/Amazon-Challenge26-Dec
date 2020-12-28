import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <p key={i}>
                  <StarRateIcon />
                </p>
              );
            })}
        </div>
      </div>
      <img src={image} alt="" />

      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
