import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:movieId" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
