import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Navbar } from "../Components/Navbar";

export const Transactions = () => {
  const [trans, sett] = useState({ original: false, edited: false });

  useEffect(() => {
    axios.get("http://localhost:9000/alltransactions").then((data) => {
      sett((trans) => ({ ...trans, original: data.data }));
    });
  }, []);

  const date = useRef("");

  const handleDate = () => {
    const edit = [];
    if (trans.original) {
      trans.original.map((e) => {
        if (e.date.split("T")[0] === date.current.value) {
          edit.push(e);
        }
      });
      sett((trans) => ({ ...trans, edited: edit }));
    }
  };

  return (
    <div className="bg-stone-900 text-white text-center">
      <section>
        <Navbar />
      </section>
      <section className="flex flex-col items-center gap-2 p-2 justify-center">
        <input
          onChange={handleDate}
          ref={date}
          className="text-white text-center rounded-3xl px-4 py-2  hover:bg-black"
          type="date"
        />
        <button
          onClick={() => {
            axios.get("http://localhost:9000/alltransactions").then((data) => {
              sett((trans) => ({ ...trans, original: data.data }));
            });
            sett((trans) => ({ ...trans, edited: false }));
          }}
          className="border rounded-3xl text-black border-black px-4 py-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 hover:text-white hover:border-white focus:outline-none focus:ring focus:ring-violet-300"
        >
          Fetch
        </button>
      </section>
      <section className="flex w-screen justify-evenly py-5">
        <div className="w-1/12">Sr. No.</div>
        <div className="w-1/12">Barcode</div>
        <div className="w-1/12">Count</div>
        <div className="w-1/12">Date</div>
        <div className="w-1/12">Time</div>
        <div className="w-1/12">In/Out</div>
      </section>
      {trans.edited ? (
        <>
          {trans.edited.map((t, i) => {
            return (
              <section className="flex w-screen justify-evenly py-3">
                <div className="w-1/12 border">{i + 1}</div>
                <div className="w-1/12 border">{t.barcode}</div>
                <div className="w-1/12 border">{t.count}</div>
                <div className="w-1/12 border">{t.date.split("T")[0]}</div>
                <div className="w-1/12 border">{t.date.split("T")[1]}</div>
                <div className="w-1/12 border">{t.in ? "IN" : "OUT"}</div>
              </section>
            );
          })}
        </>
      ) : trans.original ? (
        <>
          {trans.original.map((t, i) => {
            return (
              <section className="flex w-screen justify-evenly py-3">
                <div className="w-1/12 border">{i + 1}</div>
                <div className="w-1/12 border">{t.barcode}</div>
                <div className="w-1/12 border">{t.count}</div>
                <div className="w-1/12 border">{t.date.split("T")[0]}</div>
                <div className="w-1/12 border">{t.date.split("T")[1]}</div>
                <div className="w-1/12 border">{t.in ? "IN" : "OUT"}</div>
              </section>
            );
          })}
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};
