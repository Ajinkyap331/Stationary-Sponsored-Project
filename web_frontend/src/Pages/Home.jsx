import React from "react";
import { Scanner } from "../Components/Scanner";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Scanner />
      <Link to="/all">
        <button>See All Products</button>
      </Link>
    </div>
  );
};
