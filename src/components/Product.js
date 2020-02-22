import React, { useContext } from "react";

import { appContext } from "../appContext";

const Product = props => {
  //Consts
  const { image, name, price, sale, id, maxAmount } = props.props;
  const { cart, addToCart } = useContext(appContext);

  const inputId = "orderAmount" + id;
  const finalPrice =
    sale === "0$"
      ? parseFloat(price.substr(0, price.length - 1))
      : parseFloat(sale.substr(0, price.length - 1));
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

  let currentOrder = {
    productId: id,
    productName: name,
    sum: finalPrice,
    amount: 1
  };
  cart
    .filter(p => p.productId === id)
    .map(p => {
      return (
        (currentOrder.productId = p.productId),
        (currentOrder.productName = p.productName),
        (currentOrder.sum = p.sum),
        (currentOrder.amount = p.amount)
      );
    });

  //Methods
  const setTotalPrice = action => {
    let amount_ =
      action === "add" ? currentOrder.amount + 1 : currentOrder.amount - 1;
    let total_ = amount_ * finalPrice;
    currentOrder.amount = amount_;
    currentOrder.sum = total_;

    addToCart(currentOrder);
  };

  //Rendering
  return (
    <div className="product-card">
      <img src={image} />
      <div className="product-description">
        <h3>{name}</h3> {prices}
      </div>
      <div className="product-details">
        <div className="order">
          <div className="order-amount">
            <button className="arrows" onClick={() => setTotalPrice("sub")}>
              <i className="fa fa-chevron-left arrow-left"></i>
            </button>
            <input
              type="text"
              id={inputId}
              name="orderAmount"
              value={currentOrder.amount}
            />
            <button className="arrows" onClick={() => setTotalPrice("add")}>
              <i className="fa fa-chevron-right arrow-right"></i>
            </button>
          </div>
          <button className="add-to-cart">
            <i className="fas fa-cart-plus"></i>
          </button>
          <div className="total-sum">
            Total sum:&nbsp;&nbsp;&nbsp;{currentOrder.sum}$
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
