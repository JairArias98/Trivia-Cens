import React from "react";
import { useTriviaStore } from "../context/useTriviaStore";

export const MostrarPreguntas = () => {
  const { preguntas, pregIndex } = useTriviaStore();

  const pregunta =
    preguntas[pregIndex]?.pregunta || "No hay pregunta disponible";

  return (
    <div className="mostrar-preguntas">
      <h2>{pregunta}</h2>
    </div>
  );
};
