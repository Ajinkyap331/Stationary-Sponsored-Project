import React, { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineBarcode } from "react-icons/ai";
import { ImSortNumbericDesc } from "react-icons/im";
export const AddProducts = ({ data, setdata }) => {
  const name = useRef();
  const initcount = useRef();
  const barcode = useRef();

  const navigate = useNavigate();
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 form-wrapper bg-slate-900">
      <div className=" md:w-[400px] flex flex-col rounded-2xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-2xl shadow-black ">
        <div className="text-center mt-4 p-2 ">
          <div className="flex items-center justify-center "></div>
          <h2 className="font-bold text-3xl tracking-tight ">
            Add New Product
          </h2>
        </div>

        <div className="w-full max-w-xl p-2">
          <div className="flex flex-wrap mx-3 mb-4">
            <div className="flex flex-col w-128 md:w-full px-3 mb-3">
              <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                <MdDriveFileRenameOutline
                  className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                />

                <input
                  ref={name}
                  className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ]
                    [ text-[#333] focus:text-black ]`}
                  type="text"
                  placeholder="Name"
                ></input>
              </label>
            </div>

            <div className="flex flex-col w-128 w-full md:w-full px-3 mb-3">
              <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                <AiOutlineBarcode
                  className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                />
                <input
                  ref={barcode}
                  id="password"
                  className="form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ]
                    [ text-[#333] focus:text-black ]"
                  type="text"
                  placeholder="Barcode"
                />
              </label>
            </div>

            <div className="flex flex-col w-128 w-full md:w-full px-3 mb-3">
              <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                <ImSortNumbericDesc
                  className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                />
                <input
                  ref={initcount}
                  className="form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ]
                    [ text-[#333] focus:text-black ]"
                  type="text"
                  placeholder="Initial Count"
                />
              </label>
            </div>

            <div className="w-full md:w-full px-3 mb-2 flex flex-row gap-1">
              <Link
                to="/"
                className="appearance-none flex items-center justify-center w-full bg-black text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-white hover:border-black hover:text-black cursor-pointer"
              >
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
                      axios.get("http://localhost:9000/getdata").then((resp) =>
                        setdata((data) => ({
                          ...data,
                          products: resp.data,
                        }))
                      );
                      navigate("/");
                    });
                }}
                className="appearance-none block w-full  text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight [ transform transition  ]  bg-black cursor-pointer hover:-translate-y-1 hover:bg-white hover:border-black hover:text-black"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
