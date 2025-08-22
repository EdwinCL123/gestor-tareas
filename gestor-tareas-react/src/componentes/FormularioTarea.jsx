import { useState } from "react";

function FormularioTarea({ onTareaCreada }) {
const [titulo, setTitulo] = useState("");
const [descripcion, setDescripcion] = useState("");

const manejarEnvio = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  const respuesta = await fetch("http://localhost:8000/api/tasks", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  credentials: "include", 
    body: JSON.stringify({ titulo, descripcion }),
  });

  const datos = await respuesta.json();

    if (respuesta.ok) {
      alert("Tarea creada con éxto");
    setTitulo("");
  setDescripcion("");
    onTareaCreada(datos);
  } else {
    console.error(datos);
    alert("Error al crear tarea");
  }
};

return (
  <form onSubmit={manejarEnvio} className="space-y-4">
    <input
      type="text"
      placeholder="Título"
      value={titulo}
      onChange={(e) => setTitulo(e.target.value)}
      className="w-full px-3 py-2 border rounded-md"
    />
    <textarea
      placeholder="Descripción"
      value={descripcion}
    onChange={(e) => setDescripcion(e.target.value)}
    className="w-full px-3 py-2 border rounded-md"
  ></textarea>
  <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Crear Tarea
      </button>
    </form>
  );
}

export default FormularioTarea;
