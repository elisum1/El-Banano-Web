import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const data = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      console.log(result); // Manejar la respuesta del servidor
      navigate('/login');

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-yellow-400">
      <div className="max-w-sm flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg">
        <img src="/img/logo_el_banano-removebg-preview.png" alt="Logo" className="w-[50%] h-[40%] mb-6" />
        <h1 className="text-3xl font-bold font-gotham text-gray-800 mb-6">Registro</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              id="name" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Actualiza el estado
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Nombre" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Correo Electrónico" 
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
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
