import React, { useContext } from "react";
import { Button } from "primereact/button";
import logoImg from "../assets/starwars_logo.png";
import { Context } from "../store/contextProvider";
import FavoriteModal from "./FavoriteModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex flex-column justify-content-center align-items-center p-3 bg-black-custom sticky top-0 z-5">
      <div className="w-11 lg:w-9 flex justify-content-between align-item-center">
        <Link to="/">
          <img src={logoImg} alt="starwars-logo" className="h-3rem" />
        </Link>
        <FavoriteModal />
      </div>
    </div>
  );
};

export default Navbar;
