import React, { useState } from 'react';

const Reseñas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      platform: 'Google',
      icon: '/img/google_13170545.png',
      rating: 4.6,
      reviews: '4,350 reseñas',
      stars: 5
    },
    {
      platform: 'Facebook',
      icon: '/img/facebook_5968764.png',
      rating: 4.2,
      reviews: '1,054 reseñas',
      stars: 4
    },
    {
      platform: 'TripAdvisor',
      icon: '/img/tripadvisor_2504944.png',
      rating: 4.0,
      reviews: '309 reseñas',
      stars: 4
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-blue-300 py-8 md:py-16 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-200 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Iconos de redes sociales */}
        <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="group relative">
              <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-125"></div>
              <img
                src={`/img/iconoinsta${item}.png`}
                alt="Red social"
                className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10 transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          LO QUE DICEN NUESTROS CLIENTES
        </h2>

        {/* Carrusel para móvil - Grid para desktop */}
        <div className="relative">
          {/* Versión móvil (carrusel) */}
          <div className="md:hidden">
            <div className="relative h-64 overflow-hidden">
              {reviews.map((item, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-transform duration-300 ${index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'}`}
                >
                  <ReviewCard item={item} />
                </div>
              ))}
            </div>
            
            {/* Controles del carrusel */}
            <div className="flex justify-center mt-4 space-x-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <div className="flex items-center space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Versión desktop (grid) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((item, index) => (
              <ReviewCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Comunidad digital */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            ÚNETE A NUESTRA COMUNIDAD
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm md:text-base">
            Descubre promociones exclusivas y comparte tu experiencia
          </p>
          
          <div className="flex justify-center gap-4">
            {[
              { icon: '/img/icons8-instagram.svg', name: 'Instagram' },
              { icon: '/img/facebook_5968764.png', name: 'Facebook' },
              { icon: '/img/icons8-twitterx.svg', name: 'Twitter' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50"
                aria-label={social.name}
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="w-6 h-6 object-contain" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de tarjeta de reseña reutilizable
const ReviewCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md h-full">
      <div className="flex justify-center mb-3">
        <div className="bg-blue-500 p-2 rounded-full">
          <img src={item.icon} alt={item.platform} className="w-6 h-6" />
        </div>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center mb-2 gap-1">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < item.stars ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        
        <p className="text-2xl font-bold text-gray-800 mb-1">{item.rating}</p>
        <p className="text-gray-600 text-xs mb-3">{item.reviews}</p>
        
        <button className="text-blue-500 hover:text-blue-700 text-xs font-medium transition-colors flex items-center justify-center mx-auto">
          Ver reseñas
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Reseñas;