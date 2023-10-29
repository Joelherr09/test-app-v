// counter.js

import { fetch } from "react-dom";

// Realiza una solicitud GET a la API en la ruta `/api/visits`
const getVisits = async () => {
  const response = await fetch("/api/visits");
  const data = await response.json();
  return data.visits;
};

// Muestra el número de visitas en la página web
const renderCounter = () => {
  const visits = await getVisits();
  return (
    <div>
      <h1>Número de visitas: {visits}</h1>
    </div>
  );
};

// Exporta la función
export { renderCounter };