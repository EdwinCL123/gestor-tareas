function ListaTareas({ tareas, onCambiarEstado, onEliminar }) {
  return (
    <div>
      {tareas.map((t) => (
        <div key={t.id} className="border p-2 mb-2">
          <h3 className="font-bold">{t.titulo}</h3>
          <p>{t.descripcion}</p>
          <p className="text-sm text-gray-600">Estado: {t.estado}</p>

        <button
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
          onClick={() => onCambiarEstado(t.id, t.estado)}
        >
            {t.estado === "pendiente" ? "Completar" : "Reabrir"}
          </button>

          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => onEliminar(t.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaTareas;
