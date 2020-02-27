import React, { useContext } from "react";

import { appContext } from "../appContext";

const Product = props => {
  //Consts
  const { image, name, category, price, sale, id, maxAmount } = props.props;
  const { cart, updateCart, updateSubTotalCart } = useContext(appContext);
  const { message, setMessage } = useContext(appContext);

  const inputId = "orderAmount" + id;

  const finalPrice =
    sale === "0$"
      ? parseFloat(price.substr(0, price.length - 2))
      : parseFloat(sale.substr(0, sale.length - 2));

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
    category: category,
    sum: finalPrice,
    amount: 0,
    inCart: false
  };

  cart
    .filter(p => p.productId === id)
    .map((p, index) => {
      return (
        (currentOrder.productId = p.productId),
        (currentOrder.productName = p.productName),
        (currentOrder.sum = p.sum),
        (currentOrder.amount = p.amount),
        (currentOrder.category = p.category),
        (currentOrder.inCart = p.inCart)
      );
    });

  currentOrder.sum =
    currentOrder.amount > 0 ? finalPrice * currentOrder.amount : 0;

  let cartColor = currentOrder.inCart ? "#48b54a" : "black";

  let cartCircleColor =
    currentOrder.amount === 0
      ? "transperent"
      : currentOrder.inCart
      ? "#48b54a"
      : "#eef5a6";

  //Methods

  const showSnackBar = () => {
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function() {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
  };

  const setTotalPrice = action => {
    let amount_ =
      action === "add" ? currentOrder.amount + 1 : currentOrder.amount - 1;
    let total_ = amount_ * finalPrice;
    currentOrder.amount = amount_;
    currentOrder.sum = total_;
    updateSubTotalCart(currentOrder);
  };

  const cartClicked = () => {
    if (currentOrder.amount > 0) {
      currentOrder.inCart = true;
      cart.filter(p => p.productId === id).map(p1 => (p1.inCart = true));
      updateCart(currentOrder);

      setMessage(
        currentOrder.amount +
          (currentOrder.amount === 1 ? " item" : " items") +
          " of " +
          currentOrder.productName +
          (currentOrder.amount === 1 ? " was" : " were") +
          " added to your cart"
      );

      showSnackBar();
    }
  };

  //Rendering
  return (
    <div className="product-card">
      <img src={image} alt="" />
      <div className="product-description">
        <div className="top-product-description">
          <div className="title">{name}</div>
          <div
            className="indicator"
            style={{ backgroundColor: cartCircleColor }}
          />
        </div>
        {prices}
      </div>
      <div className="product-details">
        <div className="description"> {name}</div>
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
          <button
            className="add-to-cart"
            style={{ color: cartColor }}
            onClick={() => cartClicked()}
          >
            <i className="fas fa-cart-plus"></i>
          </button>
          <div className="total-sum">
            Total sum:&nbsp;&nbsp;&nbsp;{currentOrder.sum}$
          </div>
        </div>
      </div>
      <div id="snackbar">{message}</div>
    </div>
  );
};

export default Product;
