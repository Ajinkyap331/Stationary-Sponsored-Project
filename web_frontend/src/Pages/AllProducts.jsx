import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const AllProducts = ({ products }) => {
  return (
    <div>
      {products ? (
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Barcode</th>
              <th>Count</th>
            </tr>
            {products.map((e, i) => {
              return (
                <tr className="text-center" id={e.barcode}>
                  <td className="p-3">{e.name}</td>
                  <td className="p-3">{e.barcode}</td>
                  <td className="p-3">{e.count}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};
