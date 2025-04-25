// src/components/Favoritos.jsx
import { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";

const Favoritos = () => {
  const { favoritos } = useContext(PeliculasContext);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Películas Favoritas</h2>
      {favoritos.map((pelicula) => (
        <div key={pelicula.id} className="bg-white p-4 rounded shadow mb-2">
          <h3 className="text-lg font-bold">{pelicula.titulo}</h3>
          <p>{pelicula.descripcion}</p>
          <p className="text-sm text-gray-500">{pelicula.genero}</p>
        </div>
      ))}
    </div>
  );
};

export default Favoritos;

