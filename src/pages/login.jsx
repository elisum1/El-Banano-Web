import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// Importa los íconos desde react-icons
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
// import { auth, googleProvider, facebookProvider, githubProvider } from './firebase';

const Login = () => {
  const navigate = useNavigate();

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 to-yellow-500">
      {/* Contenedor principal del formulario */}
      <div className="max-w-md w-full flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-2xl">
        <img src="/img/logo_el_banano-removebg-preview.png" alt="Logo" className="w-[50%] h-[40%] mb-6" />
        <h1 className="text-3xl font-bold font-gotham text-gray-800 mb-8">Iniciar Sesión</h1>

        {/* Formulario de login */}
        <form className="w-full mb-6">
          <div className="mb-4">
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              placeholder="Correo Electrónico" 
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              placeholder="Contraseña" 
            />
          </div>
          <button 
            type="submit" 
            className="bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-yellow-600 transition-all duration-300">
              Iniciar Sesión
          </button>
        </form>

        {/* Botones adicionales */}
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

        {/* Login con Google, Facebook y GitHub con íconos */}
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
