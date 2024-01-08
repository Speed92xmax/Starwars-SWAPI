import React from "react";
import "../styles/home.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import HeroImage from "../components/HeroImage";
import SliderComponent from "../components/CarouselComponent";
import DataCarouselComponent from "../components/DataCarouselComponent";


const Home = () => {

  return (
    <>
    <div className="container bg-image h-full w-auto ">
      <div className="container-fluid">
        <HeroImage />
        <SliderComponent />
        <DataCarouselComponent keySearch="people"/>
        <DataCarouselComponent keySearch="vehicles"/>
        <DataCarouselComponent keySearch="planets"/>
      </div>
    </div>
    
    </>
  );
};

export default Home;
