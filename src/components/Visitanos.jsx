import React from "react";

const Visitanos = () => {
    return ( <section className="relative min-h-[80vh] w-full bg-white overflow-hidden py-12">
        {/* Fondo decorativo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-yellow-400 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600 to-transparent"></div>
        </div>
      
        {/* Contenido principal */}
        <div className="container mx-auto px-4 relative z-10">
          {/* Título con animación */}
          <div 
            className="text-center mb-16 opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-extrabold text-blue-900 mb-4">
              VISÍTANOS
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
      
          {/* Grid de dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Mapa con efecto de aparición */}
            <div 
              className="relative h-96 w-full rounded-xl shadow-2xl overflow-hidden border-4 border-white opacity-0 animate-slideInLeft"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1mhttps://www.google.com/maps/place/Arrecife+Centro+Comercial/@11.2001805,-74.226153,19.79z/data=!4m15!1m8!3m7!1s0x8ef4f66ff59a173d:0x124b95fc153af9b8!2sSanta+Marta,+Magdalena!3b1!8m2!3d11.2403547!4d-74.2110227!16zL20vMDJuc2xj!3m5!1s0x8ef45f96c2cad077:0x3d318c642696018!8m2!3d11.2003793!4d-74.2257763!16s%2Fg%2F11h6nhtjhk?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D18!1m12!1m3!1d3966.521260322283!2d-74.0781706847344!3d4.710442396641384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3e2e3e3e3e%3A0x1e3f9a3e2e3e3e3e!2sFogo%20de%20Chao!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 to-blue-600/10 pointer-events-none"></div>
            </div>
      
            {/* Información con efectos escalonados */}
            <div className="space-y-8">
              {/* Horarios */}
              <div 
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                  <h3 className="text-2xl font-gotham font-bold text-blue-900 mb-4 flex items-center">
                    <svg 
                      className="w-6 h-6 mr-2 text-yellow-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    HORARIOS DE ATENCIÓN
                  </h3>
                  <div className="space-y-3">
                    {[
                      { day: "Lunes - Viernes", time: "11:00 AM - 10:00 PM" },
                      { day: "Sábado", time: "10:00 AM - 11:00 PM" },
                      { day: "Domingo", time: "10:00 AM - 9:00 PM" }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex justify-between py-2 border-b border-gray-100"
                      >
                        <span className="font-gotham font-semibold text-gray-700">{item.day}</span>
                        <span className="font-gotham font-medium text-blue-600">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
      
              {/* Contacto */}
              <div 
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-2xl font-gotham font-bold text-blue-900 mb-4 flex items-center">
                    <svg 
                      className="w-6 h-6 mr-2 text-yellow-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    INFORMACIÓN DE CONTACTO
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-yellow-400 p-2 rounded-full mr-3 flex-shrink-0">
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <p className="font-gotham text-gray-700">
                        Calle 123 #45-67, Bogotá, Colombia
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-yellow-400 p-2 rounded-full mr-3 flex-shrink-0">
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <p className="font-gotham text-gray-700">
                        +57 1 123 4567
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-yellow-400 p-2 rounded-full mr-3 flex-shrink-0">
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <p className="font-gotham text-gray-700">
                        info@turestaurante.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      
        {/* Estilos de animación */}
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInLeft {
            from { 
              opacity: 0;
              transform: translateX(-50px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out;
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out;
          }
        `}</style>
      </section>
      
    )
}

export default Visitanos;