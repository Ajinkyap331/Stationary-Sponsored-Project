import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {

    axios.get("http://localhost:9000/").then(res => console.log(res.data))

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
    axios.post('http://localhost:9000/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div>{code}</div>
      <input></input>
      <button onClick={() => handleClick()} >send</button>
    </div>
  );
}

export default App;
