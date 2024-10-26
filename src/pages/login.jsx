import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import axios from 'axios'; // Importa axios para hacer peticiones HTTP
// Importa auth y los providers de Firebase
// import { auth, googleProvider, facebookProvider, githubProvider } from './firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/inicio');
    } catch (error) {
      console.error("Error con el login de Google", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate('/inicio');
    } catch (error) {
      console.error("Error con el login de Facebook", error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate('/inicio');
    } catch (error) {
      console.error("Error con el login de GitHub", error);
    }
  };

  const login = async (e) => {
    e.preventDefault(); // Evitar el envío del formulario por defecto
    setError(''); // Limpiar mensajes de error

    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password
      });
      const { token } = response.data; // Suponiendo que la respuesta incluye un token

      // Aquí puedes almacenar el token en localStorage o en el contexto de la app
      localStorage.setItem('token', token);
      navigate('/'); // Redirigir al usuario
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError('Credenciales incorrectas.'); // Manejar el error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 to-yellow-500">
      <div className="max-w-md w-full flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-2xl">
        <img src="/img/logo_el_banano-removebg-preview.png" alt="Logo" className="w-[50%] h-[40%] mb-6" />
        <h1 className="text-3xl font-bold font-gotham text-gray-800 mb-8">Iniciar Sesión</h1>

        {error && <p className="text-red-500">{error}</p>} {/* Mostrar mensajes de error */}

        <form className="w-full mb-6" onSubmit={login}>
          <div className="mb-4">
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              placeholder="Correo Electrónico" 
              required // Hacer que el campo sea requerido
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              placeholder="Contraseña" 
              required // Hacer que el campo sea requerido
            />
          </div>
          <button 
            type="submit" 
            className="bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-yellow-600 transition-all duration-300">
              Iniciar Sesión
          </button>
        </form>

        <div className="flex space-x-4 w-full mb-6">
          <a 
            href="/register" 
            className="text-center bg-yellow-400 text-white font-bold py-3 px-4 rounded-lg w-1/2 hover:bg-yellow-300 transition-all duration-300">
            Registrarse
          </a>
          <a 
            href="/inicio" 
            className="text-center bg-gray-400 text-white font-bold py-3 px-4 rounded-lg w-1/2 hover:bg-gray-300 transition-all duration-300">
            Volver al Inicio
          </a>
        </div>

        <div className="flex flex-col space-y-4 w-full">
          <button 
            onClick={handleGoogleLogin} 
            className="flex items-center justify-center bg-red-500 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-red-600 transition-all duration-300">
              <FaGoogle className="mr-2" /> Iniciar sesión con Google
          </button>
          <button 
            onClick={handleFacebookLogin} 
            className="flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-blue-700 transition-all duration-300">
              <FaFacebook className="mr-2" /> Iniciar sesión con Facebook
          </button>
          <button 
            onClick={handleGithubLogin} 
            className="flex items-center justify-center bg-gray-800 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-gray-900 transition-all duration-300">
              <FaTwitter className="mr-2" /> Iniciar sesión con X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
