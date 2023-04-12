import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../asset/12.png";
export const Navbar = () => {
  return (
    <div className="relative w-screen border-b flex justify-between p-4 items-center">
      <div className="flex gap-5 items-center">
        <img src={logo} alt="logo" className="w-12 h-10" />
        <div className="text-2xl">One Tracking</div>
        <Link to="/">Home</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/allproducts">Details</Link>
      </div>

      <Link to="/login" className="text-xl flex flex-row">
        admin
        <AiOutlineUser className="w-16 h-8" />
      </Link>
    </div>
  );
};
