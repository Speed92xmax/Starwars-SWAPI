import React from "react";

const HeroImage = () => {
  return (
    <div className="bg-image-hero p-2 lg:p-5 lg:h-30rem md:h-20rem border-round-md">
      <div className="w-full h-full bg-black-alpha-50 p-3 lg:p-6  border-round-md	">
        <h1>Star wars SWAPI</h1>
        <p className="lg:text-xl sm:text-sm">
          Una aplicacion para mostrar algunos datos interesantes sobre el
          universo de star wars{" "}
        </p>
        <p className="lg:text-xl sm:text-sm">
          Puedes visitar una lista de planetas, vehiculos y personajes con una
          vista detalle de cada uno de ellos.
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
