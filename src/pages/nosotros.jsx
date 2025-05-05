import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaHeart, FaStar, FaMapMarkerAlt, FaPlay, FaClock, FaPhone } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Nosotros = () => {
  const navigate = useNavigate(); // Add this line
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <div className="font-sans bg-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500">
        {/* Divisor de onda SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[100px]"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-white"
            />
          </svg>
        </div>

        {/* Transición curva animada */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          className="absolute -bottom-[2px] left-0 w-full h-32 bg-yellow-400 z-20"
          style={{
            clipPath: 'path("M 0 10 Q 50 -20 100 10 L 100 100 L 0 100 Z")',
            transformOrigin: 'bottom'
          }}
        />

        {/* Decorative elements - Ajustados para pantallas pequeñas */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-10 right-10 w-20 md:w-40 h-20 md:h-40 bg-blue-900 rounded-full flex items-center justify-center"
          >
            <span className="text-2xl md:text-4xl font-extrabold text-yellow-400">2025</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 left-5 md:left-20 w-32 md:w-60 h-32 md:h-60 bg-blue-900 rounded-full flex items-center justify-center"
          >
            <span className="text-3xl md:text-6xl font-extrabold text-yellow-400">1986</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 left-5 md:left-20 w-32 md:w-60 h-32 md:h-60 border-[6px] border-blue-900 rounded-full"
          />
        </div>

        {/* Content - Ajustado para pantallas pequeñas */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center space-y-4 md:space-y-8 relative z-10 w-full max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-9xl font-black text-blue-900 mb-4 md:mb-6"
              style={{
                textShadow: '2px 2px 0px #FCD34D, 4px 4px 0px rgba(30, 58, 138, 0.5)'
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
              className="flex flex-col items-center gap-2 md:gap-4"
            >
              <img 
                src="/img/logo_el_banano-removebg-preview.png"
                alt="Plátano Maduro"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
              <p className="text-xl md:text-3xl text-white font-semibold px-2">
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
              className="bg-red-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-2 md:gap-3 group shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto"
            >
              <FaPlay className="group-hover:rotate-180 transition-transform duration-500" />
              <span className="whitespace-nowrap">Descubre nuestra historia</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Historia Section */}
      <section id="historia" className="max-h-screen flex flex-col lg:flex-row relative overflow-hidden py-16 lg:py-0 bg-gradient-b from-white to-yellow-50" >
        {/* Divisor de onda superior curvo */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[160px]"
          >
            <path 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
              className="transition-all duration-300"
            />
          </svg>
        </div>

        {/* Lado izquierdo - Información */}
        <div className="w-full lg:w-[40%] bg-gradient-to-b from-white to-yellow-50 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 sm:space-y-8 lg:space-y-10 max-w-xl"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-950 rounded-full py-2 sm:py-3 px-6 sm:px-8 inline-block mb-3 sm:mb-4 shadow-lg"
              >
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Nuestra Historia
                </h2>
              </motion.div>
              <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto rounded-full mt-3 sm:mt-4" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-center text-blue-950/80"
            >
              Desde 1986, El Banano ha sido sinónimo de tradición y excelencia en la gastronomía colombiana. Comenzamos como un pequeño local familiar y hemos crecido hasta convertirnos en un referente de la cocina tradicional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl"
            >
              <p className="text-sm sm:text-base lg:text-lg text-blue-950/80 text-center italic">
                "Nuestro compromiso con la calidad y el sabor auténtico nos ha permitido expandirnos y llevar la experiencia El Banano a más personas, manteniendo siempre nuestra esencia y valores originales."
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                + de 37 años
              </span>
              <p className="text-base sm:text-lg text-blue-950/70 mt-2">de tradición y sabor</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Lado derecho - Video */}
        <div className="w-full lg:w-[60%] bg-gradient-to-b from-white to-yellow-50  p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto">
            {/* Video */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-xl"
                    style={{
                      filter: 'brightness(0.9) contrast(1.1)'
                    }}
                  >
                    <source src="/img/VideoHistoria.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

           {/* Valores Section */}
<section className="py-24 relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white">
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
      className="text-center mb-20"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-950 rounded-full py-2 px-6 inline-block mb-6"
      >
        <span className="text-lg font-medium text-white">Lo que nos define</span>
      </motion.div>
      <h2 className="text-6xl font-bold text-blue-950 mb-8 bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent">
        Nuestros Valores
      </h2>
      <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-8" />
      <p className="text-2xl text-blue-950/70 max-w-3xl mx-auto">
        Principios que guían cada aspecto de nuestra experiencia gastronómica
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-12">
      {values.map((valor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="relative group cursor-pointer"
          onClick={() => setSelectedValue(valor)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white to-yellow-100 rounded-3xl transform -rotate-1 transition-transform duration-300 group-hover:rotate-0" />
          <div className="relative bg-white rounded-3xl p-8 h-full border border-blue-950/10 shadow-xl backdrop-blur-sm transform rotate-1 transition-transform duration-300 group-hover:rotate-0">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${valor.color} flex items-center justify-center mb-8 transform transition-all duration-300 group-hover:scale-110`}>
              <valor.icon className="text-4xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-blue-950 mb-4">{valor.title}</h3>
            <p className="text-lg text-blue-950/70 leading-relaxed mb-6">{valor.text}</p>
            <ul className="space-y-3">
              {valor.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.1 }}
                  className="flex items-center gap-3 text-blue-950/60"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${valor.color}`} />
                  {detail}
                </motion.li>
              ))}
            </ul>
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className={`p-3 rounded-full bg-gradient-to-br ${valor.color}`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={() => setSelectedValue(null)}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative max-w-4xl w-full bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedValue.color} flex items-center justify-center`}>
                  <selectedValue.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white">{selectedValue.title}</h3>
              </div>
              <button
                onClick={() => setSelectedValue(null)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  {selectedValue.text}
                </p>
                <ul className="space-y-4">
                  {selectedValue.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 text-white/80"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${selectedValue.color}`} />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src={selectedValue.image}
                  alt={selectedValue.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>

       {/* Momentos Especiales Section */}
<section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900">
  {/* Divisor de onda superior */}
  <div className="absolute top-0 left-0 w-full overflow-hidden">
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="relative block w-full h-[100px]"
    >
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        className="fill-white"
      />
    </svg>
  </div>

  {/* Fondo minimalista */}
  <div className="absolute inset-0">
    <motion.div
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%']
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: 'url("/img/pattern-luxury.png")',
        backgroundSize: '150px 150px'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-12 sm:mb-16 lg:mb-20"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
        Momentos Especiales
      </h2>
      <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
        Cada momento en El Banano es una experiencia única que queremos compartir contigo
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {specialMoments.map((moment, index) => (
        <motion.div
          key={moment.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm">
            <div className="relative h-full w-full">
              <img
                src={moment.image}
                alt={moment.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-medium text-yellow-400 mb-2 block">
                  {moment.category}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {moment.title}
                </h3>
                <p className="text-sm text-white/80">
                  {moment.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
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
                onClick={() => navigate('/visitanos')}
              >
                {/* Location Name Panel */}
                <motion.div
                  className={`absolute inset-0 ${index === 0 ? 'bg-yellow-400' : 'bg-blue-900'} rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden shadow-lg shadow-black`}
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
                      <div className="absolute -inset-0 bg-gradient-to-t from-black/80 to-transparent" />
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
            
      <Footer />
    </div>
  );
};

export default Nosotros;