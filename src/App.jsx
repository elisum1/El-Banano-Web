import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MenuPage from './pages/Menu';
import Login from './pages/login';
import Register from './pages/register';
import Nosotros from './pages/nosotros';
import Inicio from './pages/inicio';
import Loading from './components/Loading';  // Importa el componente Loading

// Crear un componente separado que use useLocation para manejar el loading
function MainContent() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();  // useLocation ahora está en el contexto correcto

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && <Loading />}  {/* Muestra el componente Loading cuando loading es true */}
      <Routes>
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Inicio />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent /> {/* Todo está dentro de Router, useLocation ahora funcionará */}
    </Router>
  );
}

export default App;
