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
      image: "/img/Arrecife.jpg"
    },
    {
      city: "CC BUENA VISTA",
      address: "Av. El Libertador #32-172 a 32-296",
      phone: "604-567-8901",
      hours: "Lun-Dom: 11:00 AM - 9:00 PM",
      image: "/img/BuenaVista.jpg"
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
<div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900">
  {/* Elementos decorativos estáticos */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Círculos decorativos */}
    <div className="absolute top-20 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px]" />
    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px]" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-800/10 rounded-full blur-[120px]" />
    
    {/* Líneas decorativas estáticas */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute left-20 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute right-20 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
    </div>
  </div>

  {/* Contenido principal */}
  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mt-24">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center space-y-8 relative z-10 w-full max-w-4xl mx-auto"
    >
        <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-sm font-normal tracking-widest text-yellow-400 uppercase bg-blue-950/80 px-6 py-2 rounded-full backdrop-blur-sm border border-yellow-400/20">
          Bienvenido a El Banano
        </span>
      <motion.h1 
        className="text-4xl sm:text-6xl md:text-9xl font-black text-white mb-4 md:mb-6 relative"
        style={{
          textShadow: '3px 3px 0px #FCD34D, 6px 6px 0px rgba(30, 58, 138, 0.5), 9px 9px 10px rgba(0,0,0,0.2)',
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: '-2px'
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
        className="flex flex-col items-center gap-6"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full blur-2xl opacity-30 animate-pulse" />
          <img 
            src="/img/logo_el_banano-removebg-preview.png"
            alt="Plátano Maduro"
            className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
          />
        </div>
        <p className="text-2xl md:text-4xl text-white font-semibold px-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">
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
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 px-8 py-4 rounded-full font-bold text-lg 
          flex items-center gap-3 group hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 mx-auto"
      >
        <FaPlay className="group-hover:rotate-90 transition-transform duration-500" />
        <span>Descubre nuestra historia</span>
      </motion.button>
    </motion.div>
  </div>

  {/* Transición curva animada */}
  <motion.div 
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    className="absolute -bottom-[2px] left-0 w-full h-32 bg-white z-20"
    style={{
      clipPath: 'path("M 0 10 Q 50 -20 100 10 L 100 100 L 0 100 Z")',
      transformOrigin: 'bottom'
    }}
  />
</div>  

           {/* Sección Historia Mejorada */}
          <section id="historia" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white to-yellow-50">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Líneas onduladas */}
              <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.1"/>
                    <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                {/* Líneas curvas animadas */}
                {[...Array(5)].map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M -100 ${200 + i * 200} Q 400 ${100 + i * 180} 800 ${300 + i * 150} T 1600 ${200 + i * 200}`}
                    stroke="url(#lineGradient1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: 0.5,
                      y: [0, 20, 0],
                    }}
                    transition={{ 
                      duration: 3,
                      y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }
                    }}
                  />
                ))}
              </svg>
              
              {/* Patrones geométricos */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full grid grid-cols-10 gap-8">
                  {[...Array(100)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                      className="w-2 h-2 bg-gradient-to-br from-blue-900 to-yellow-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
              
              {/* Círculos de años con efecto mejorado */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-10 right-10 w-32 h-32 md:w-40 md:h-40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-2 rounded-full border-4 border-yellow-400/30 animate-pulse" />
                  <span className="text-3xl md:text-4xl font-extrabold text-yellow-400 drop-shadow-lg">2025</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute bottom-20 left-10 w-40 h-40 md:w-60 md:h-60"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-2 rounded-full border-4 border-yellow-400/30" />
                  <span className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">1986</span>
                </div>
                <div className="absolute inset-0 border-8 border-blue-900/30 rounded-full animate-pulse" />
              </motion.div>
            </div>
          
            <div className="max-w-7xl mx-auto px-4 py-24">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Contenido izquierdo */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="inline-block mb-6"
                    >
                      <span className="bg-blue-950 text-yellow-400 text-sm font-semibold px-6 py-2 rounded-full">
                        Nuestra Historia
                      </span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-6xl font-bold text-blue-950 mb-8 leading-tight">
                      Más de tres décadas de <br/>
                      <span className="text-yellow-400">tradición y sabor</span>
                    </h2>
                    
                    <div className="prose prose-lg text-blue-950/70 mb-8">
                      <p>
                        Desde 1986, El Banano ha sido sinónimo de tradición y excelencia en la gastronomía colombiana. Lo que comenzó como un pequeño local familiar se ha convertido en un referente de la cocina tradicional.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <div className="bg-white rounded-2xl p-6 shadow-xl">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">37+</div>
                        <div className="text-blue-950/70">Años de experiencia</div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-xl">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">2</div>
                        <div className="text-blue-950/70">Sedes principales</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Lado derecho - Video */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-3xl"
                      style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                    >
                      <source src="/img/VideoHistoria.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

           {/* Valores Section */}
<section className="py-24 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white ">
  {/* Contenedor principal con diseño hexagonal */}
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    {/* Encabezado mejorado */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-20"
    >
      <div className="relative inline-block">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400 to-blue-900 transform rotate-3 rounded-2xl opacity-20"></div>
          <h2 className="relative text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-blue-800 py-2">
            Nuestros Valores
          </h2>
        </motion.div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-1 w-10 bg-yellow-400 rounded-full"></span>
          <span className="text-blue-950 font-medium">El Banano</span>
          <span className="h-1 w-10 bg-yellow-400 rounded-full"></span>
        </div>
      </div>
    </motion.div>

    {/* Grid de valores mejorado */}
    <div className="grid lg:grid-cols-3 gap-8 relative">
      {values.map((valor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="group relative"
        >
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-blue-800 rounded-[2.5rem] rotate-3 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
          
          {/* Tarjeta principal */}
          <div className="relative bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-950/5">
            {/* Icono mejorado */}
            <div className="mb-8 relative">
              <div className={`w-16 h-16 ${valor.color} rounded-2xl rotate-45 transform group-hover:scale-110 transition-transform duration-500`}></div>
              <valor.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl -rotate-45" />
            </div>

            {/* Contenido */}
            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              {valor.title}
            </h3>
            
            <p className="text-blue-950/70 mb-6 leading-relaxed">
              {valor.text}
            </p>

            {/* Lista de detalles mejorada */}
            <ul className="space-y-3">
              {valor.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 text-blue-950/60"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.1 }}
                >
                  <div className={`w-2 h-2 ${valor.color} rounded-full transform group-hover:scale-150 transition-all duration-300`}></div>
                  <span className="group-hover:text-blue-950 transition-colors duration-300">{detail}</span>
                </motion.li>
              ))}
            </ul>

            {/* Botón de acción */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-8 w-full py-3 px-6 ${valor.color} text-white rounded-xl font-medium 
                transform transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2`}
            >
              <span>Conoce más</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

       {/* Momentos Especiales Section */}
{/* Sección de Sedes */}
<section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900">
  {/* Elementos decorativos estáticos */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Círculos decorativos */}
    <div className="absolute top-20 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px]" />
    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px]" />
    
    {/* Líneas decorativas estáticas */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute left-20 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute right-20 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
    </div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4">
    {/* Encabezado */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-20"
    >
      <span className="inline-block bg-yellow-400/10 text-yellow-400 text-sm font-semibold px-6 py-2 rounded-full backdrop-blur-sm border border-yellow-400/20 mb-6">
        Nuestras Ubicaciones
      </span>
      <h2 className="text-6xl font-black text-white mb-6">
        Encuéntranos en <span className="text-yellow-400">Santa Marta</span>
      </h2>
      <p className="text-xl text-white/70 max-w-2xl mx-auto">
        Disfruta de la mejor experiencia gastronómica en nuestras dos sedes principales
      </p>
    </motion.div>

    {/* Primera sede */}
    <div className="mb-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="order-2 md:order-1"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-4">{locations[0].city}</h3>
            <div className="space-y-4 text-white/70">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>{locations[0].address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-400" />
                <span>{locations[0].phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-yellow-400" />
                <span>{locations[0].hours}</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contacto')}
              className="mt-8 w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 rounded-xl font-semibold 
                flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
            >
              <span>¿Cómo llegar?</span>
              <FaMapMarkerAlt />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="order-1 md:order-2"
        >
          <div className="relative h-80 rounded-3xl overflow-hidden">
            <img
              src={locations[0].image}
              alt={locations[0].city}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>

    {/* Segunda sede */}
    <div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="relative h-80 rounded-3xl overflow-hidden">
            <img
              src={locations[1].image}
              alt={locations[1].city}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-4">{locations[1].city}</h3>
            <div className="space-y-4 text-white/70">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>{locations[1].address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-400" />
                <span>{locations[1].phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-yellow-400" />
                <span>{locations[1].hours}</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contacto')}
              className="mt-8 w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 rounded-xl font-semibold 
                flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
            >
              <span>¿Cómo llegar?</span>
              <FaMapMarkerAlt />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* Sección Experiencia Única */}
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
    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-950/70 to-transparent" />
    
    {/* Elementos decorativos */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Círculos decorativos */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px]" />
      
      {/* Líneas decorativas */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform -rotate-2" />
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform rotate-2" />
    </div>
  </motion.div>

  <div className="absolute inset-0 flex items-center">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl space-y-8"
      >
        <span className="inline-block bg-yellow-400/10 text-yellow-400 text-sm font-semibold px-6 py-2 rounded-full backdrop-blur-sm border border-yellow-400/20">
          Descubre El Banano
        </span>
        
        <h2 className="text-6xl font-black text-white leading-tight">
          Una Experiencia
          <span className="block text-yellow-400">Única e Inolvidable</span>
        </h2>
        
        <p className="text-xl text-white/80 leading-relaxed">
          Donde cada plato cuenta una historia, cada sabor despierta un recuerdo y cada visita se convierte en un momento especial para compartir.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-blue-950 px-8 py-4 rounded-full font-bold text-lg 
            flex items-center gap-3 group hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
        >
          <span>Reserva tu mesa</span>
          <FaPlay className="group-hover:rotate-90 transition-transform duration-500" />
        </motion.button>
      </motion.div>
    </div>
  </div>
</section>

      {/* Políticas y Privacidad */}
      <section className="py-20 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-blue-950 mb-4 leading-tight font-black">Políticas y Privacidad</h2>
            <p className="text-xl text-white">Nuestro compromiso con tu confianza</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-950 backdrop-blur-lg rounded-xl p-8 text-white"
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
              className="bg-blue-950 backdrop-blur-lg rounded-xl p-8 text-white"
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
              className="md:col-span-2 bg-blue-950 backdrop-blur-lg rounded-xl p-8 text-white mt-8"
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