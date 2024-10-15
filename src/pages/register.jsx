import React from 'react';

const Register = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-yellow-400">
      {/* Columna izquierda - Formulario */}
      <div className=" max-w-sm flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg">
        <img src="public/img/logo_el_banano-removebg-preview.png" alt="Logo" className="w-[50%] h-[40%] mb-6" /> {/* Etiqueta img */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Registro</h1>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <input 
              type="text" 
              id="name" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Nombre" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Correo Electrónico" 
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Contraseña" 
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 text-white font-bold py-3 px-4 rounded w-full hover:bg-blue-700 transition mb-4">
              Registrar
          </button>
        </form>

        {/* Botones adicionales debajo del formulario */}
        <div className="flex space-x-4 w-full max-w-sm">
          <a 
            href="/login" 
            className="text-center bg-yellow-400 text-white font-bold py-3 px-4 rounded w-1/2 hover:bg-yellow-300 transition">
            Iniciar Sesión
          </a>
          <a 
            href="/inicio" 
            className="text-center bg-gray-400 text-white font-bold py-3 px-4 rounded w-1/2 hover:bg-gray-300 transition">
            Volver al Inicio
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default Register;
