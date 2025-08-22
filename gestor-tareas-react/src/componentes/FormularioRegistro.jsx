import { useState } from "react";

function FormularioRegistro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  async function manejarEnvio(e) {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, clave }),
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        alert("Registro exitoso, ahora inicia sesión");
        window.location.href = "/login";
      } else {
        alert(datos.message || "Error en el registro");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      alert("No se pudo conectar con el servidor");
    }
  }

  return (
    <form onSubmit={manejarEnvio} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Correo</label>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Clave</label>
        <input
          type="password"
          placeholder="Clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Registrarse
      </button>
    </form>
  );
}

export default FormularioRegistro;
