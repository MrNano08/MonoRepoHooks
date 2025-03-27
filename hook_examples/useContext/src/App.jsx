import './App.css'
import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const MiContexto = createContext();

// Creamos un proveedor del contexto que envolverá los componentes que necesitan acceder a él
const MiProveedor = ({ children }) => {
  const [valor, setValor] = useState("Hola Mundo");

  return (
    <MiContexto.Provider value={{ valor, setValor }}>
      {children}
    </MiContexto.Provider>
  );
};

// Componente que consume el contexto mediante useContext
const ComponenteHijo = () => {
  const { valor, setValor } = useContext(MiContexto);

  return (
    <div>
      <h1>{valor}</h1>
      <button onClick={() => setValor("¡Hola React Context!")}>
        Cambiar Valor
      </button>
    </div>
  );
};

const App = () => (
  <MiProveedor>
    <ComponenteHijo />
  </MiProveedor>
);

export default App;
