import './App.css'
import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(prev => prev + 1);
    }, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Ejemplo useEffect</h2>
      <p>Segundos transcurridos: {segundos}</p>
    </div>
  );
}

export default Temporizador;
