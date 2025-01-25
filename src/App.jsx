import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/Home";
import FolmulirPage from "./pages/folmulir";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<FolmulirPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
