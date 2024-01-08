import React, { useContext } from "react";
import { Context } from "../store/contextProvider";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";
import "primeicons/primeicons.css";

const DataCardComponent = ({ element, keySearch }) => {
  const { actions } = useContext(Context);
  const { properties } = element;

  return (
    <div key={element._id} className="h-full">
      <Link to={`/details/${keySearch}/${element._id}/${element.uid}`}>
        <ImageComponent keySearch={keySearch} uid={element.uid}/>
      </Link>

      <div className="flex align-items-center bg-black-alpha-50 p-3 w-full justify-content-between">
        <div className="flex flex-column ">
          <h2 className="m-0 capitalize">{properties.name}</h2>
          <p className="m-0 ">{element.description}</p>
        </div>

        <Button
          icon="pi pi-heart"
          rounded
          severity="secondary"
          aria-label="Favorites"
          className="p-4 mx-2 bg-black-custom text-yellow-300"
          disabled={false}
          onClick={() => actions.setFavorite(element, keySearch)}
        />
      </div>
    </div>
  );
};

export default DataCardComponent;
