import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function App() {

  const [products, setp] = useState([])

  const code_ = useRef()

  useEffect(() => {

    axios.get("http://localhost:9000/products").then(res => setp(res.data))

  }, [])

  const [code, setcode] = useState("")

  const p = new Promise((resolve, reject) => {
    let _code = ""
    document.addEventListener("keydown", e => {
      if (e.key == "Enter") resolve(_code);
      if (e.key != "Shift") {
        _code += e.key
      }
    })
  })


  p.then((_code) => {
    setcode(_code)
  })

  const handleClick = () => {
    axios.post('http://localhost:9000/', {
      name: code_.current.value
    }).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div>{code}</div>
      {/* <input ref={code_} ></input>
      <button onClick={() => handleClick()} >send</button> */}
      <h3>Products</h3>
      {
        products.map(e => {
          return <section>
            <div>Name : {e.name}</div>
            <div>Barcode : {e.barcode}</div>
            <div>Count : {e.count}</div>
            <div>Price : {e.price}</div>
            <div>In Date : {e.inDate}</div>
            <br/>
          </section>
        })
      }
    </div>
  );
}

export default App;
