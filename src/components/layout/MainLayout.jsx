import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar></Navbar>
      <div className="container">{children}</div>
    </>
  );
};

export default MainLayout;
