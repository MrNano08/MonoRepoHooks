import './App.css'
import React, { useState, useCallback } from 'react';

function ContadorConCallback() {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Ejemplo useCallback</h2>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
}

export default ContadorConCallback;
