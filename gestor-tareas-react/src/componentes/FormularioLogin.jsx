import { useState } from "react";

function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: email, clave: password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setMensaje("✅ Inicio de sesión exitoso, redirigiendo...");
        setTimeout(() => {
          window.location.href = "/tareas";
        }, 1500);
      } else {
        setMensaje("!Error! Credenciales incorrectas");
      }
    } catch (error) {
      setMensaje(" !!! Error en la conexión con el servidor");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Correo</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Ingresa tu correo"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Ingresa tu contraseña"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Ingresar
      </button>

      {mensaje && (
        <p className="mt-4 text-center font-medium text-sm text-gray-700">
          {mensaje}
        </p>
      )}
    </form>
  );
}

export default FormularioLogin;
