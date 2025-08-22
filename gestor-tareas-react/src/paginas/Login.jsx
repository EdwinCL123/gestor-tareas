import { Link } from "react-router-dom";
import FormularioLogin from "../componentes/FormularioLogin";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>

        <FormularioLogin />

        <p className="mt-6 text-center text-gray-600">
          ¿No tienes cuenta?{" "}
          <Link
            to="/register"
            className="text-indigo-600 hover:underline font-semibold"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
