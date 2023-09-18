import { create } from "zustand";
import { preguntas } from "../preguntas";
import { mezclarOpciones } from "../componentes/mezclarOpciones";

export const useTriviaStore = create((set) => ({
  preguntas: mezclarOpciones(preguntas),
  pregIndex: -1,
  preguntasMostradas: [],
  respuestaSeleccionada: null,
  fondoBoton: Array(preguntas[0]?.opciones.length).fill(""),
  respuestasCorrectas: 0,
  respuestasIncorrectas: 0,
  mostrarResultados: false,
  resultados: null,
  mostrarBotonReinicio: false, 

  setPreguntas: (index) => set({ pregIndex: index }),
  setPreguntasMostradas: (indices) => set({ preguntasMostradas: indices }),
  setRespuestaSeleccionada: (respuestaIndex) => set({ respuestaSeleccionada: respuestaIndex }),
  setFondoBoton: (fondo) => set({ fondoBoton: fondo }),
  actualizarRespuestas: (esCorrecta) => {
    set((state) => ({
      respuestasCorrectas: esCorrecta
        ? state.respuestasCorrectas + 1
        : state.respuestasCorrectas,
      respuestasIncorrectas: esCorrecta
        ? state.respuestasIncorrectas
        : state.respuestasIncorrectas + 1,
    }));
  },
  setMostrarResultados: (mostrar) => set({ mostrarResultados: mostrar }),
  
  reiniciarJuego: () => {
    // Restablece todos los estados necesarios para reiniciar el juego
    set({
      pregIndex: -1,
      preguntasMostradas: [],
      respuestaSeleccionada: null,
      fondoBoton: Array(preguntas[0]?.opciones.length).fill(""),
      respuestasCorrectas: 0,
      respuestasIncorrectas: 0,
      mostrarResultados: false,
      mostrarBotonReinicio: false,
    });
  },
}));
