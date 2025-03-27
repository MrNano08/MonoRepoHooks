import './App.css'
import React, { useState, useMemo } from 'react';

function CalculoCostoso({ numero }) {
  const resultado = useMemo(() => {
    let suma = 0;
    for (let i = 0; i < 10000000; i++) {
      suma += numero;
    }
    return suma;
  }, [numero]);

  return <p>Resultado del cálculo: {resultado}</p>;
}

function EjemploUseMemo() {
  const [numero, setNumero] = useState(1);

  return (
    <div>
      <h2>Ejemplo useMemo</h2>
      <input
        type="number"
        value={numero}
        onChange={e => setNumero(Number(e.target.value))}
      />
      <CalculoCostoso numero={numero} />
    </div>
  );
}

export default EjemploUseMemo;
