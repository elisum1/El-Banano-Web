import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Especialidades = () => {
  const navigate = useNavigate();
  const [clickedButton, setClickedButton] = useState(null);

  const handleNavigation = (component) => {
    setClickedButton(component);
    setTimeout(() => {
      navigate('/RestaurantLandingPage', { 
        state: { 
          scrollTo: 'menuDigital',
          initialSection: component 
        } 
      });
    }, 300); // Pequeña animación de feedback
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/573001234567?text=Hola,%20quiero%20reservar%20una%20mesa", "_blank");
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Especialidades | El Banano - Restaurante Gourmet</title>
        <meta 
          name="description" 
          content="Descubre nuestras especialidades culinarias: El Completo, Los Antioqueños y Mazorcas. Reserva ahora en el mejor restaurante de la ciudad." 
        />
        <meta name="keywords" content="restaurante, comida gourmet, especialidades, menú, reservas" />
      </Helmet>

      <section className="relative bg-gradient-to-b from-yellow-50 via-yellow-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header section */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl md:text-5xl font-gotham font-black text-blue-900 mb-6">
              DESCUBRE NUESTRAS <span className="text-red-600">ESPECIALIDADES</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tres tradiciones culinarias que definen nuestra esencia
            </p>
            
            {/* WhatsApp Button - Mobile only */}
            <div className="md:hidden mt-6">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-all flex items-center mx-auto"
              >
                <span>Reservar por WhatsApp</span>
              </button>
            </div>
          </div>
          
          {/* Specialties grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-28">
            {[
              {
                title: "El Completo",
                description: "Cortes premium madurados y preparados al punto perfecto",
                img: "/img/YEI04584.jpg",
                color: "blue",
                target: "menuDigital",
                testimonial: "El mejor corte de carne que he probado en la ciudad. ¡Increíble! - Carlos M."
              },
              {
                title: "Los Antioqueños",
                description: "Lo mejor de nuestra tradición paisa en cada bocado",
                img: "/img/YEI04659.jpg",
                color: "red",
                target: "Antioquenos",
                testimonial: "Auténtica comida paisa como la de mi abuela. 100% recomendado - Laura P."
              },
              {
                title: "Mazorcas y Salchipapas",
                description: "Nuestra firma insignia, ahora mejor que nunca",
                img: "/img/DSC06518.jpg",
                color: "yellow",
                target: "MazorcaSalchipapa",
                testimonial: "Las mazorcas son adictivas, siempre que vengo pido doble porción - Andrés G."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative h-72 md:h-[60vh] overflow-hidden shadow-lg md:shadow-2xl rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:z-20"
              >
                {/* Image overlay */}
                <div className={`absolute inset-0 ${
                  item.color === 'red' ? 'bg-gradient-to-t from-red-900/80 via-red-900/30 to-transparent group-hover:from-red-900/90' :
                  item.color === 'yellow' ? 'bg-gradient-to-t from-yellow-900/80 via-yellow-900/30 to-transparent group-hover:from-yellow-900/90' :
                  'bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent group-hover:from-blue-900/90'
                } z-10 transition-all duration-500`}></div>
                
                {/* Specialty image */}
                <img 
                  src={item.img} 
                  alt={`${item.title} - Especialidad de El Banano`}
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 z-20 p-4 md:p-6 lg:p-8 w-full">
                  <h2 
                    className="text-3xl md:text-5xl lg:text-7xl font-allura font-normal mb-2 leading-none"
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
                  </h2>
                  
                  <p className="text-white/90 mb-3 text-sm md:text-base">{item.description}</p>
                  
                  {/* Testimonial */}
                  <div className="bg-black/30 backdrop-blur-sm rounded p-2 mb-3">
                    <p className="text-white italic text-xs md:text-sm">"{item.testimonial}"</p>
                  </div>
                  
                  <button 
                    onClick={() => handleNavigation(item.target)}
                    className={`${
                      item.color === 'red' ? 'bg-red-500 hover:bg-red-600' :
                      item.color === 'yellow' ? 'bg-yellow-500 hover:bg-yellow-600' :
                      'bg-blue-500 hover:bg-blue-600'
                    } text-white px-4 py-2 rounded-lg font-gotham font-bold transition-all text-sm md:text-base ${
                      clickedButton === item.target ? 'animate-pulse' : ''
                    }`}
                  >
                    Ver menú
                  </button>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Especialidades;