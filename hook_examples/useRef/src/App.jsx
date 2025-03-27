import './App.css'
import React, { useRef } from 'react';

function EnfocarInput() {
  const inputRef = useRef(null);

  const enfocar = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Ejemplo useRef</h2>
      <input ref={inputRef} type="text" placeholder="Escribe aquí..." />
      <button onClick={enfocar}>Enfocar Input</button>
    </div>
  );
}

export default EnfocarInput;
