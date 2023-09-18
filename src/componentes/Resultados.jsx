import React from "react";
import { useTriviaStore } from "../context/useTriviaStore";

export const Resultados = () => {
  const {
    respuestasCorrectas,
    respuestasIncorrectas,
    preguntas,
    reiniciarJuego,
  } = useTriviaStore();

  const totalPreguntas = preguntas.length;

  //funcion para reiniciar el juego
  const handleReiniciarJuego = () => {
    reiniciarJuego();
  };

  return (
    <div className="resultados-container">
      <h2>Resultados</h2>
      <p>
        Respuestas correctas: {respuestasCorrectas} de {totalPreguntas}
      </p>
      <p>
        Respuestas incorrectas: {respuestasIncorrectas} de {totalPreguntas}
      </p>
      <h3>
        {respuestasCorrectas >= 10 ? (
          <span className="aprobado">Aprobaste</span>
        ) : (
          <span className="no-aprobado">No Aprobaste</span>
        )}
      </h3>

      <button onClick={handleReiniciarJuego}>Volver A Jugar</button>
    </div>
  );
};
