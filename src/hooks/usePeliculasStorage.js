// src/hooks/usePeliculasStorage.js

import { useState, useEffect } from 'react';

const usePeliculasStorage = () => {
  const [peliculas, setPeliculas] = useState([]);

  // Cargar las peliculas desde localStorage cuando la app se inicia
  useEffect(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
    setPeliculas(peliculasGuardadas);
  }, []);

  // Guardar las peliculas en localStorage cuando el estado cambia
  useEffect(() => {
    if (peliculas.length > 0) {
      localStorage.setItem('peliculas', JSON.stringify(peliculas));
    }
  }, [peliculas]);

  // Agregar una nueva película
  const agregarPelicula = (nuevaPelicula) => {
    setPeliculas([...peliculas, nuevaPelicula]);
  };

  // Editar una película
  const editarPelicula = (id, peliculaActualizada) => {
    const peliculasActualizadas = peliculas.map((pelicula) =>
      pelicula.id === id ? peliculaActualizada : pelicula
    );
    setPeliculas(peliculasActualizadas);
  };

  // Eliminar una película
  const eliminarPelicula = (id) => {
    const peliculasRestantes = peliculas.filter((pelicula) => pelicula.id !== id);
    setPeliculas(peliculasRestantes);
  };

  // Marcar o desmarcar como favorita
  const toggleFavorito = (id) => {
    const peliculasActualizadas = peliculas.map((pelicula) =>
      pelicula.id === id ? { ...pelicula, favorita: !pelicula.favorita } : pelicula
    );
    setPeliculas(peliculasActualizadas);
  };

  return {
    peliculas,
    agregarPelicula,
    editarPelicula,
    eliminarPelicula,
    toggleFavorito
  };
};

export default usePeliculasStorage;
