import React, { useState } from 'react';
import './App.css'

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Ejemplo useState</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default Contador;