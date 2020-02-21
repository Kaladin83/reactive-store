import React from "react";

const Product = props => {
  const { image, name, price, sale, id, amount } = props.props;
  console.log(props.props);

  const prices =
    sale !== "0$" ? (
      <div>
        <div className="price">
          {sale}
          <div className="sale">{price}</div>
        </div>
      </div>
    ) : (
      <div className="price">{price}</div>
    );
  const classes = sale === "0$" ? "price" : "price sale";
  return (
    <div className="product-card">
      <img src={image} />
      <div className="product-description">
        <h3>{name}</h3> {prices}
      </div>
    </div>
  );
};

export default Product;
