import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const AllProducts = () => {
  const [products, setp] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:9000/").then((resp) => setp(resp.data));
  }, []);

  return (
    <div>
      {products ? (
        products.map((e, i) => {
          return (
            <section id = {e.barcode}>
              <h4>Product {i+1}</h4>
              <div>Name : {e.name}</div>
              <div>Barcode : {e.barcode}</div>
              <div>Count : {e.count}</div>
              <br />
            </section>
          );
        })
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};
