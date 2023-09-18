import React from "react";
import { useTriviaStore } from "../context/useTriviaStore";
import { Resultados } from "./Resultados";
import "../App.css";

export const MostarRespuestas = () => {
  const {
    preguntas,
    pregIndex,
    respuestaSeleccionada,
    setRespuestaSeleccionada,
    setPreguntas,
    setPreguntasMostradas,
    fondoBoton,
    setFondoBoton,
    preguntasMostradas,
    actualizarRespuestas,
    mostrarResultados,
    setMostrarResultados,
  } = useTriviaStore();

  const opcionesMezcladas = preguntas[pregIndex]?.opciones || [];

  const esRespuestaCorrecta = (respuestaIndex) => {
    return (
      opcionesMezcladas[respuestaIndex] === preguntas[pregIndex]?.respuesta
    );
  };

  const handleRespuestaSeleccionada = (respuestaIndex) => {
    // Actualizar el estado de respuesta seleccionada
    setRespuestaSeleccionada(respuestaIndex);

    const nuevoFondoBoton = [...fondoBoton];

    // Desmarcar la respuesta anteriormente seleccionada si la hay
    if (respuestaSeleccionada !== null) {
      nuevoFondoBoton[respuestaSeleccionada] = "";
    }

    // Cambiar el fondo del botón según si la respuesta es correcta o incorrecta
    nuevoFondoBoton[respuestaIndex] = esRespuestaCorrecta(respuestaIndex)
      ? "respuesta-correcta"
      : "respuesta-incorrecta";

    // Actualizar el estado de fondoBoton
    setFondoBoton(nuevoFondoBoton);
  };

  const cambiarPregunta = () => {
    if (respuestaSeleccionada === null) return;

    // Realiza el conteo de respuestas solo al presionar "Siguiente Pregunta"
    const esCorrecta = esRespuestaCorrecta(respuestaSeleccionada);
    actualizarRespuestas(esCorrecta);

    const preguntaAleatoria = mostrarPreguntaAleatoria();
    if (preguntaAleatoria !== null) {
      setPreguntas(preguntaAleatoria);
      setPreguntasMostradas([...preguntasMostradas, preguntaAleatoria]);
      setRespuestaSeleccionada(null);
      setFondoBoton(Array(opcionesMezcladas.length).fill(""));
    } else {
      setMostrarResultados(true);
    }
  };

  const mostrarPreguntaAleatoria = () => {
    if (preguntasMostradas.length === preguntas.length) {
      return null;
    }

    let preguntaAleatoria;
    do {
      preguntaAleatoria = Math.floor(Math.random() * preguntas.length);
    } while (preguntasMostradas.includes(preguntaAleatoria));

    return preguntaAleatoria;
  };

  return (
    <div className="mostrar-opciones">
      {mostrarResultados ? (
        // Muestra el componente de resultados cuando mostrarResultados es true
        <Resultados />
      ) : (
        <>
          {opcionesMezcladas.map((res, id) => (
            <button
              onClick={() => handleRespuestaSeleccionada(id)}
              key={id}
              className={`respuesta-btn ${
                respuestaSeleccionada === id ? fondoBoton[id] : ""
              }`}
            >
              {res}
            </button>
          ))}
          <div className="cambiar-pregunta">
            {respuestaSeleccionada !== null && (
              <button onClick={cambiarPregunta}>
                {preguntasMostradas.length === preguntas.length
                  ? "Ver Resultados"
                  : "Siguiente Pregunta"}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};
