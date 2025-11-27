import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import CountryDetails from "./Pages/CountryDetails";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="region/:regionName" element={<Home />} />
        <Route path="country/:code" element={<CountryDetails />} />
      </Route>
    </Routes>
  );
}

export default App;