import React from "react";

const Visitanos = () => {
  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-200 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full filter blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl  text-blue-800 mb-2 font-extrabold">
            VISÍTANOS
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        {/* Grid responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Mapa */}
          <div className="relative h-64 sm:h-80 w-full rounded-lg shadow-md overflow-hidden border-2 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-74.0781706847344!3d4.710442396641384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3e2e3e3e3e%3A0x1e3f9a3e2e3e3e3e!2sFogo%20de%20Chao!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          {/* Información */}
          <div className="space-y-4 md:space-y-6">
            {/* Horarios */}
            <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-2 border-red-500">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg 
                  className="w-5 h-5 mr-2 text-yellow-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                HORARIOS
              </h3>
              <div className="space-y-2">
                {[
                  { day: "Lunes - Viernes", time: "11:00 AM - 10:00 PM" },
                  { day: "Sábado", time: "10:00 AM - 11:00 PM" },
                  { day: "Domingo", time: "10:00 AM - 9:00 PM" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between py-1 text-sm md:text-base"
                  >
                    <span className="font-medium text-gray-700">{item.day}</span>
                    <span className="text-blue-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contacto */}
            <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm border-l-2 border-blue-500">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg 
                  className="w-5 h-5 mr-2 text-yellow-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                CONTACTO
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-1.5 rounded-full mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    Calle 123 #45-67, Bogotá, Colombia
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-1.5 rounded-full mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    +57 1 123 4567
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-1.5 rounded-full mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    info@turestaurante.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visitanos;