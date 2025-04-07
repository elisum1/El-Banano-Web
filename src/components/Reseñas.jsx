import React from 'react';

const Reseñas = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b amarillo to-yellow-600 py-16">
      {/* Efecto de fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-white/20"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-blue-600/10"></div>
      </div>

      {/* Iconos de redes sociales flotantes */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex justify-center space-x-8 md:space-x-12">
          {[1, 2, 3, 4, 5].map((item) => (
            <div 
              key={item}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-125"></div>
              <img
                src={`/img/iconoinsta${item}.png`}
                alt="Red social"
                className="w-12 h-12 md:w-16 md:h-16 object-contain relative z-10 transform transition-all duration-300 hover:scale-110 hover:rotate-6"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reseñas con estilo premium */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reseña Google */}
          <div 
            className="bg-white rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                <img src='/img/google_13170545.png' alt="Google" className="w-10 h-10" />
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-5xl font-gotham font-extrabold text-blue-900 mb-2">4.6</p>
              <p className="text-gray-600 font-gotham">4,350 reseñas</p>
              <button className="mt-6 text-blue-600 font-gotham font-bold hover:text-blue-800 transition-colors flex items-center justify-center mx-auto">
                Ver reseñas
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Reseña Facebook */}
          <div 
            className="bg-white rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                <img src='/img/facebook_5968764.png' alt="Facebook" className="w-10 h-10" />
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <svg className="w-6 h-6 text-gray-300 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p className="text-5xl font-gotham font-extrabold text-blue-900 mb-2">4.2</p>
              <p className="text-gray-600 font-gotham">1,054 reseñas</p>
              <button className="mt-6 text-blue-600 font-gotham font-bold hover:text-blue-800 transition-colors flex items-center justify-center mx-auto">
                Ver reseñas
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Reseña TripAdvisor */}
          <div 
            className="bg-white rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                <img src='/img/tripadvisor_2504944.png' alt="TripAdvisor" className="w-10 h-10" />
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <svg className="w-6 h-6 text-gray-300 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p className="text-5xl font-gotham font-extrabold text-blue-900 mb-2">4.0</p>
              <p className="text-gray-600 font-gotham">309 reseñas</p>
              <button className="mt-6 text-blue-600 font-gotham font-bold hover:text-blue-800 transition-colors flex items-center justify-center mx-auto">
                Ver reseñas
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comunidad digital */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-gotham font-extrabold text-white mb-6 px-4">
          ÚNETE A NUESTRA COMUNIDAD
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto px-4">
          Descubre las últimas novedades, promociones exclusivas y comparte tu experiencia con nosotros
        </p>
        
        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="#" 
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
          >
            <img src='/img/icons8-instagram.svg' alt="Instagram" className="w-8 h-8" />
          </a>
          <a 
            href="#" 
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
          >
            <img src='/img/facebook_5968764.png' alt="Facebook" className="w-8 h-8" />
          </a>
          <a 
            href="#" 
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
          >
            <img src='/img/icons8-twitterx.svg' alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reseñas;