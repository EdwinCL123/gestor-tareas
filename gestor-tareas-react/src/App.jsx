import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Registro from "./paginas/Registro";
import Login from "./paginas/Login";
import PanelTareas from "./paginas/PanelTareas";

function RutaPrivada({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/tareas"element={<RutaPrivada><PanelTareas/></RutaPrivada> }/>
        <Route path="*" element={<Navigate to="/login" replace />} />
        
      </Routes>
    </Router>
  );
}

export default App;
