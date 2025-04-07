import React from "react";

const Galeria = () => {
  return (
    <section className="relative bg-white py-12 md:py-20 overflow-hidden">
      {/* Elementos decorativos más sutiles */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-red-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-yellow-100 rounded-full filter blur-3xl opacity-30"></div>
    
      <div className="container mx-auto px-4 sm:px-6">
        {/* Experiencia Banano - Versión compacta */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          {/* Imagen */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/img/YEI04584.jpg" 
              alt="Experiencia Banano"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-yellow-400/5"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg max-w-xs">
              <p className="font-bold text-blue-900 text-sm md:text-base">"Una tradición que se saborea en cada bocado"</p>
            </div>
          </div>
    
          {/* Descripción */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿POR QUÉ ELEGIR <span className="text-red-500">EL BANANO</span>?
            </h2>
            
            <div className="space-y-4 mb-6">
              {[
                {
                  title: "CARNES ASADAS MAESTRAS",
                  description: "Técnicas ancestrales que realzan el sabor de cortes premium seleccionados"
                },
                {
                  title: "TRADICIÓN ANTIOQUEÑA",
                  description: "Recetas auténticas transmitidas por generaciones"
                },
                {
                  title: "AMBIENTE ÚNICO",
                  description: "Donde cada visita se convierte en una experiencia memorable"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-yellow-400 p-1.5 rounded-full mr-3 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
        {/* Separador minimalista */}
        <div className="relative h-px bg-gray-200 mb-16 md:mb-20 mx-auto max-w-2xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 bg-blue-500 w-4 h-4 rounded-full flex items-center justify-center text-white">
            <span className="text-xs font-bold">✻</span>
          </div>
        </div>

        {/* Galería de platos - Versión compacta y optimizada */}
        <div className="mb-16 md:mb-24 bg-gray-900 p-6 sm:p-8 rounded-xl">
          {/* Título */}
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-3">
              <span className="text-yellow-500">GALERÍA</span> GASTRONÓMICA
            </h3>
            <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
              Descubre nuestros platos estrella en imágenes
            </p>
          </div>
          
          {/* Grid de imágenes optimizado */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
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
                className="relative aspect-square rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => {
                  document.getElementById('modalImage').src = imgSrc;
                  document.getElementById('imageModal').classList.remove('hidden');
                  document.body.style.overflow = 'hidden';
                }}
              >
                <img 
                  src={imgSrc}
                  alt={`Plato especial ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/img/placeholder-comida.jpg'
                  }}
                />
                
                {/* Overlay simplificado */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-yellow-400/90 p-2 rounded-full">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal para imagen en grande */}
        <div id="imageModal" className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative max-w-4xl w-full">
            <img 
              id="modalImage" 
              src="" 
              alt="Imagen ampliada" 
              className="max-h-[90vh] w-full object-contain rounded"
            />
            <button 
              onClick={() => {
                document.getElementById('imageModal').classList.add('hidden');
                document.body.style.overflow = 'auto';
              }}
              className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Separador final */}
        <div className="relative h-px bg-gray-200 mt-16 md:mt-20 mx-auto max-w-2xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 bg-red-500 w-4 h-4 rounded-full flex items-center justify-center text-white">
            <span className="text-xs font-bold">✻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;