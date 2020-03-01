import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { otherImages } from "../data";

import { appContext } from "../appContext";

const Home = () => {
  const { setActivePath } = useContext(appContext);

  useEffect(() => {
    console.log("In use effect of HOME: ");
  }, []);

  return (
    <div className="home-container">
      <img src={otherImages[2]} alt="background" className="background-img" />
      <div className="home-title">My Supermarket</div>
      <div className="main-choices">
        <div className="main-choice">
          <Link to="/sales">
            <img
              src={otherImages[0]}
              alt="background"
              onClick={() => setActivePath("sales")}
            />
          </Link>
        </div>
        <div className="main-choice">
          <Link to="/categories">
            <img
              src={otherImages[1]}
              alt="background"
              onClick={() => setActivePath("categories")}
            />
            <span>Categories</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
