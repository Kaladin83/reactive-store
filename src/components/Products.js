import React, { useContext } from "react";

import { appContext } from "../appContext";
import { data } from "../data";
import Product from "./Product";

const Products = () => {
  const { category } = useContext(appContext);
  return (
    <>
      <div className="category-header">Our {category}</div>
      <div className="products-container">
        {data
          .filter(p => p.category.toLowerCase() === category.toLowerCase())
          .map(p1 => {
            return <Product key={p1.id} props={p1} />;
          })}
      </div>
    </>
  );
};

export default Products;
