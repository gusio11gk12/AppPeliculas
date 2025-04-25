// src/components/ListaPeliculas.jsx
import { useContext, useState } from "react";
import { PeliculasContext } from "../context/PeliculasContext";

const ListaPeliculas = ({ filtro }) => {
  const {
    peliculas,
    eliminarPelicula,
    toggleFavorito,
    setPeliculaEnEdicion,
  } = useContext(PeliculasContext);

  const filtradas = peliculas.filter((peli) => {
    return (
      peli.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      peli.genero.toLowerCase().includes(filtro.toLowerCase())
    );
  });

  return (
    <div>
      {filtradas.map((pelicula) => (
        <div key={pelicula.id} className="bg-white p-4 rounded shadow mb-2">
          <h3 className="text-lg font-bold">{pelicula.titulo}</h3>
          <p>{pelicula.descripcion}</p>
          <p className="text-sm text-gray-500">{pelicula.genero}</p>
          <div className="mt-2">
            <button
              className="text-green-600 font-semibold mr-2"
              onClick={() => toggleFavorito(pelicula.id)}
            >
              {pelicula.favorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
            </button>
            <button
              className="text-yellow-600 font-semibold mr-2"
              onClick={() => setPeliculaEnEdicion(pelicula)}
            >
              Editar
            </button>
            <button
              className="text-red-600 font-semibold"
              onClick={() => eliminarPelicula(pelicula.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaPeliculas;