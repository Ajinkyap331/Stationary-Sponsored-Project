import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../Components/Navbar";

export const AllProducts = ({ products }) => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center p-4">
        {products ? (
          <div className="p-4">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500 ">
                <tr>
                  <th className="px-6 py-4">No.</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Barcode</th>
                  <th className="px-6 py-4">Count</th>
                </tr>
              </thead>
              <tbody>
                {products.map((e, i) => {
                  return (
                    <tr
                      className="border-b dark:border-neutral-500"
                      id={e.barcode}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{e.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {e.barcode}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{e.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
};
