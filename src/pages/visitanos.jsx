import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Visitanos = () => {
  return (
    <section className=" bg-gradient-to-br from-gray-50 to-gray-100 ">
      <div className=" mb-12">
        <Header />
      </div>
     
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
      
      <div className="container mx-auto px-4 relative z-10 pt-24 sm:pt-32">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            {/* CC Arrecife */}
            <div className="relative h-[240px] rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.22743606567384%2C11.19661267067382%2C-74.22419548034668%2C11.198550018670162&amp;layer=mapnik&amp;marker=11.197581346885275%2C-74.22581577301025"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                <h4 className="font-semibold text-blue-900">CC Arrecife - Rodadero</h4>
              </div>
              <a 
                href="https://www.openstreetmap.org/way/252225212"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                Ver mapa más grande
              </a>
            </div>

            {/* CC Buena Vista */}
            <div className="relative h-[240px] rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.17839050292969%2C11.230645665499105%2C-74.17514991760254%2C11.232583195246416&amp;layer=mapnik&amp;marker=11.231614432105947%2C-74.17677021026611"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                <h4 className="font-semibold text-blue-900">CC Buena Vista - Mamatoco</h4>
              </div>
              <a 
                href="https://www.openstreetmap.org/way/633317509"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                Ver mapa más grande
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
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
                  { day: "Lunes - Viernes", time: "11:00 AM - 9:00 PM" },
                  { day: "Sábado", time: "11:00 AM - 9:00 PM" },
                  { day: "Domingo", time: "11:00 AM - 9:00 PM" }
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
                    text: "CC Arrecife - Rodadero - Santa Marta y en CC Buena Vista Mamatoco - Santa Marta",
                    color: "bg-red-500"
                  },
                  {
                    icon: "phone",
                    text: "Arrecife : 310-334-70-15, CC Buena Vista : 310-336-91-75",
                    color: "bg-green-500"
                  },
                  {
                    icon: "email",
                    text: "recursosreb@gmail.com",
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
                    <span className="md:text-lg text-md text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="mt-7">

      <Footer />
      </div>
    </section>
  );
};

export default Visitanos;