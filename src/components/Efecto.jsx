import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const YourComponent = () => {
  return (
    <div className="relative w-full h-screen bg-gray-200 z-50">
      {/* Contenedor con la imagen y el efecto de aparición */}
      <div className="absolute w-full h-full top-5 left-0 flex items-center justify-center animate-fade-in-down">
        <img
          src="public/img/titulooooo-removebg-preview.png"
          alt=""
          className="animate-slide-down"
        />
      </div>
    </div>
  );
};

export default YourComponent;
