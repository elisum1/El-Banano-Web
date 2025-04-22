import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaHistory, FaStar } from 'react-icons/fa';

const BananoWebBanner = () => {
  const features = [
    {
      icon: FaUtensils,
      title: "Sabor Único",
      description: "Receta original desde 1986"
    },
    {
      icon: FaHistory,
      title: "Tradición",
      description: "Más de 35 años de experiencia"
    },
    {
      icon: FaStar,
      title: "Calidad Premium",
      description: "Ingredientes seleccionados"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 opacity-90" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto p-5 md:p-14 text-white relative z-10"
      >
        <div className="mb-8 md:mb-16">
          <motion.div 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-900 to-transparent"></div>
            <h2 className="mx-4 md:mx-8 text-4xl md:text-8xl font-gotham font-extrabold text-center uppercase tracking-tight text-blue-900 [text-shadow:_2px_2px_0_white]">
              DESDE 1986
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-900 to-transparent"></div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-4xl lg:text-6xl font-gotham font-extrabold uppercase mb-6 tracking-wide">
            ¡EL <span className="text-blue-900 [text-shadow:_2px_2px_0_white]">BANANO WEB</span> HA VUELTO!
          </h3>
          <p className="text-base md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-blue-900 font-semibold">
            Redescubre nuestro plato insignia con una presentación renovada y sabores que honran nuestra tradición
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center"
            >
              <feature.icon className="text-4xl text-blue-900 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h4>
              <p className="text-blue-900/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative h-64 md:h-96 overflow-hidden rounded-xl">
              <img 
                src="/img/caption.jpg" 
                alt="Plato Banano Web"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h5 className="text-xl font-bold mb-2">Presentación Clásica</h5>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Nuestro plato original que ha deleitado paladares desde 1986
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative h-64 md:h-96 overflow-hidden rounded-xl">
              <img 
                src="/img/elbananoarrecife.jpeg" 
                alt="Presentación Banano Web"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h5 className="text-xl font-bold mb-2">Nueva Presentación</h5>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Una interpretación moderna de nuestro plato estrella
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
            ¡Ordena Ahora!
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BananoWebBanner;