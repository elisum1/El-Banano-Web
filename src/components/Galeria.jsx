import React from "react";

const Galeria = () =>{
    return (
        <section className="relative bg-gradient-to-b  py-24 overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600 rounded-full filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-5"></div>
        
          <div className="max-w-7xl mx-auto px-6">
            {/* Experiencia Banano */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
              {/* Imagen */}
              <div 
                className="relative h-[500px]  overflow-hidden shadow-2xl"
                data-aos="fade-right"
              >
                <img 
                  src="/img/YEI04584.jpg" 
                  alt="Experiencia Banano"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-yellow-400/10"></div>
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl max-w-xs">
                  <p className="font-gotham font-bold text-blue-900">"Una tradición que se saborea en cada bocado"</p>
                </div>
              </div>
        
              {/* Descripción */}
              <div data-aos="fade-left">
                <h2 className="text-4xl md:text-5xl font-gotham font-black text-blue-900 mb-8">
                  ¿POR QUÉ ELEGIR <span className="text-red-600">EL BANANO</span>?
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-yellow-400 p-2 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-gotham font-bold text-blue-900 mb-2">CARNES ASADAS MAESTRAS</h3>
                      <p className="text-gray-600">Técnicas ancestrales que realzan el sabor de cortes premium seleccionados</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-400 p-2 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-gotham font-bold text-blue-900 mb-2">TRADICIÓN ANTIOQUEÑA</h3>
                      <p className="text-gray-600">Recetas auténticas transmitidas por generaciones</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-400 p-2 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-gotham font-bold text-blue-900 mb-2">AMBIENTE ÚNICO</h3>
                      <p className="text-gray-600">Donde cada visita se convierte en una experiencia memorable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            {/* Línea decorativa */}
            <div className="relative h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-white">
                <span className="text-xs font-bold">✻</span>
              </div>
            </div>
        {/* Galería de platos - Versión mejorada con modal */}
        <div className="mb-28 bg-gradient-to-b from-gray-900 to-gray-800 p-8 md:p-12">
          {/* Título con efecto de iluminación */}
          <div className="text-center mb-16 relative">
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
            <h3 className="text-4xl md:text-5xl font-gotham font-black text-white mb-4">
              <span className="text-yellow-400">GALERÍA</span> GASTRONÓMICA
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Descubre nuestros platos estrella en imágenes
            </p>
          </div>
          
          {/* Grid de imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              '/img/YEI02214.jpg',
              '/img/YEI02152.jpg', 
              '/img/YEI02244.jpg',
              '/img/YEI04571.jpg',
              '/img/Pa no quedar picado, pide una picada de la casa! 🍽 con quien la compartirías.jpg',
              '/img/YEI02219.jpg',
              '/img/YEI02220.jpg',
              '/img/YEI02221.jpg'
            ].map((imgSrc, index) => (
              <div 
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden group shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 75}
                onClick={() => {
                  document.getElementById('modalImage').src = imgSrc;
                  document.getElementById('imageModal').classList.remove('hidden');
                  document.body.style.overflow = 'hidden';
                }}
              >
                {/* Imagen */}
                <img 
                  src={imgSrc}
                  alt={`Plato especial ${index + 1}`}
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/img/placeholder-comida.jpg'
                  }}
                />
                
                {/* Overlay interactivo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <h4 className="text-white font-gotham font-bold text-lg md:text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Plato {index + 1}
                  </h4>
                  <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    Ver detalles
                  </p>
                  
                  {/* Icono de lupa */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-yellow-400/90 p-3 rounded-full backdrop-blur-sm">
                      <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
          {/* Modal para imagen en grande */}
          <div id="imageModal" className="hidden fixed inset-0 z-50  flex items-center justify-center p-4 backdrop-blur-md bg-black/80 transition-opacity duration-300">
            <div className="relative max-w-6xl max-h-[90vh]">
              <img 
                id="modalImage" 
                src="" 
                alt="Imagen ampliada" 
                className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
              />
              <button 
                onClick={() => {
                  document.getElementById('imageModal').classList.add('hidden');
                  document.body.style.overflow = 'auto';
                }}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-200 focus:outline-none"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
            {/* Línea decorativa */}
            <div className="relative h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-red-600 w-6 h-6 rounded-full flex items-center justify-center text-white">
                <span className="text-xs font-bold">✻</span>
              </div>
            </div>
           
          </div>
        </section>
    );
};

export default Galeria;