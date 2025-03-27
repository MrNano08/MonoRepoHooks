import './App.css'
import React, { useReducer } from 'react';

const estadoInicial = { contador: 0 };

function reductor(estado, accion) {
  switch (accion.type) {
    case 'incrementar':
      return { contador: estado.contador + 1 };
    case 'decrementar':
      return { contador: estado.contador - 1 };
      case 'reiniciar':
        return { contador: 0 };
    default:
      return estado;
  }
}

function ContadorConReducer() {
  const [estado, dispatch] = useReducer(reductor, estadoInicial);

  return (
    <div>
      <h2>Ejemplo useReducer</h2>
      <p>Contador: {estado.contador}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>-</button>
      <button onClick={() => dispatch({ type: 'reiniciar' })}>Reset</button>
    </div>
  );
}

export default ContadorConReducer;
