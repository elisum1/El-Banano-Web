import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaHeart, FaStar, FaMapMarkerAlt, FaPlay, FaClock, FaPhone } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Visitanos from '../components/Visitanos';

const Nosotros = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedValue, setSelectedValue] = useState(null);


  const handleScrollToHistory = () => {
    const historySection = document.getElementById('historia');
    historySection.scrollIntoView({ behavior: 'smooth' });
  };

  const locations = [
    {
      city: "CC ARRECIFE",
      address: "Carrera 4ª, El Rodadero, Santa Marta",
      phone: "601-234-5678",
      hours: "Lun-Dom: 11:00 AM - 9:00 PM",
      image: "/img/YEI02214.jpg"
    },
    {
      city: "CC BUENA VISTA",
      address: "Av. El Libertador #32-172 a 32-296",
      phone: "604-567-8901",
      hours: "Lun-Dom: 11:00 AM - 9:00 PM",
      image: "/img/YEI02152.jpg"
    }
  ];

  const moments = [
    {
      title: "Nuestros Inicios",
      description: "El sueño comenzó en una pequeña cocina familiar donde las recetas tradicionales cobraban vida.",
      image: "/img/YEI02214.jpg",
      year: "1986"
    },
    {
      title: "Expansión",
      description: "La calidad y el sabor nos llevaron a abrir nuevas sedes para llegar a más personas.",
      image: "/img/YEI02152.jpg",
      year: "2000"
    },
    {
      title: "Innovación",
      description: "Incorporamos nuevas técnicas y sabores manteniendo nuestra esencia tradicional.",
      image: "/img/YEI02244.jpg",
      year: "2015"
    }
  ];

  const specialMoments = [
    {
      id: 1,
      title: "Celebraciones Especiales",
      description: "Momentos únicos compartidos con nuestros clientes",
      image: "/img/YEI02214.jpg",
      category: "Eventos"
    },
    {
      id: 2,
      title: "Preparaciones Exclusivas",
      description: "El arte de la cocina en su máxima expresión",
      image: "/img/YEI02152.jpg",
      category: "Cocina"
    },
    {
      id: 3,
      title: "Ambiente Acogedor",
      description: "Un espacio diseñado para tu comodidad",
      image: "/img/caption.jpg",
      category: "Local"
    },
    {
      id: 4,
      title: "Equipo Profesional",
      description: "Expertos dedicados a brindarte la mejor experiencia",
      image: "/img/Equipo.png",
      category: "Equipo"
    }
  ];

  const values = [
    { 
      icon: FaLeaf, 
      title: "Frescura", 
      text: "Seleccionamos cuidadosamente los ingredientes más frescos para garantizar la mejor calidad en cada plato.",
      color: "from-green-400 to-green-600",
      details: [
        "Ingredientes seleccionados diariamente",
        "Proveedores locales certificados",
        "Control de calidad riguroso",
        "Almacenamiento óptimo"
      ],
      image: "/img/YEI02214.jpg"
    },
    { 
      icon: FaHeart, 
      title: "Pasión", 
      text: "Ponemos amor y dedicación en cada detalle, desde la preparación hasta el servicio.",
      color: "from-red-400 to-red-600",
      details: [
        "Personal altamente capacitado",
        "Atención personalizada",
        "Ambiente acogedor",
        "Servicio excepcional"
      ],
      image: "/img/YEI02152.jpg"
    },
    { 
      icon: FaStar, 
      title: "Excelencia", 
      text: "Buscamos la perfección en cada experiencia, superando las expectativas de nuestros clientes.",
      color: "from-yellow-400 to-yellow-600",
      details: [
        "Estándares internacionales",
        "Mejora continua",
        "Innovación constante",
        "Compromiso total"
      ],
      image: "/img/YEI02159.jpg"
    }
  ];

  return (
    <div className="font-sans">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-10 right-10 w-40 h-40 bg-blue-900 rounded-full flex items-center justify-center"
          >
            <span className="text-4xl font-extrabold text-yellow-400">2025</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 left-20 w-60 h-60 bg-blue-900 rounded-full flex items-center justify-center"
          >
            <span className="text-6xl font-extrabold text-yellow-400">1986</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 left-20 w-60 h-60 border-[6px] border-blue-900 rounded-full"
          />
          
          {/* Flame effects */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute w-3 h-3 bg-blue-950 rounded-full"
              style={{
                left: `${20 + (i * 5)}%`,
                bottom: '20%',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center space-y-8 relative z-10"
          >
            <motion.h1 
              className="text-6xl md:text-9xl font-black text-blue-900 mb-6"
              style={{
                textShadow: '4px 4px 0px #FCD34D, 8px 8px 0px rgba(30, 58, 138, 0.5)'
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Sobre Nosotros
            </motion.h1>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <img 
                src="/img/logo_el_banano-removebg-preview.png"
                alt="Plátano Maduro"
                className="w-32 h-32 object-contain"
              />
              <p className="text-2xl md:text-3xl text-white font-semibold">
                Tradición y sabor desde 1986
              </p>
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToHistory}
              className="bg-red-500 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 group shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <FaPlay className="group-hover:rotate-180 transition-transform duration-500" />
              Descubre nuestra historia
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Historia Section */}
      <section id="historia" className="py-20 bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Nuestra Historia
          </motion.h2>
          <div className="space-y-24">
            {moments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -inset-4 bg-yellow-400 rounded-lg transform rotate-2" />
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="relative w-full h-[300px] object-cover rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-900 text-yellow-400 text-2xl font-bold p-4 rounded-full">
                    {moment.year}
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-3xl font-bold mb-4 text-yellow-400">{moment.title}</h3>
                  <p className="text-lg leading-relaxed">{moment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

           {/* Valores Section */}
<section className="py-20 relative overflow-hidden">
  <div className="absolute inset-0 bg-white" />
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.1 }}
    className="absolute inset-0"
  >
    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-[100px] opacity-20" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-[100px] opacity-20" />
  </motion.div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <span className="text-yellow-400 text-lg font-medium mb-4 block">Lo que nos define</span>
      <h2 className="text-5xl font-bold text-blue-950 mb-6">Nuestros Valores</h2>
      <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full mb-8" />
      <p className="text-xl text-gray-800 max-w-2xl mx-auto">
        Principios que guían cada aspecto de nuestra experiencia gastronómica
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {values.map((valor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="relative group cursor-pointer"
          onClick={() => setSelectedValue(valor)}
        >
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full  border-[1px] hover:border-blue-950 transition-all duration-300">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${valor.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-all duration-300`}>
              <valor.icon className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">{valor.title}</h3>
            <p className="text-blue-950 leading-relaxed">{valor.text}</p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`h-1 bg-gradient-to-r ${valor.color} mt-6 rounded-full`}
            />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-yellow-400">Ver más →</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Modal para valores */}
  <AnimatePresence>
    {selectedValue && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
        onClick={() => setSelectedValue(null)}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative max-w-4xl w-full bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative p-8">
            <div className="flex items-start gap-6">
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${selectedValue.color} flex items-center justify-center flex-shrink-0`}>
                <selectedValue.icon className="text-4xl text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedValue.title}</h3>
                <p className="text-xl text-gray-300">{selectedValue.text}</p>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-4">Características</h4>
                <ul className="space-y-3">
                  {selectedValue.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-white"
                    >
                      <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${selectedValue.color}`} />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  src={selectedValue.image}
                  alt={selectedValue.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedValue.color} opacity-30`} />
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setSelectedValue(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-400 transition-colors"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>

        {/* Momentos Especiales Section */}
                    <section className="py-20 relative min-h-screen bg-blue-950">
        {/* Interactive Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${(i * 15) + Math.random() * 10}%`,
                left: `${(i * 8) + Math.random() * 15}%`,
                zIndex: 1
              }}
            >
              <motion.img
                src="/img/PatanoLogo.png"
                alt="Platano Decorativo"
                className="w-24 h-24 object-contain opacity-10 hover:opacity-30 cursor-pointer filter brightness-150"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  filter: "brightness(2)",
                }}
                onClick={() => {
                  const randomImage = specialMoments[Math.floor(Math.random() * specialMoments.length)];
                  setSelectedImage(randomImage);
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, i % 2 === 0 ? 15 : -15, 0],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-950/95 via-blue-950/80 to-blue-950/95 z-2" />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Rest of your existing content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl font-bold text-white mb-6"
              style={{
                textShadow: '4px 4px 0px #FCD34D, 8px 8px 0px rgba(252, 211, 77, 0.3)'
              }}
            >
              Momentos Especiales
            </h2>
            <p className="text-xl text-yellow-400">
              Cada instante cuenta una historia única
            </p>
          </motion.div>

          {/* Rest of the existing content */}
          <div className="relative grid grid-cols-12 gap-6 items-start">
            {specialMoments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${
                  index % 3 === 0 ? 'col-span-12 md:col-span-8' : 
                  index % 3 === 1 ? 'col-span-12 md:col-span-4' : 
                  'col-span-12 md:col-span-6'
                } group cursor-pointer`}
                onClick={() => setSelectedImage(moment)}
              >
                <div className={`relative overflow-hidden rounded-2xl ${
                  index % 3 === 0 ? 'h-[600px]' : 
                  index % 3 === 1 ? 'h-[400px]' : 
                  'h-[500px]'
                }`}>
                  <motion.img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent flex flex-col justify-end p-8"
                  >
                    <motion.div
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="inline-block px-4 py-1 bg-yellow-400/20 text-yellow-400 rounded-full mb-4 text-sm">
                        {moment.category}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {moment.title}
                      </h3>
                      <p className="text-gray-200 line-clamp-2">
                        {moment.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg bg-blue-950/80"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative max-w-6xl w-full bg-blue-900/50 backdrop-blur-sm rounded-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <motion.img 
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-[80vh] object-cover"
                  layoutId={`image-${selectedImage.id}`}
                />
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-blue-950/95 via-blue-950/80 to-transparent"
                >
                  <h3 className="text-4xl font-bold text-white mb-4">{selectedImage.title}</h3>
                  <p className="text-xl text-yellow-400">{selectedImage.description}</p>
                </motion.div>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 text-blue-950 rounded-full flex items-center justify-center text-2xl font-bold"
                >
                  ×
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Sedes Section */}
      <section className="py-20 relative min-h-screen overflow-hidden bg-blue-950">
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <motion.div className="h-1/2 md:h-full md:w-1/2 bg-white" 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div className="h-1/2 md:h-full md:w-1/2 bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold text-white mb-6"
              style={{
                textShadow: '4px 4px 0px #3F48CC, 8px 8px 0px rgba(252, 211, 77, 0.5)'
              }}
            >
              Nuestras Sedes
            </h2>
            <p className="text-2xl text-blue-950">
              Encuentra El Banano más cercano
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:h-[600px]">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="relative h-[500px] md:h-full"
                initial="closed"
                whileHover="open"
              >
                {/* Location Name Panel */}
                <motion.div
                  className={`absolute inset-0 ${index === 0 ? 'bg-yellow-400' : 'bg-blue-900'} rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden   shadow-lg shadow-black`}
                  variants={{
                    closed: { rotateY: 0 },
                    open: { rotateY: -90 }
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <h3 className={`text-2xl md:text-4xl font-bold ${index === 0 ? 'text-blue-900' : 'text-yellow-400'} text-center p-4 md:p-8 transform-gpu`}>
                    {location.city}
                    <span className="block text-lg md:text-xl mt-2 font-normal opacity-80">
                      {location.address}
                    </span>
                  </h3>
                </motion.div>

                {/* Location Details Panel */}
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg shadow-black"
                  variants={{
                    closed: { rotateY: 90, opacity: 0 },
                    open: { rotateY: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative h-full bg-white rounded-2xl shadow-2xl">
                    <div className="h-1/2 relative">
                      <img
                        src={location.image}
                        alt={location.city}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="absolute bottom-0 left-0 p-4 md:p-6"
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {location.city}
                        </h3>
                        <p className="text-lg md:text-xl text-yellow-400">
                          {location.address}
                        </p>
                      </motion.div>
                    </div>
                    
                    <div className="p-4 md:p-8 space-y-4 md:space-y-6">
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="flex items-center gap-3 md:gap-4 text-base md:text-xl"
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                          <FaPhone className="text-blue-900 text-lg md:text-xl" />
                        </div>
                        <span className="text-blue-900">{location.phone}</span>
                      </motion.div>

                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3 md:gap-4 text-base md:text-xl"
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-900 flex items-center justify-center">
                          <FaClock className="text-yellow-400 text-lg md:text-xl" />
                        </div>
                        <span className="text-blue-900">{location.hours}</span>
                      </motion.div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-900 text-white py-3 md:py-4 rounded-xl font-bold text-lg md:text-xl hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <FaMapMarkerAlt />
                        Ver ubicación
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="/img/FOTO.png"
            alt="El Banano Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
        </motion.div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl font-bold text-white mb-6">Una Experiencia Única</h2>
              <p className="text-xl text-yellow-400 mb-8">Donde cada plato cuenta una historia y cada visita se convierte en un recuerdo inolvidable.</p>
             
            </motion.div>
          </div>
        </div>
      </section>

      {/* Políticas y Privacidad */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Políticas y Privacidad</h2>
            <p className="text-xl text-white">Nuestro compromiso con tu confianza</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Políticas de Servicio</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">1</span>
                  <p>Reservas con anticipación mínima de 2 horas sujetas a disponibilidad.</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">2</span>
                  <p>Tiempo de espera máximo de 15 minutos para mesas reservadas.</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">3</span>
                  <p>Métodos de pago: efectivo, tarjetas débito/crédito y transferencias.</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Política de Privacidad</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">1</span>
                  <p>Protección de datos personales según normativa vigente.</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">2</span>
                  <p>Uso de información solo para mejorar la experiencia del cliente.</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">3</span>
                  <p>No compartimos información con terceros sin autorización.</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white mt-8"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Términos y Condiciones</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Reservas</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Las reservas están sujetas a disponibilidad y pueden requerir un depósito previo para grupos grandes. 
                    La cancelación debe realizarse con mínimo 2 horas de anticipación.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Servicio</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Nos reservamos el derecho de admisión y servicio. El tiempo estimado de preparación 
                    puede variar según la ocupación del restaurante.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
            <Visitanos/>
      <Footer />
    </div>
  );
};

export default Nosotros;