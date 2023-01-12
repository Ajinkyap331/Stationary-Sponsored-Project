import React from "react";

export const AddManually = ({ products }) => {
  return (
    <div>
      <div>Add Without Scanning</div>

      <select className="w-full" name="cars" id="cars">
        <option value="---">---</option>
        {products.map((e) => {
          return <option value={e.name}>{e.name}</option>;
        })}
      </select>

      <button className = "border px-2 border-black " >ADD</button>
    </div>
  );
};
