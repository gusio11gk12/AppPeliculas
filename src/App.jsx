// src/App.jsx
import { useState } from "react";
import { PeliculasProvider } from "./context/PeliculasContext";
import Formulario from "./components/Formulario";
import ListaPeliculas from "./components/ListaPeliculas";
import Favoritos from "./components/Favoritos";
import Filtros from "./components/Filtros";

const App = () => {
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [filtro, setFiltro] = useState("");

  return (
    <PeliculasProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Películas Gusix</h1>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Formulario />
        <button
          onClick={() => setMostrarFavoritos(!mostrarFavoritos)}
          className="bg-purple-600 text-white px-4 py-2 rounded mb-4"
        >
          {mostrarFavoritos ? "Mostrar Todas" : "Ver mis Favoritas"}
        </button>
        {mostrarFavoritos ? (
          <Favoritos />
        ) : (
          <ListaPeliculas filtro={filtro} />
        )}
      </div>
    </PeliculasProvider>
  );
};

export default App;


