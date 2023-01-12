import React, { useRef } from "react";
import { login } from "../API/calls";
import { useNavigate } from "react-router-dom";

export const Login = ({ data, setdata }) => {
  const username = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      username.current.value === "ajinkya" &&
      password.current.value === "new123"
    ) {
      navigate("/");
      setdata((data) => ({ ...data, login: true }));
    }

    // console.log("clicked");
    // login(username.current.value, password.current.value);
  };

  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center gap-10 bg-slate-900 text-white">
      <div className="flex border border-white w-2/6 h-3/6 justify-evenly flex-col items-center rounded-lg">
        <div className="text-2xl">Login</div>
        <div className="flex items-center gap-3">
          <div>Username : </div>
          <input
            ref={username}
            className="p-2 border border-white bg-slate-900 rounded-lg"
          />
        </div>
        <div className="flex items-center gap-3">
          <div>Password : </div>
          <input
            ref={password}
            type="password"
            className="p-2 border border-white bg-slate-900 rounded-lg"
          />
        </div>
        <div className="flex gap-9">
          <button
            onClick={handleLogin}
            className="px-5 py-2  border border-white rounded-lg"
          >
            Login
          </button>

          <button
            //   onClick={handleLogin}
            className="px-5 py-2  border border-white rounded-lg"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
