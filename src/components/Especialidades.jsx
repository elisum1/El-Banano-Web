import React from "react";
import { useNavigate } from "react-router-dom";

const Especialidades = () => {
  const navigate = useNavigate();

  const handleNavigation = (component) => {
    navigate('/RestaurantLandingPage', { 
      state: { 
        scrollTo: 'menuDigital',
        initialSection: component 
      } 
    });
  };

  return (
    <section className="relative bg-gradient-to-b from-yellow-50 to-white py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-gotham font-black text-blue-900 mb-6">
            DESCUBRE NUESTRAS <span className="text-red-600">ESPECIALIDADES</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tres tradiciones culinarias que definen nuestra esencia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-28">
          {[
            {
              title: "El Completo",
              description: "Cortes premium madurados y preparados al punto perfecto",
              img: "/img/YEI04584.jpg",
              color: "blue",
              target: "menuDigital" // Cambiar si hay un componente específico para "El Completo"
            },
            {
              title: "Los Antioqueños",
              description: "Lo mejor de nuestra tradición paisa en cada bocado",
              img: "/img/YEI04659.jpg",
              color: "red",
              target: "Antioquenos" // Componente específico para Antioqueños
            },
            {
              title: "Mazorcas y Salchipapas",
              description: "Nuestra firma insignia, ahora mejor que nunca",
              img: "/img/DSC06518.jpg",
              color: "yellow",
              target: "MazorcaSalchipapa" // Componente específico para Mazorcas
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative h-80 md:h-[60vh] overflow-hidden shadow-lg md:shadow-2xl rounded-lg md:rounded-none"
            >
              <div className={`absolute inset-0 ${
                item.color === 'red' ? 'bg-gradient-to-t from-red-900/80 via-red-900/30 to-transparent' :
                item.color === 'yellow' ? 'bg-gradient-to-t from-yellow-900/80 via-yellow-900/30 to-transparent' :
                'bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent'
              } z-10`}></div>
              
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 z-20 p-6 md:p-8 pb-2">
                <h3 
                  className="text-4xl md:text-7xl font-allura font-normal mb-2 md:mb-3 leading-none"
                  style={{
                    textShadow: `
                      2px 2px 0 white,
                      -2px -2px 0 white,
                      2px -2px 0 white,
                      -2px 2px 0 white
                    `,
                    color: item.color === 'red' ? '#ef4444' : 
                          item.color === 'yellow' ? '#eab308' : 
                          '#3b82f6'
                  }}
                >
                  {item.title}
                </h3>
                
                <p className="text-white/90 mb-4 md:mb-5 text-sm md:text-base">{item.description}</p>
                <button 
                  onClick={() => handleNavigation(item.target)}
                  className={`${
                    item.color === 'red' ? 'bg-red-500 hover:bg-red-600' :
                    item.color === 'yellow' ? 'bg-yellow-500 hover:bg-yellow-600' :
                    'bg-blue-500 hover:bg-blue-600'
                  } text-white px-4 md:px-6 py-2 rounded-lg font-gotham font-bold transition-all text-sm md:text-base`}
                >
                  Ver menú
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;