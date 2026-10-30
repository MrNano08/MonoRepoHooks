# React Hooks — Ejemplos prácticos

Colección de **siete aplicaciones independientes** creadas para explorar el funcionamiento de los Hooks de React mediante ejemplos pequeños e interactivos. El proyecto se desarrolló como ejercicio académico de **Programación IV (2025)**.

Cada ejemplo utiliza React y Vite, y se puede ejecutar por separado. El objetivo es facilitar la lectura del código y observar el efecto de cada Hook en una interfaz sencilla; **no es una biblioteca de Hooks ni una aplicación de producción**.

## Hooks incluidos

| Hook | Ejemplo | Qué demuestra |
| --- | --- | --- |
| [`useState`](hook_examples/useState/src/App.jsx) | Contador | Actualización del estado y renderizado al incrementar un valor. |
| [`useEffect`](hook_examples/useEffect/src/App.jsx) | Temporizador | Efecto que crea un intervalo y lo limpia al desmontar el componente. |
| [`useRef`](hook_examples/useRef/src/App.jsx) | Foco de entrada | Acceso a un elemento del DOM sin utilizar el estado para guardar la referencia. |
| [`useContext`](hook_examples/useContext/src/App.jsx) | Mensaje compartido | Creación de un contexto, proveedor y componente consumidor. |
| [`useCallback`](hook_examples/useCallback/src/App.jsx) | Contador con callback | Memorización de la identidad de una función entre renderizados. |
| [`useMemo`](hook_examples/useMemo/src/App.jsx) | Cálculo numérico | Memorización de un resultado calculado mientras no cambie su dependencia. |
| [`useReducer`](hook_examples/useReducer/src/App.jsx) | Contador con acciones | Gestión del estado mediante un reductor y acciones de incrementar, decrementar y reiniciar. |

> **Nota didáctica:** el ejemplo de `useCallback` muestra cómo estabilizar una referencia de función, pero no incluye un componente hijo memorizado con el que demostrar una optimización de renderizados. El de `useMemo` usa deliberadamente un bucle de diez millones de iteraciones para hacer visible el cálculo; no constituye una medición de rendimiento ni un patrón recomendado para operaciones reales.

## Tecnologías

- **React 19** y **React DOM** para las interfaces.
- **JavaScript / JSX** para los componentes.
- **Vite 6** con `@vitejs/plugin-react-swc` para desarrollo y compilación.
- **ESLint 9** con reglas para React Hooks.
- **npm workspaces** para agrupar los siete ejemplos en un repositorio.

El archivo `package.json` de la raíz también declara `@s-ui/mono` y scripts asociados, aunque los ejemplos de Hooks no dependen de esas utilidades para ilustrar su comportamiento.

## Estructura del repositorio

```text
MonoRepoHooks/
├── package.json                 # Workspaces y scripts de la raíz
├── README.md
└── hook_examples/
    ├── useState/
    ├── useEffect/
    ├── useRef/
    ├── useContext/
    ├── useCallback/
    ├── useMemo/
    └── useReducer/
```

Cada subdirectorio de `hook_examples/` contiene un proyecto Vite propio, con `package.json`, `index.html`, `src/App.jsx`, estilos y configuración de ESLint.

## Requisitos

- Node.js y npm en versiones compatibles con las dependencias de Vite 6.
- Un navegador web moderno.

## Instalación y ejecución

Clona el repositorio e instala las dependencias desde la raíz:

```bash
git clone https://github.com/MrNano08/MonoRepoHooks.git
cd MonoRepoHooks
npm install
```

Ejecuta el Hook que deseas explorar, por ejemplo `useState`:

```bash
npm run dev --workspace=hook_examples/useState
```

Vite mostrará en la terminal la dirección local de la aplicación (habitualmente `http://localhost:5173`). Abre esa dirección en el navegador.

Para iniciar otro ejemplo, detén el servidor con `Ctrl+C` y cambia la ruta del workspace:

```bash
npm run dev --workspace=hook_examples/useEffect
npm run dev --workspace=hook_examples/useRef
npm run dev --workspace=hook_examples/useContext
npm run dev --workspace=hook_examples/useCallback
npm run dev --workspace=hook_examples/useMemo
npm run dev --workspace=hook_examples/useReducer
```

Cada comando inicia un ejemplo diferente. No necesitas abrir siete servidores a la vez.

## Compilación y análisis estático

Los proyectos incluyen scripts `build` y `lint`. Desde la raíz puedes invocarlos para todos los workspaces:

```bash
npm run build --workspaces
npm run lint --workspaces
```

**Estado de pruebas:** el repositorio no incluye pruebas automatizadas para los ejemplos. El comando `npm test` de la raíz es un marcador de posición y termina con error; no debe interpretarse como una suite de pruebas funcional.

## Cómo explorar los ejemplos

1. Ejecuta uno de los proyectos.
2. Abre `hook_examples/<nombre-del-hook>/src/App.jsx` y revisa su implementación.
3. Interactúa con la interfaz: incrementa un contador, enfoca el campo de texto, cambia un mensaje o modifica el valor del cálculo.
4. Observa qué cambia en el estado o en el efecto y cómo se actualiza la interfaz.
5. Compara los ejemplos y sus dependencias para identificar cuándo conviene utilizar cada Hook.

## Alcance y limitaciones

- Los siete proyectos son **demostraciones independientes**, no módulos integrados en una misma interfaz.
- No utilizan backend, base de datos, autenticación ni servicios externos.
- No incluyen pruebas automatizadas ni capturas de pantalla preparadas.
- Conservan recursos y títulos predeterminados del template de Vite en varias subcarpetas.
- El repositorio no incluye un archivo de bloqueo de dependencias (`package-lock.json`); las instalaciones posteriores podrían resolver versiones distintas dentro de los rangos declarados.
- Los ejemplos priorizan la claridad y la brevedad sobre las optimizaciones y patrones de una aplicación de producción.

## Contexto

Trabajo académico de **Programación IV**, realizado en 2025 para practicar conceptos básicos e intermedios de React. Se conserva como referencia de aprendizaje y como colección de ejemplos ejecutables.

**Autor:** [MrNano08](https://github.com/MrNano08)
