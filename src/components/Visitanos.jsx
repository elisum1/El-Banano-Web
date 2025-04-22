import React from "react";
import { motion } from "framer-motion";

const Visitanos = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      {/* Elementos decorativos mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-red-300 rounded-full filter blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título mejorado */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4">
            Visítanos
          </h2>
          <div className="h-2 w-32 bg-red-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Ven y disfruta de la mejor experiencia gastronómica en El Banano
          </p>
        </motion.div>
        
        {/* Grid mejorado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Mapa mejorado */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative h-[500px] rounded-2xl shadow-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-74.0781706847344!3d4.710442396641384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3e2e3e3e3e%3A0x1e3f9a3e2e3e3e3e!2sFogo%20de%20Chao!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
          
          {/* Información mejorada */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            {/* Horarios mejorados */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-l-4 border-red-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg 
                  className="w-8 h-8 mr-3 text-red-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Horarios de Atención
              </h3>
              <div className="space-y-4">
                {[
                  { day: "Lunes - Viernes", time: "11:00 AM - 10:00 PM" },
                  { day: "Sábado", time: "10:00 AM - 11:00 PM" },
                  { day: "Domingo", time: "10:00 AM - 9:00 PM" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                  >
                    <span className="font-semibold text-gray-700">{item.day}</span>
                    <span className="text-blue-600 font-medium">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Contacto mejorado */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-l-4 border-blue-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg 
                  className="w-8 h-8 mr-3 text-blue-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "location",
                    text: "Calle 123 #45-67, Bogotá, Colombia",
                    color: "bg-red-500"
                  },
                  {
                    icon: "phone",
                    text: "+57 1 123 4567",
                    color: "bg-green-500"
                  },
                  {
                    icon: "email",
                    text: "info@elbanano.com",
                    color: "bg-blue-500"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className={`${item.color} p-3 rounded-full mr-4`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon === "location" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        )}
                        {item.icon === "phone" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        )}
                        {item.icon === "email" && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        )}
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Visitanos;