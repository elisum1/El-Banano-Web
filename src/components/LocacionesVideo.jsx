import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaUtensils, FaHeart, FaFire, FaClock, FaStar } from 'react-icons/fa';

const LocacionesVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const cookingVideos = [
    {
      title: "EL ARTE DEL ASADO",
      subtitle: "Churrasco de 330 gr",
      video: "/img/VideoChurrasco.mp4",
      chef: "Parrilleros",
      time: "10 minutos de preparación",
      description: "Observa cómo nuestros chefs maestros preparan el churrasco perfecto, sellando los jugos y sabores en su punto exacto. Una experiencia culinaria que despierta todos los sentidos.",
      features: [
        { icon: FaUtensils, text: "Término al gusto" },
        { icon: FaStar, text: "Corte premium" },
        { icon: FaHeart, text: "Marinado especial de El Banano" }
      ],
      rating: 5,
      price: "$56.000",
    },
    {
      title: "SABOR Y TRADICIÓN",
      subtitle: "Antioqueños El Banano",
      video: "/img/AtioqueñoVideo.mp4",
      chef: "Cocineros",
      time: "20 minutos de preparación",
      description: "Descubre los secretos detrás de nuestras recetas más emblemáticas. Cada plato es preparado con pasión y dedicación para brindarte una experiencia gastronómica inolvidable.",
      features: [
        { icon: FaFire, text: "Receta original de El Bannano" },
        { icon: FaStar, text: "Ingredientes muy selectos" },
        { icon: FaClock, text: "De rapida preparacion" }
      ],
      rating: 4.9,
      price: "$34.000", 
    }
  ];

  return (
    <section className="relative py-20 bg-blue-950 overflow-hidden">
      {/* Líneas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Línea diagonal 1 */}
        <div className="absolute top-0 left-0 w-[150%] h-1 bg-yellow-400/10 transform -rotate-45 translate-y-20" />
        <div className="absolute top-0 left-0 w-[150%] h-0.5 bg-yellow-400/20 transform -rotate-45 translate-y-40" />
        
        {/* Línea diagonal 2 */}
        <div className="absolute bottom-0 right-0 w-[150%] h-1 bg-blue-400/10 transform -rotate-45 -translate-y-20" />
        <div className="absolute bottom-0 right-0 w-[150%] h-0.5 bg-blue-400/20 transform -rotate-45 -translate-y-40" />
        
        {/* Líneas horizontales */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-white/5" />
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-white/5" />
        
        {/* Círculos decorativos */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-yellow-400/20" />
        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border border-blue-400/20" />
      </div>

      {/* Fondo inclinado */}
      <div 
        className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-yellow-50 via-slate-50 to-yellow-100 transform -skew-y-6 origin-top-left"
        style={{ zIndex: 0 }}
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block mb-6"
          >
            <img 
              src="/img/logo_el_banano-removebg-preview.png" 
              alt="El Banano Logo"
              className="w-24 h-24 mx-auto"
            />
          </motion.div>
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4"
          >
            Experiencia Culinaria
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-2xl text-blue-950"
          >
            El arte de la cocina en cada detalle
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cookingVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
                <div 
                  className="relative h-80 overflow-hidden cursor-pointer"
                  onClick={() => {
                    setSelectedVideo(index);
                    setIsPlaying(!isPlaying);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:opacity-75 transition-all duration-500 z-10" />
                  <video
                    ref={el => {
                      if (el) {
                        el.playing = isPlaying && selectedVideo === index;
                      }
                    }}
                    src={video.video}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    autoPlay={isPlaying && selectedVideo === index}
                    loop
                    muted
                    playsInline
                  />
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                  >
                    <motion.div
                      animate={{ scale: isPlaying && selectedVideo === index ? 0 : 1 }}
                      className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-300"
                    >
                      <FaPlay className="text-blue-900 group-hover:text-yellow-400 text-3xl ml-2" />
                    </motion.div>
                  </motion.div>
                </div>

                <div className="p-8">
                  <motion.div 
                    className="flex items-center justify-between mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">{video.title}</h3>
                      <p className="text-yellow-600">{video.chef}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-blue-900 font-bold">{video.rating}</span>
                      </div>
                      <p className="text-blue-900 font-bold">{video.price}</p>
                    </div>
                  </motion.div>

                  <motion.h4 
                    className="text-xl text-blue-900 mb-4 font-semibold"
                    whileHover={{ x: 10 }}
                  >
                    {video.subtitle}
                  </motion.h4>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {video.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {video.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="bg-yellow-50 rounded-lg p-4 text-center shadow-md"
                      >
                        <feature.icon className="text-blue-900 text-xl mx-auto mb-2" />
                        <span className="text-sm text-gray-700">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2" />
                      <span>{video.time}</span>
                    </div>
                  </div>

             
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LocacionesVideo;