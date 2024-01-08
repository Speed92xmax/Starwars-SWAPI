import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ContextProvider, { Context } from "./store/contextProvider";
import { PrimeReactProvider } from "primereact/api";
import Navbar from "./components/Navbar.jsx";
import Details from "./views/Details.jsx";
const Layout = () => {
  return (
    <PrimeReactProvider>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:keySearch/:id/:uid" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </PrimeReactProvider>
  );
};

export default Layout;
