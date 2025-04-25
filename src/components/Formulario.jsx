// src/components/Formulario.jsx
import { useContext, useEffect, useState } from "react";
import { PeliculasContext } from "../context/PeliculasContext";

const Formulario = () => {
  const {
    agregarPelicula,
    editarPelicula,
    peliculaEnEdicion,
  } = useContext(PeliculasContext);

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");

  useEffect(() => {
    if (peliculaEnEdicion) {
      setTitulo(peliculaEnEdicion.titulo);
      setDescripcion(peliculaEnEdicion.descripcion);
      setGenero(peliculaEnEdicion.genero);
    }
  }, [peliculaEnEdicion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (peliculaEnEdicion) {
      editarPelicula({
        ...peliculaEnEdicion,
        titulo,
        descripcion,
        genero,
      });
    } else {
      agregarPelicula({
        id: Date.now(),
        titulo,
        descripcion,
        genero,
        favorito: false,
      });
    }
    setTitulo("");
    setDescripcion("");
    setGenero("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">
        {peliculaEnEdicion ? "Editar Película" : "Agregar Película"}
      </h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Género"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {peliculaEnEdicion ? "Guardar Cambios" : "Agregar"}
      </button>
    </form>
  );
};

export default Formulario;