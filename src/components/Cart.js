import React, { useContext } from "react";
import { categories } from "../data";
import { appContext } from "../appContext";

const Cart = () => {
  const { cart } = useContext(appContext);

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
          <section className="cart-category-and-items" key={index}>
            {existingCategories
              .filter(e => e === c.name)
              .map(e => {
                return (
                  <>
                    <div className="cart-category-name">{c.name}</div>
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
