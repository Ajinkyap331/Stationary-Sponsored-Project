import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { AllProducts } from './Pages/AllProducts';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all" element={<AllProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
