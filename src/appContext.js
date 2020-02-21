import React, { useState, useEffect } from "react";

export const appContext = React.createContext();

const ContextProvider = props => {
  const pathName = window.location.pathname;
  const path = pathName === "/" ? "/" : pathName.substr(1);

  const [activePath, setActivePath] = useState(path);
  const [category, setCategory] = useState("");

  console.log("the category in Context: " + category);
  useEffect(() => {
    console.log("In use effect of Context: ");
  }, []);

  return (
    <appContext.Provider
      value={{ activePath, setActivePath, category, setCategory }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default ContextProvider;
