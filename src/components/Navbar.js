import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { appContext } from "../appContext";

function Navbar() {
  const { activePath, setActivePath } = useContext(appContext);

  useEffect(() => {
    console.log("In use effect of Navbar: ");
  }, []);

  return (
    <div className="navbar">
      <ul>
        <li onClick={() => setActivePath("/")}>
          <Link
            className={activePath === "/" ? "links focused" : "links"}
            to="/"
          >
            <span className="padding">Home</span>
          </Link>
        </li>
        <li onClick={() => setActivePath("sales")}>
          <Link
            className={activePath === "sales" ? "links focused" : "links"}
            to="/sales"
          >
            <span className="padding">On Sale</span>
          </Link>
        </li>
        <li onClick={() => setActivePath("categories")}>
          <Link
            className={activePath === "categories" ? "links focused" : "links"}
            to="/categories"
          >
            <span>Categories</span>
          </Link>
        </li>
      </ul>
      <div onClick={() => setActivePath("login")} className="float-right">
        <Link
          className={activePath === "login" ? "links focused" : "links"}
          to="/login"
        >
          <span className="padding">Login</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
