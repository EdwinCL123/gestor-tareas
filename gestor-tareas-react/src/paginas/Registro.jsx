import FormularioRegistro from "../componentes/FormularioRegistro";
import { Link } from "react-router-dom";

function Registro() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Crear Cuenta
        </h2>
        <FormularioRegistro />
        <p className="text-center text-sm text-gray-600 mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;
