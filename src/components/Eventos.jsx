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
      imagen: "/img/boda.jpg",
      icon: FaGlassCheers
    },
    {
      id: 2,
      titulo: "Eventos Empresariales",
      descripcion: "Impresiona a tus clientes y colaboradores con un servicio de catering profesional y personalizado.",
      imagen: "/img/empresarial.jpg",
      icon: FaBriefcase
    },
    {
      id: 3,
      titulo: "Fiestas",
      descripcion: "Celebra tus momentos especiales con un menú diseñado especialmente para tu ocasión.",
      imagen: "/img/fiesta.jpg",
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
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Primera mitad - Fondo azul oscuro */}
      <div className="w-full lg:w-1/2 h-full bg-gradient-to-br from-blue-950 to-blue-900 absolute left-0 top-0" />
      
      {/* Segunda mitad - Fondo amarillo suave */}
      <div className="w-full lg:w-1/2 h-full bg-gradient-to-br from-yellow-50 to-yellow-100 absolute right-0 top-0" />

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16 relative w-full">
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
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-400 rounded-full opacity-20 blur-[100px] animate-pulse" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-[100px] animate-pulse" />
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

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950">
                Eventos
                <span className="text-yellow-400"> Memorables</span>
              </h2>

              <p className="text-lg md:text-xl text-blue-950/70 leading-relaxed">
                Hacemos de cada ocasión un momento inolvidable. Nuestro equipo de expertos se encargará de cada detalle para que tu evento sea perfecto.
              </p>

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
                href="https://wa.me/+573001234567?text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios%20para%20eventos"
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