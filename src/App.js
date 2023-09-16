import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} exact />
          <Route path="/Shop" element = {<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}