import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Reseñas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  const reviews = [
    {
      platform: 'Google',
      icon: '/img/google_13170545.png',
      rating: 4.6,
      reviews: '4,350 reseñas',
      stars: 5,
      color: 'from-red-400 to-red-600'
    },
    {
      platform: 'Facebook',
      icon: '/img/facebook_5968764.png',
      rating: 4.2,
      reviews: '1,054 reseñas',
      stars: 4,
      color: 'from-blue-400 to-blue-600'
    },
    {
      platform: 'TripAdvisor',
      icon: '/img/tripadvisor_2504944.png',
      rating: 4.0,
      reviews: '309 reseñas',
      stars: 4,
      color: 'from-green-400 to-green-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 overflow-hidden">
      {/* Elementos decorativos animados */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full filter blur-[100px] opacity-20"
      />
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.5, 1],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-[100px] opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Título animado */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Experiencias que Inspiran
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre lo que nuestra comunidad dice sobre nosotros
          </p>
        </motion.div>

        {/* Grid de reseñas mejorado */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <ReviewCard 
                item={item} 
                onHover={() => setIsHovered(index)}
                onLeave={() => setIsHovered(null)}
              />
            </motion.div>
          ))}
        </div>

        {/* Carrusel móvil mejorado */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="w-full"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <ReviewCard item={reviews[currentSlide]} />
            </motion.div>
          </AnimatePresence>

          {/* Controles del carrusel mejorados */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </motion.button>

            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-yellow-400 scale-110' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Sección de redes sociales mejorada */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Síguenos en Redes Sociales
          </h3>
          
          <div className="flex justify-center gap-6">
            {[
              { icon: '/img/icons8-instagram.svg', name: 'Instagram', color: 'from-purple-500 to-pink-500' },
              { icon: '/img/facebook_5968764.png', name: 'Facebook', color: 'from-blue-500 to-blue-600' },
              { icon: '/img/icons8-twitterx.svg', name: 'Twitter', color: 'from-gray-700 to-gray-900' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`relative group p-4 rounded-2xl bg-gradient-to-br ${social.color} shadow-xl`}
              >
                <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Componente ReviewCard mejorado
const ReviewCard = ({ item, onHover, onLeave }) => {
  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:border-white/40 transition-colors"
    >
      <div className="flex flex-col items-center">
        <div className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-lg mb-6`}>
          <img src={item.icon} alt={item.platform} className="w-10 h-10 filter brightness-0 invert" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`w-6 h-6 ${i < item.stars ? 'text-yellow-400' : 'text-gray-500'} fill-current`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </motion.svg>
            ))}
          </div>
          
          <h3 className="text-4xl font-bold text-white mb-2">{item.rating}</h3>
          <p className="text-gray-300 mb-6">{item.reviews}</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-blue-900 font-semibold hover:shadow-lg transition-all duration-300"
          >
            Ver Reseñas
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reseñas;