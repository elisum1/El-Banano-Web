import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reseñas from "../components/Reseñas";
import Galeria from "../components/Galeria";
import Especialidades from "../components/Especialidades";
import Chatbot from "../components/Chatbot";
import LocacionesVideo from "../components/LocacionesVideo";
import CombosBanano from "../components/CombosBanano";
import Loading from "../components/Loading";
import Eventos from "../components/Eventos";


const Inicio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  // Agregar el estado para el carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Datos del carrusel
  const carouselData = [
    { image: "/img/Churrasco.png", price: 56000, name: "Churrasco" },
    { image: "/img/PlatanoInicio.png", price: 9000, name: "Plátano Especial" },
  ];

  // Efecto para el cambio automático de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const dotsMenuRef = useRef(null);
  const firstSectionRef = useRef(null);
  const combosSectionRef = useRef(null);
  const LocacionesVideoRef = useRef(null);
  const GaleriaRef = useRef(null);
  const EspecialidadesRef = useRef(null);
  const ReseñasRef = useRef(null);
  const EventosRef = useRef(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(loadingTimer);
  }, []);
  
  const sectionRefs = useRef([]);
  const sections = [
    firstSectionRef, 
    EspecialidadesRef,
    combosSectionRef, 
    LocacionesVideoRef,
    EventosRef,
    GaleriaRef,
    ReseñasRef, 
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dotsMenuRef.current && !dotsMenuRef.current.contains(event.target)) {
        setShowDotsMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section, index) => {
        if (section.current && scrollPosition > section.current.offsetTop) {
          setActiveDot(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (index) => {
    if (sections[index]?.current) {
      const yOffset = -80;
      const y = sections[index].current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section id='home' className="min-h-screen overflow-x-hidden">
      <Header isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} isScrolled={isScrolled} />

      {/* Botón de flecha para subir */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 p-3 rounded-full shadow-lg z-50 cursor-pointer bg-blue-950 hover:bg-blue-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <div className="fixed bottom-12 left-0 right-0 z-40 hidden md:flex justify-between items-center px-4 lg:px-8">
        <div className="flex space-x-4 lg:space-x-6 pl-4 lg:pl-32">
          {/* Iconos de redes sociales con colores dinámicos */}
          <a 
            href="#" 
            className={`transition-colors duration-300
              ${activeDot === 0 ? 'text-white hover:text-white' : ''}
              ${(activeDot === 1 || activeDot === 2) ? 'text-blue-950 hover:text-white' : ''}
              ${(activeDot === 3 || activeDot === 4) ? 'text-white hover:text-yellow-400' : ''}
              ${activeDot === 5 ? 'text-blue-950 hover:text-white' : ''}
              ${activeDot === 6 ? 'text-white hover:text-white' : ''}
            `}
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="#" 
            className={`transition-colors duration-300
              ${activeDot === 0 ? 'text-white hover:text-white' : ''}
              ${(activeDot === 1 || activeDot === 2) ? 'text-blue-950 hover:text-white' : ''}
              ${(activeDot === 3 || activeDot === 4) ? 'text-white hover:text-yellow-400' : ''}
              ${activeDot === 5 ? 'text-blue-950 hover:text-white' : ''}
              ${activeDot === 6 ? 'text-white hover:text-white' : ''}
            `}
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="#" 
            className={`transition-colors duration-300
              ${activeDot === 0 ? 'text-white hover:text-white' : ''}
              ${(activeDot === 1 || activeDot === 2) ? 'text-blue-950 hover:text-white' : ''}
              ${(activeDot === 3 || activeDot === 4) ? 'text-white hover:text-yellow-400' : ''}
              ${activeDot === 5 ? 'text-blue-950 hover:text-white' : ''}
              ${activeDot === 6 ? 'text-white hover:text-white' : ''}
            `}
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>

        <div className="flex space-x-3 bg-black bg-opacity-30 px-3 py-2 rounded-full">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className="w-2.5 h-2.5 rounded-full focus:outline-none transition-all duration-300"
              style={{
                backgroundColor: activeDot === index ? '#3b82f6' : 'white',
                transform: activeDot === index ? 'scale(1.5)' : 'scale(1)',
                opacity: activeDot === index ? 1 : 0.6
              }}
            />
          ))}
        </div>
      </div>

      <div className="fixed right-4 lg:right-14 z-40 w-auto max-w-[90%] md:max-w-none">
        <Chatbot/>
      </div>

      <section className="relative h-screen w-full overflow-hidden bg-gray-100" ref={firstSectionRef}>
        {/* Versión Mobile */}
        <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.p 
              className="text-base font-medium text-blue-950 tracking-wider mt-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              TRADICIÓN GASTRONÓMICA
            </motion.p>
            
            <motion.h1 
              className="space-y-2 relative px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="block text-3xl font-bold italic text-blue-950" style={{ fontFamily: 'Playfair Display, serif' }}>La Mejor</span>
              <span className="block text-4xl font-extrabold text-white">Opción del día</span>
              <span className="block text-3xl font-bold italic text-blue-950" style={{ fontFamily: 'Playfair Display, serif' }}>en tu ciudad</span>
            </motion.h1>

            <motion.div 
              className="flex items-center justify-center space-x-3 text-red-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xl font-semibold">Desde 1986</span>
              <div className="h-[2px] w-16 bg-red-600"></div>
            </motion.div>

            <motion.p 
              className="text-md text-white leading-relaxed px-4 italic " 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Más que un restaurante, somos parte de la historia gastronómica de Santa Marta. 
              Nuestros platos, preparados con ingredientes locales y recetas tradicionales, 
              te invitan a descubrir los auténticos sabores del Caribe colombiano.
            </motion.p>

            <motion.div 
              className="flex flex-col items-center space-y-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="/RestaurantLandingPage"
                className="relative inline-flex items-center px-6 py-3 bg-blue-950 text-yellow-400 rounded-full overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center space-x-2">
                  <span className="text-base font-medium">Ver Menú</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.a>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-blue-800">Horario</p>
                  <p className="text-sm text-blue-950 font-medium">Lun - Dom: 11am - 9pm</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Versión Desktop */}
        <div className="hidden md:flex relative w-full h-full items-center overflow-hidden">
          {/* Fondo animado y efectos */}
          <div className="absolute inset-0">
            {/* Fondo principal con gradiente y olas */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />
            <div className="absolute bottom-0 left-0 right-0 h-[20%]">
              <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
                <path 
                  fill="#172554" 
                  fillOpacity="1" 
                  d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Contenido del lado izquierdo */}
          <div className="w-1/2 pl-32 pr-20 relative">
            <motion.div className="space-y-8">
              <motion.div className="space-y-4">
                <motion.p 
                  className="text-sm md:text-base lg:text-lg font-medium text-blue-950 tracking-wider mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  TRADICIÓN GASTRONÓMICA
                </motion.p>
                
                <motion.h1 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="block text-4xl md:text-5xl lg:text-3xl 2xl:text-6xl xl:text-5xl font-bold italic text-blue-950">La Mejor</span>
                  <span className="block text-5xl md:text-6xl lg:text-4xl 2xl:text-7xl xl:text-6xl font-extrabold text-white">Opción del día</span>
                  <span className="block text-4xl md:text-5xl lg:text-3xl 2xl:text-6xl xl:text-5xl font-bold italic text-blue-950">en tu ciudad</span>
                </motion.h1>

                <motion.div 
                  className="flex items-center space-x-4 text-red-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-lg md:text-xl lg:text-2xl font-semibold">Desde 1986</span>
                  <div className="h-[2px] w-20 bg-red-600"></div>
                </motion.div>
              </motion.div>

              <motion.p 
                className="text-base md:text-lg lg:text-md 2xl:text-xl text-white leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Más que un restaurante, somos parte de la historia gastronómica de Santa Marta. 
                Nuestros platos, preparados con ingredientes locales y recetas tradicionales, 
                te invitan a descubrir los auténticos sabores del Caribe colombiano.
              </motion.p>

              <motion.div 
                className="flex items-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="/RestaurantLandingPage"
                  className="relative inline-flex items-center px-8 py-4 bg-blue-950 text-yellow-400 rounded-full overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center space-x-2">
                    <span className="text-lg font-medium">Ver Menú</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </motion.a>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-800">Horario</p>
                    <p className="text-blue-950 font-medium">Lun - Dom: 11am - 9pm</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contenido del lado derecho */}
          <div className="w-1/2 h-full relative flex items-center justify-center">
            <div className="relative w-full max-w-[800px] flex items-center">
              {/* Gotas de salsa */}
              <motion.div 
                className="absolute -top-10 -left-10 flex space-x-2 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-6 h-8 bg-blue-950 rounded-tl-full rounded-tr-full rounded-bl-full rotate-45" />
                <div className="w-4 h-6 bg-blue-950 rounded-tl-full rounded-tr-full rounded-bl-full rotate-12" />
              </motion.div>

              {/* Gotas de salsa */}
              <motion.div 
                className="absolute -bottom-10 -right-10 flex space-x-2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-4 h-6 bg-blue-950 rounded-tl-full rounded-tr-full rounded-bl-full -rotate-45" />
                <div className="w-6 h-8 bg-blue-950 rounded-tl-full rounded-tr-full rounded-bl-full -rotate-12" />
              </motion.div>

              {/* Imagen principal con animación */}
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={carouselData[currentImageIndex].image}
                  alt={carouselData[currentImageIndex].name}
                  className="w-[700px] h-auto bg-blue-950 rounded-bl-full rounded-tl-full rounded-tr-full shadow-xl shadow-black object-contain relative z-10 -ml-20 lg:-ml-32"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Flecha curva con precio */}
              <motion.div 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 w-full max-w-[280px]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative">
                  {/* Flecha curva */}
                  <svg 
                    width="100" 
                    height="60" 
                    viewBox="0 0 120 80" 
                    className="text-blue-950 absolute -left-20 top-1/2 transform -translate-y-1/2"
                  >
                    <path 
                      d="M0,40 Q30,40 60,20 T120,0" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path 
                      d="M110,-10 L120,0 L110,10" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  {/* Texto del precio con animación */}
                  <div className="bg-blue-950 backdrop-blur-sm rounded-xl p-4 relative">
                    <p className="text-base md:text-lg lg:text-xl font-bold text-white whitespace-nowrap mb-1">
                      ¡Por tan solo
                    </p>
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={carouselData[currentImageIndex].price}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-baseline"
                      >
                        <span className="text-3xl md:text-4xl lg:text-5xl font-black text-yellow-400">
                          ${carouselData[currentImageIndex].price.toLocaleString()}
                        </span>
                        <span className="text-sm md:text-base lg:text-lg font-normal text-yellow-400 ml-2">
                          pesitos!
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div ref={EspecialidadesRef}>
        <Especialidades ref={sections[1]}/>
      </div>

      <div ref={combosSectionRef}>
        <CombosBanano ref={sections[2]}/>
      </div>

      <div ref={LocacionesVideoRef}>
        <LocacionesVideo ref={sections[3]}/>
      </div>

      <div ref={EventosRef}>
        <Eventos ref={sections[4]}/>
      </div>

      <div ref={GaleriaRef}>
        <Galeria ref={sections[5]}/>
      </div>

      <div ref={ReseñasRef}>
        <Reseñas ref={sections[6]}/>
      </div>

      <Footer/>
    </section>
  );
};

export default Inicio;
