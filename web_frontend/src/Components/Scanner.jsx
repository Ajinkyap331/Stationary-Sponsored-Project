import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { update } from "../API/calls";

export const Scanner = () => {
  const counter = useRef();
  const inoutproduct = useRef();

  const [code, setcode] = useState("");

  //   const p = new Promise((resolve, reject) => {

  //   });

  //   p.then((_code) => {
  //     console.log(_code);
  //     setcode(_code);
  //   });
  let _code = "";
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        console.log(update(inoutproduct.current, _code, counter.current.value));
        setcode(_code)
        _code = "";
      } else if (e.key != "Shift" && e.key != "Alt") {
        _code += e.key;
      }
    });
  }, []);

  return (
    <div>
      Set Initial Count : <input type="number" ref={counter} placeholder={1} />
      <button
        onClick={() => {
          _code = "";
        }}
      >
        SET
      </button>
      <div
        onChange={(event) =>
          (inoutproduct.current = event.target.value === "in" ? true : false)
        }
      >
        <input type="radio" value="in" name="gender" /> IN
        <input type="radio" value="out" name="gender" /> OUT
      </div>
      <div>Code : {code}</div>
    </div>
  );
};
