import React, { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AddProducts = ({ data, setdata }) => {
  const name = useRef();
  const initcount = useRef();
  const barcode = useRef();

  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2 bg-slate-900 text-white">
      <div className="w-2/6 h-3/6 border p-3 rounded-lg flex flex-col justify-evenly items-center">
        <div className="text-2xl">Add your New Product Here !!! </div>

        <div>
          Name :{" "}
          <input ref={name} className="p-1 border bg-slate-900 rounded-lg" />
        </div>

        <div>
          Barcode :{" "}
          <input ref={barcode} className="p-1 border bg-slate-900 rounded-lg" />
        </div>

        <div>
          Initial Count :{" "}
          <input
            ref={initcount}
            className="p-1 border bg-slate-900 rounded-lg"
          />
        </div>

        <div className="flex gap-8">
          <Link to="/" className="border px-4 py-2 bg-slate-900 rounded-lg">
            Back
          </Link>

          <button
            onClick={() => {
              axios
                .post("http://localhost:9000/addproduct", {
                  name: name.current.value,
                  barcode: barcode.current.value,
                  count: initcount.current.value,
                })
                .then(() => {
                  axios
                    .get("http://localhost:9000/getdata")
                    .then((resp) =>
                      setdata((data) => ({ ...data, products: resp.data }))
                    );
                  navigate("/")
                });
            }}
            className="border px-4 py-2 bg-slate-900 rounded-lg"
          >
            ADD New Product
          </button> 
        </div>
      </div>
    </div>
  );
};
