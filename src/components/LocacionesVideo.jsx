import React from 'react';

const LocacionesVideo = () => {
  const locations = [
    {
      title: "EL BANANO EN CC BUENA VISTA",
      video: "/img/VideoChurrasco.mp4", // Nombre de archivo simplificado
      description: "Saborea la perfección de nuestro churrasco, preparado con los mejores ingredientes",
      buttonText: "ORDENAR AHORA",
      buttonColor: "bg-red-600 hover:bg-red-700" // Clases de Tailwind para el botón
    },
    {
      title: "EL BANANO EN CC ARRECIFE",
      video: "/img/sede-rodadero.mp4", // Nombre de archivo simplificado
      description: "Disfruta del sabor único de nuestros platillos en un ambiente inolvidable",
      buttonText: "VISÍTANOS AHORA",
      buttonColor: "bg-blue-600 hover:bg-blue-700" // Clases de Tailwind para el botón
    }
  ];

  return (
    <section className="py-12 md:py-16 flex justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl w-full px-4">
        {locations.map((location, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row h-auto md:h-[400px] w-full shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl"
          >
            {/* Video */}
            <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
              <video
                src={location.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Contenido */}
            <div className={`flex flex-col w-full md:w-1/2 h-full text-center p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">
                    {location.title}
                  </h3>
                  <p className="font-light text-gray-600 text-sm md:text-base mb-6">
                    {location.description}
                  </p>
                </div>
                
                <button 
                  className={`${location.buttonColor} text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 w-full`}
                >
                  {location.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocacionesVideo;