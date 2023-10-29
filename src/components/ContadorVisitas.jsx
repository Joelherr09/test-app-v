import React, { useState, useEffect } from "react";

const ContadorVisitas = ({ pageTitle }) => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    setVisits(visits + 1);
  }, []);

  return (
    <div>
      <h3>Número de visitas: {visits}</h3>
    </div>
  );
};

export default ContadorVisitas;