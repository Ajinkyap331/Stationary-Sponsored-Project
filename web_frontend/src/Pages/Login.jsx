import React, { useRef } from "react";
import { login } from "../API/calls";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";

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
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 form-wrapper bg-slate-900">
      <div className=" md:w-[400px] flex flex-col rounded-2xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-2xl shadow-black ">
        <div className="text-center mt-4 p-2 ">
          <div className="flex items-center justify-center "></div>
          <h2 className="font-bold text-3xl tracking-tight ">
            Login to your Account
          </h2>
        </div>

        <div className="w-full max-w-xl p-2 ">
          <div className="flex flex-wrap mx-3 mb-4">
            <div className="w-full md:w-full px-3 mb-3">
              <div className="flex flex-col">
                <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                  <BiUserCircle
                    className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                  />

                  <input
                    ref={username}
                    className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] [ text-white focus:text-white ]`}
                    type="text"
                    placeholder="Username"
                  ></input>
                </label>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-3">
              <div className="flex flex-col">
                <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                  <RiLockPasswordLine
                    className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                  />
                  <input
                    ref={password}
                    id="password"
                    className="form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ]
                    
                    [ text-white focus:text-white ]"
                    type="password"
                    placeholder="Password"
                  />
                </label>
              </div>
            </div>

            <div className="w-full md:w-full px-3 mb-2 flex flex-row gap-1">
              <button
                onClick={handleLogin}
                className="appearance-none block w-full  text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight [ transform transition  ]  bg-black cursor-pointer hover:-translate-y-1 hover:bg-white hover:border-black hover:text-black"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
