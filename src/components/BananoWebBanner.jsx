import React from 'react';

const BananoWebBanner = () => {
  return (
    <div className="max-w-7xl mx-auto bg-yellow-400 p-5 md:p-14 text-white relative overflow-hidden rounded-lg md:rounded-none mb-16">
      <div className="relative z-10">
        <div className="mb-8 md:mb-16">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
            <h2 className="mx-4 md:mx-8 text-4xl md:text-8xl font-gotham font-extrabold text-center uppercase tracking-tight text-blue-900">
              DESDE 1986
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>
        
        <h3 className="text-2xl md:text-4xl lg:text-6xl font-gotham font-extrabold uppercase mb-6 tracking-wide text-center">
          ¡EL <span className="text-blue-900">BANANO WEB</span> HA VUELTO!
        </h3>
        <p className="text-base md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-center">
          Redescubre nuestro plato insignia con una presentación renovada y sabores que honran nuestra tradición
        </p>
        
        <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-8 mt-12">
          <div className="relative h-40 md:h-full w-full overflow-hidden rounded-lg shadow-xl">
            <img 
              src="/img/caption.jpg" 
              alt="Plato Banano Web"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <div className="relative h-40 md:h-full w-full overflow-hidden rounded-lg shadow-xl">
            <img 
              src="/img/elbananoarrecife.jpeg" 
              alt="Presentación Banano Web"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BananoWebBanner;