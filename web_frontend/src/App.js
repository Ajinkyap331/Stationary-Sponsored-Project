import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AddProducts } from "./Pages/AddProducts";
import { useState } from "react";
import { Login } from "./Pages/Login";
import { Transactions } from "./Pages/Transactions";
import { AllProducts } from "./Pages/AllProducts";

function App() {
  const [data, setdata] = useState({
    code: "",
    products: [],
    login: false,
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home data={data} setdata={setdata} />}
          />
          <Route
            exact
            path="/addproduct"
            element={<AddProducts data={data} setdata={setdata} />}
          />
          <Route
            exact
            path="/login"
            element={<Login data={data} setdata={setdata} />}
          />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route
            exact
            path="/allproducts"
            element={<AllProducts products={data.products} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
