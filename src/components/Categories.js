import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { categories } from "../data";
import { appContext } from "../appContext";

const Categories = () => {
  const { setCategory } = useContext(appContext);

  const handleClick = category => {
    console.log("handleClick in categories clicked");
    setCategory(category);
    console.log("the category in Categories after set categories: " + category);
  };

  return (
    <div className="categories-container">
      {categories.map((c, index) => {
        return (
          <div key={index} className="category-card">
            <Link to={"/products"}>
              <img
                src={c.image}
                alt={c.name}
                onClick={() => handleClick(c.name)}
              />
              <span>{c.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;
