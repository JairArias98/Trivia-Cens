import React from "react";
import { useTriviaStore } from "../context/useTriviaStore";

export const Imagenes = () => {
  const { preguntas, pregIndex } = useTriviaStore();

  const imagen = preguntas[pregIndex]?.imagen || "";

  return (
    <div className="container-img">
      <img
        src={imagen}
        alt="Imagen alusiva a la pregunta"
        className="img-juego"
      />
    </div>
  );
};
