import { useState, useEffect } from "react";
import FormularioTarea from "../componentes/FormularioTarea";
import ListaTareas from "../componentes/ListaTareas";

function PanelTareas() {
  const [tareas, setTareas] = useState([]);

  ////// Cargar tareas
  const cargarTareas = async () => {
    const token = localStorage.getItem("token");
    const respuesta = await fetch("http://localhost:8000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const datos = await respuesta.json();
    setTareas(datos);
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  /////nueva tarea
  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]); ///////////agrega sin recargr
  };

  //////7 Cambiar estados
  const cambiarEstado = async (id, estadoActual) => {
    const token = localStorage.getItem("token");

    //////////////////estados
    const nuevoEstado = estadoActual === "pendiente" ? "completada" : "pendiente";

    const respuesta = await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ estado: nuevoEstado }),
    });

    if (respuesta.ok) {
      const datos = await respuesta.json();
      setTareas((prev) =>
        prev.map((t) => (t.id === id ? datos.tarea : t))
      );
    } else {
      alert("Error al actualizar tarea");
    }
  };

  //////// Elimina tarea
  const eliminarTarea = async (id) => {
    const token = localStorage.getItem("token");


    
    const resp = await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (resp.ok) {
      setTareas((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Mis Tareas</h2>

      <FormularioTarea onTareaCreada={agregarTarea} />

      <ListaTareas
        tareas={tareas}
      onCambiarEstado={cambiarEstado}
      onEliminar={eliminarTarea}
      />
    </div>
  );
}

export default PanelTareas;
