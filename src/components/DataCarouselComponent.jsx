import React, { useContext } from "react";
import { Context } from "../store/contextProvider";
import DataCardComponent from "./DataCardComponent";
import { ProgressSpinner } from "primereact/progressspinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DataCarouselComponent = ({ keySearch }) => {
  const { store } = useContext(Context);
  const dataList = store[keySearch];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full p-5 flex flex-column">
        <div>
          <h2 className="text-xl m-0"> Starwars Main section </h2>
          <p className="text-md">
            Este es una previzualizacion del contenido de esta pagina{" "}
          </p>
        </div>

      {dataList.length === 0 || !dataList ? (
        <div className="flex flex-column w-full justify-content-center">
          <h2>Cargando datos</h2>
          <ProgressSpinner />
        </div>
      ) : (
        <Slider {...settings}>
          {dataList.map((element) => (
            <DataCardComponent element={element} key={element._id} keySearch={keySearch} />
          ))}
        </Slider>
      )}
      </div>
    </>
  );
};

export default DataCarouselComponent;
