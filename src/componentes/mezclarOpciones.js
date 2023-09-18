
export const mezclarOpciones = (preguntas) => {
    return preguntas.map((pregunta) => ({
      ...pregunta,
      opciones: Array.isArray(pregunta.opciones) ? mezclarArray(pregunta.opciones) : pregunta.opciones,
    }));
  };
  
  function mezclarArray(array) {
    const mezclarArray = [...array];
    for (let i = mezclarArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mezclarArray[i], mezclarArray[j]] = [mezclarArray[j], mezclarArray[i]];
    }
    return mezclarArray;
  }
  