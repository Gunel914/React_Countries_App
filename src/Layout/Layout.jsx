import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FilterButtons from "../Components/FilterButtons";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="header1">
        <div className="header2">
          <FilterButtons />
        </div>
      </div>

      <main className="mainn" >
        <Outlet className="cards" />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;