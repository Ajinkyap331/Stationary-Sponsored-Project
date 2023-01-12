import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { update } from "../API/calls";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { DisplayNotification } from "../API/resolvecall";
import axios from "axios";
import { Link } from "react-router-dom";

export const Scanner = ({ data, setdata, products }) => {
  const counter = useRef();
  const inout = useRef();
  const sel = useRef();

  let code = "";

  function isNumber(char) {
    if (typeof char !== "string") {
      return false;
    }

    if (char.trim() === "") {
      return false;
    }

    return !isNaN(char);
  }

  useEffect(() => {
    document.addEventListener("keydown", async (e) => {
      if (e.ctrlKey && e.key === "j") e.preventDefault();
      if (e.key === "Enter") {
        await update(inout.current, code, counter.current.value)
          .then((message) => {
            DisplayNotification(message, counter.current.value);
            setdata((data) => ({ ...data, code: code }));
          })
          .then(() => {
            axios.post("http://localhost:9000/orders", {
              barcode: code,
              count: counter.current.value,
              in: inout.current,
            });
          })
          .then(() => {
            code = "";
            axios
              .get("http://localhost:9000/getdata")
              .then((resp) =>
                setdata((data) => ({ ...data, products: resp.data }))
              );
          });
      } else if (
        e.key !== "Shift" &&
        e.key !== "Alt" &&
        e.key !== "Backspace" &&
        !e.ctrlKey &&
        !isNumber(e.key)
      ) {
        code += e.key;
      }
    });
  }, []);

  const ProductDetails = (
    <>
      <section className="p-10 border rounded-lg">
        <div>Product Details</div>
        <div>Code : {data.code}</div>
      </section>
    </>
  );

  const InOutProduct = (
    <>
      <ReactNotifications />
      <section className="flex flex-col gap-4 p-10 border rounded-lg">
        <div> Set Count :</div>
        <input
          onChange={() => {
            code = "";
          }}
          className="border p-2 bg-stone-900"
          type="number"
          ref={counter}
          placeholder={1}
        />

        <div
          onChange={(event) =>
            (inout.current = event.target.value === "in" ? true : false)
          }
        >
          <input className="ml-3" type="radio" value="in" name="inoutdata" />{" "}
          Add Product
          <input
            className="ml-10 bg-stone-900"
            type="radio"
            value="out"
            name="inoutdata"
            checked
          />{" "}
          Remove Product
        </div>
      </section>
    </>
  );

  return (
    <div>
      <div className="flex flex-col gap-10 ">
        {ProductDetails}
        <div className="flex gap-6">
          {InOutProduct}
          <section className="p-10 border rounded-lg flex flex-col gap-3">
            <div>Update Without Scanning</div>
            <select
              ref={sel}
              className="p-2 w-full bg-stone-900 border rounded-lg"
              name="cars"
              id="cars"
            >
              <option value="---">---</option>
              {products.map((e) => {
                return <option value={e.barcode}>{e.name}</option>;
              })}
            </select>

            <div>
              <button
                onClick={() => {
                  update(
                    inout.current,
                    sel.current.value,
                    counter.current.value
                  )
                    .then((message) => {
                      axios.post("http://localhost:9000/orders", {
                        barcode: sel.current.value,
                        count: counter.current.value,
                        in: inout.current,
                      });
                      DisplayNotification(message, counter.current.value);
                      setdata((data) => ({ ...data, code: code }));
                    })
                    .then(() => {
                      code = "";
                      axios
                        .get("http://localhost:9000/getdata")
                        .then((resp) =>
                          setdata((data) => ({ ...data, products: resp.data }))
                        );
                    });
                }}
                className="border px-2  rounded-lg"
              >
                UPDATE
              </button>
            </div>
          </section>
        </div>

        <Link className="border px-4 py-2 w-max rounded-lg" to="/addproduct">
          <button>ADD New Product</button>
        </Link>
      </div>
    </div>
  );
};
