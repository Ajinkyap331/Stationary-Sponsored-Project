import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { update } from "../API/calls";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { DisplayNotification } from "../API/resolvecall";

export const Scanner = () => {
  const counter = useRef();
  const inoutproduct = useRef();

  const [code, setcode] = useState("");

  let _code = "";

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        update(inoutproduct.current, _code, counter.current.value).then(
          (message) => DisplayNotification(message, counter.current.value)
        );
        setcode(_code);
        _code = "";
      } else if (e.key !== "Shift" && e.key !== "Alt") {
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
        <input type="radio" value="in" name="" /> IN
        <input type="radio" value="out" name="" /> OUT
      </div>
      <div>Code : {code}</div>
      <ReactNotifications />
    </div>
  );
};
