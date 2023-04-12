import React, { useEffect, useState } from "react";
import { Scanner } from "../Components/Scanner";
import { AllProducts } from "./AllProducts";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

import axios from "axios";
export const Home = ({ data, setdata }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!data.login) {
      navigate("/login");
    }

    axios
      .get("http://localhost:9000/getdata")
      .then((resp) => setdata((data) => ({ ...data, products: resp.data })));
  }, []);

  return (
    <div className="bg-stone-900 text-white overflow-hidden">
      <Navbar />
      <div className="flex w-screen h-screen justify-evenly items-center flex-col">
        <Scanner data={data} setdata={setdata} products={data.products} />
      </div>
    </div>
  );
};
