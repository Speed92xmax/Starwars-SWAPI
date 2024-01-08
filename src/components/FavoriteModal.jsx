import React, { useState, useContext } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Context } from "../store/contextProvider";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import placeHolderImg from "../assets/no_img_logo.png";
import "primeicons/primeicons.css";

const FavoriteModal = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");
  const { store, actions } = useContext(Context);

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

  return (
    <>
      <Button
        className="bg-yellow-custom text-black-alpha-90 h-3rem"
        label="Favoritos"
        size="small"
        badge={store.favorites.length}
        onClick={() => show("right")}
      />
      <Dialog
        header="Favoritos"
        visible={visible}
        position={position}
        onHide={() => setVisible(false)}
        className="w-full max-w-30rem h-30rem lg:mx-8 mx-3"
        draggable={true}
      >
        {store.favorites.length === 0 ? (
          <div className="flex flex-column text-center h-full justify-content-center gap-5">
            <h2 className="font-medium">Add some favorites</h2>
            <i className="pi pi-plus-circle text-7xl text-400"></i>
          </div>
        ) : (
          <div className="flex flex-column gap-3">
            {store.favorites.map((element) => {
              const imgUrl = `https://starwars-visualguide.com/assets/img/${
                element.type === "people" ? "characters" : element.type
              }/${element.uid}.jpg`;

              return (
                <Card key={element._id} className="bg-yellow-50">
                  <div className="flex flex-content align-items-center justify-content-between ">
                    <div className="flex gap-2">
                      <Avatar
                        image={imgUrl || placeHolderImg}
                        shape="circle"
                        size="xlarge"
                        className=""
                      />

                      <p className="text-lg font-semibold">
                        {element.properties.name}
                      </p>
                    </div>
                    <Button
                      icon="pi pi-trash"
                      rounded
                      text
                      severity="danger"
                      aria-label="Cancel"
                      className="border-transparent"
                      onClick={() => {
                        actions.removeFavorite(element._id);
                      }}
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </Dialog>
    </>
  );
};

export default FavoriteModal;
