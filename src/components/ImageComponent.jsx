import React from "react";
import placeHolderImg from "../assets/no_img_logo.png";

const ImageComponent = ({ keySearch, uid }) => {
  const imgUrl = `https://starwars-visualguide.com/assets/img/${
    keySearch === "people" ? "characters" : keySearch
  }/${uid}.jpg`;

  return (
    <img
      src={imgUrl}
      className="border-round-top-md w-full h-auto"
      alt="..."
      onError={(e) => {
        e.target.src = `${placeHolderImg}`;
      }}
    />
  );
};

export default ImageComponent;
