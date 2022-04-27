import React, { useContext } from "react";
// CONTEXT
import { DataContext } from "../context";
// IMAGES
import logo from "../images/logo-itaf.png";

export const Title = () => {
  const { today } = useContext(DataContext);

  return (
    <div className="title-container">
      <h1 className="title-title">ID-ITAF</h1>
      <img className="title-img" src={logo} alt="logo" />
    </div>
  );
};
