import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/contextProvider";
import { Link, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import placeHolderImg from "../assets/no_img_logo.png";
import DataCarouselComponent from "../components/DataCarouselComponent";

const Details = () => {
  const [data, setData] = useState([]);
  const { keySearch, id, uid } = useParams();
  const { actions } = useContext(Context);

  const imgUrl = `https://starwars-visualguide.com/assets/img/${
    keySearch === "people" ? "characters" : keySearch
  }/${uid}.jpg`;

  useEffect(() => {
    setData(actions.getFilter(keySearch, id));
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="container bg-image h-full w-auto min-h-screen	">
      <div className="container-fluid min-h-screen">
        <div className="grid p-4 lg:p-8 lg:mx-8 justify-content-center gap-2">
          <img
            src={imgUrl}
            className="border-round-md w-full max-w-25rem max-h-25rem img-fit "
            alt="..."
            onError={(e) => {
              e.target.src = `${placeHolderImg}`;
            }}
          />

          <div className="col-12 lg:col lg:max-h-25rem lg:max-w-full  max-w-25rem bg-white-alpha-10 border-round-md p-4 lg:p-6">
            {data.length === 0 ? (
              <div className="flex justify-content center align-items center">
                <h3> Getting Data </h3>
              </div>
            ) : (
              <div className="flex flex-column justify-content-between lg:h-full h-17rem">
                <div>
                  <h2 className="mb-0">{data.properties.name}</h2>
                </div>
                <div>
                  <p> {data.description}</p>
                  <ul className="p-0">
                    <li className="list-none">
                      <span className="font-semibold">Created : </span>{" "}
                      {data.properties.created}
                    </li>
                    <li className="list-none">
                      <span className="font-semibold">Edited : </span>{" "}
                      {data.properties.edited}
                    </li>
                  </ul>
                </div>
                <div>
                  <Button
                    className="bg-yellow-custom text-black-alpha-90 h-3rem"
                    label="Agregar a favoritos"
                    size="small"
                    onClick={() => actions.setFavorite(data, keySearch)}
                  />
                </div>
              </div>
            )}
          </div>

          <DataCarouselComponent keySearch={keySearch} />

          <Link to="/">
            <Button
              className="bg-black-custom text-yellow-alpha-90 h-3rem w-10rem"
              label="Volver"
              size="small"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
