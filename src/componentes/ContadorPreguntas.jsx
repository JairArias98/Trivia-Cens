import React from "react";
import { useTriviaStore } from "../context/useTriviaStore";

export const ContadorPreguntas = () => {
  const { preguntas, preguntasMostradas } = useTriviaStore();

  const preguntasRespondidas = preguntasMostradas.length;
  const totalPreguntas = preguntas.length;

  return (
    <div className="contador-preguntas">
      <p>
        Pregunta {preguntasRespondidas} de {totalPreguntas}
      </p>
    </div>
  );
};
