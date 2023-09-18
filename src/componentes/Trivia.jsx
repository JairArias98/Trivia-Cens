
import "../App.css";
import React, { useEffect } from "react";
import { Imagenes } from "./Imagenes";
import { ContadorPreguntas } from "./ContadorPreguntas";
import { MostrarPreguntas } from "./MostrarPreguntas";
import { MostarRespuestas } from "./MostarRespuestas";
import { useTriviaStore } from "../context/useTriviaStore";
import { Resultados } from "./Resultados";

export const Trivia = () => {
  const {
    preguntas,
    pregIndex,
    setPreguntas,
    preguntasMostradas,
    setPreguntasMostradas,
    mostrarResultados,
  } = useTriviaStore();

  useEffect(() => {
    const mostrarPreguntaAleatoria = () => {
      if (preguntasMostradas.length === preguntas.length) {
        // Todas las preguntas se han mostrado
        return null;
      }

      let preguntaAleatoria;
      do {
        preguntaAleatoria = Math.floor(Math.random() * preguntas.length);
      } while (preguntasMostradas.includes(preguntaAleatoria));

      return preguntaAleatoria;
    };

    if (pregIndex === -1) {
      const preguntaAleatoria = mostrarPreguntaAleatoria();
      if (preguntaAleatoria !== null) {
        setPreguntas(preguntaAleatoria);
        setPreguntasMostradas([...preguntasMostradas, preguntaAleatoria]);
      }
    }
  }, [
    pregIndex,
    setPreguntas,
    preguntas,
    preguntasMostradas,
    setPreguntasMostradas,
  ]);

  return (
    <div className="trivia">
      {mostrarResultados ? (
        <div className="mostrar-Resultados">
          <Resultados />
        </div>
      ) : (
        <>
          <ContadorPreguntas />
          <Imagenes />
          <MostrarPreguntas />
          <MostarRespuestas />
        </>
      )}
    </div>
  );
};
