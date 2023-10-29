import React, { useState, useEffect } from "react";
import axios from "axios";

const ContadorVisitas = ({ pageTitle }) => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    axios.get("/api/visits").then((response) => {
      setVisits(response.data.visits);
    });
  }, []);

  return (
    <div>
      <h1>Número de visitas: {visits}</h1>
    </div>
  );
};

export default ContadorVisitas;