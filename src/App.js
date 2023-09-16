import './App.css';
import { Route, Routes, Link, BrowserRouter, Switch, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} exact />
        <Route path="/Shop" element = {<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}