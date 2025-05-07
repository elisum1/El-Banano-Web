import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt, FaGlassCheers, FaBriefcase } from 'react-icons/fa';

const Eventos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const eventos = [
    {
      id: 1,
      titulo: "Bodas",
      descripcion: "Haz de tu día especial un momento inolvidable con nuestra exquisita gastronomía y servicio excepcional.",
      imagen: "/img/FotoMesaEvento.jpg",
      icon: FaGlassCheers
    },
    {
      id: 2,
      titulo: "Eventos Empresariales",
      descripcion: "Impresiona a tus clientes y colaboradores con un servicio de catering profesional y personalizado.",
      imagen: "/img/FotoGrupalEventos.jpg",
      icon: FaBriefcase
    },
    {
      id: 3,
      titulo: "Fiestas",
      descripcion: "Celebra tus momentos especiales con un menú diseñado especialmente para tu ocasión.",
      imagen: "/img/EventosMilitares.jpg",
      icon: FaCalendarAlt
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + eventos.length) % eventos.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-b from-yellow-100 via-yellow-50 to-gray-50">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Líneas diagonales */}
        <div className="absolute top-0 left-0 w-[150%] h-0.5 bg-yellow-400/10 transform -rotate-45 translate-y-20" />
        <div className="absolute top-0 left-0 w-[150%] h-0.5 bg-yellow-400/20 transform -rotate-45 translate-y-40" />
        <div className="absolute bottom-0 right-0 w-[150%] h-0.5 bg-blue-400/10 transform -rotate-45 -translate-y-20" />
        <div className="absolute bottom-0 right-0 w-[150%] h-0.5 bg-blue-400/20 transform -rotate-45 -translate-y-40" />
        
        {/* Círculos decorativos */}
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-yellow-400/20 animate-pulse" />
        <div className="absolute -bottom-10 left-20 w-32 h-32 rounded-full border border-blue-400/20 animate-pulse" />
        
        {/* Líneas onduladas */}
        <div className="absolute top-1/4 left-0 w-full">
          <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-yellow-400/5"
            />
          </svg>
        </div>
        
        {/* Líneas horizontales con gradiente */}
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
      </div>

      {/* Fondo inclinado con elementos decorativos */}
      <div 
        className="absolute  top-0 left-0 w-full h-[70%] bg-gradient-to-b from-blue-950 via-blue-950 to-blue-950 transform -skew-y-6 origin-top-left overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* Elementos decorativos dentro del fondo azul */}
        <div className="absolute inset-0">
          {/* Líneas diagonales brillantes */}
          <div className="absolute top-0 left-0 w-[200%] h-0.5 bg-yellow-400/5 transform -rotate-45 translate-y-32" />
          <div className="absolute top-0 right-0 w-[200%] h-0.5 bg-blue-400/5 transform rotate-45 translate-y-64" />
          
          {/* Círculos decorativos con brillo */}
          <div className="absolute top-20 right-40 w-48 h-48 rounded-full border border-yellow-400/10 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full border border-blue-400/10 animate-pulse" />
          
          {/* Puntos brillantes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/20 rounded-full animate-ping" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-ping" />
          
          {/* Líneas onduladas */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path 
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                className="fill-yellow-50"
              />
            </svg>
          </div>

          {/* Gradientes de luz */}
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16 relative w-full z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Columna izquierda - Carrusel de imágenes */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 h-full"
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className="absolute w-full h-full"
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={eventos[currentIndex].imagen}
                        alt={eventos[currentIndex].titulo}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent opacity-60" />
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 p-8 text-white"
                      >
                        <h3 className="text-3xl font-bold mb-3">{eventos[currentIndex].titulo}</h3>
                        <p className="text-lg text-white/90">{eventos[currentIndex].descripcion}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Controles del carrusel */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                  {eventos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentIndex 
                          ? 'bg-yellow-400 w-12' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                {/* Botones de navegación */}
                <button
                  onClick={() => paginate(-1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center text-white"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center text-white"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Efectos de luz */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-400 rounded-full opacity-20 blur-[100px]" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-[100px] " />
            </motion.div>
          </div>

          {/* Columna derecha - Contenido */}
          <div className="lg:pl-8 xl:pl-16 py-4 md:py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-block">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  className="bg-yellow-400 text-blue-950 rounded-full py-1.5 px-4 md:py-2 md:px-6 text-base md:text-lg font-semibold"
                >
                  Servicios Especiales
                </motion.div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
                Eventos
                <span className="text-yellow-400"> Memorables</span>
              </h2>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Hacemos de cada ocasión un momento inolvidable. Nuestro equipo de expertos se encargará de cada detalle para que tu evento sea perfecto.
              </p>

              {/* Efectos de luz estáticos */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-400 rounded-full opacity-20 " />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-400 rounded-full opacity-20 " />

              {/* Círculos decorativos estáticos */}
              <div className="absolute top-20 right-40 w-48 h-48 rounded-full border border-yellow-400/10" />
              <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full border border-blue-400/10" />

              <div className="grid gap-4 md:gap-6">
                {eventos.map((evento) => (
                  <motion.div
                    key={evento.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-lg"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                      <evento.icon className="text-xl md:text-2xl text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-blue-950 mb-1 md:mb-2">
                        {evento.titulo}
                      </h3>
                      <p className="text-sm md:text-base text-blue-950/70">
                        {evento.descripcion}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://wa.me/573042883923?text=Hola,%20estoy%20interesado%20en%20cotizar%20un%20evento%20con%20ustedes.%20¿Me%20pueden%20brindar%20más%20información?"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 md:gap-3 bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaWhatsapp className="text-xl md:text-2xl" />
                Cotiza tu evento
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eventos;