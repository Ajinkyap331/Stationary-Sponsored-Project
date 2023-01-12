import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="absolute w-screen border-b flex justify-between p-4 items-center">
      <div className="flex gap-5 items-center">
        <div className="text-2xl">GuruKrupa Stationary </div>
        <Link to = "/transactions">Transactions</Link>
      </div>

      <Link to="/login" className="text-xl">
        Hello Ajinkya
      </Link>
    </div>
  );
};
