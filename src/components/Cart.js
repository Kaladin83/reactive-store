import React, { useContext } from "react";
import { categories } from "../data";
import { appContext } from "../appContext";

const Cart = () => {
  const { cart, deleteFromCart } = useContext(appContext);

  let existingCategories = [];
  let index = 0;
  cart.forEach((p, pIndex) =>
    categories.map((c, cIndex) => {
      if (c.name === p.category) {
        let existingObject = c.name;
        let exists;

        if (existingCategories.length > 0) {
          exists = existingCategories.find(e => e === c.name);
        }

        if (!exists || exists === "") {
          existingCategories.push(existingObject);
          index = index + 1;
        }
      }
    })
  );

  existingCategories.forEach((e, index) => {
    console.log("index :" + index + " || name :" + e);
  });

  return (
    <div className="cart-container">
      <div className="cart-title">My cart</div>
      {categories.map(c => {
        return (
          <section className="cart-category-and-items" key={c.id}>
            {existingCategories
              .filter(e => e === c.name)
              .map((e, index) => {
                return (
                  <>
                    <div className="cart-category-name" key={index}>
                      <div className="cart-category-text">{c.name} </div>
                      <img src={c.image} />
                    </div>
                    <div className="cart-category-box">
                      {cart.map(p => {
                        if (c.name === p.category) {
                          return (
                            <div className="cart-object" key={p.productId}>
                              <div className="cart-item">X{p.amount}</div>
                              <div className="cart-item">{p.productName}</div>
                              <div className="cart-item">
                                subtotal:&nbsp;{p.sum}$
                              </div>
                              <div
                                className="delete-button"
                                onClick={() => deleteFromCart(p.productId)}
                              >
                                <i className="fas fa-trash-alt"></i>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </>
                );
              })}
          </section>
        );
      })}
    </div>
  );
};

export default Cart;
