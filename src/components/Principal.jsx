import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { FaHome } from "react-icons/fa";
import Header from "./Header";
import MenuDigital from "./MenuDigital";

const RestaurantLandingPage = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate(); // Hook de navegación

  useEffect(() => {
    const handleScroll = () => setIsHeaderVisible(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleReturnToLanding = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowMenu(false);
      setIsExiting(false);
    }, 500);
  };

  const handleGoToHome = () => {
    navigate('/'); // Navega a la ruta raíz
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showMenu ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <MenuDigital onReturnToLanding={handleReturnToLanding} />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[60vh] sm:h-[100vh] w-full overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500"
          >
            {/* Fondo decorativo */}
            <div className="absolute inset-0 overflow-hidden z-1">
              <div className="absolute inset-0 bg-[url('/img/banana-pattern.png')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative h-full w-full max-w-7xl mx-auto flex flex-col justify-center items-center px-4 sm:px-8 z-10">
              
              {/* Logo interactivo mobile */}
              <motion.div 
                className="w-full h-full sm:hidden flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.img 
                  src="/img/logo_el_banano-removebg-preview.png" 
                  className="w-64 h-64 sm:w-80 sm:h-80 object-contain filter drop-shadow-xl cursor-pointer" 
                  alt="Logo"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.95 }}
                />
              </motion.div>

              {/* Contenido desktop */}
              <div className="hidden sm:flex flex-col items-center text-center mb-24">
                <motion.div
                  className="mb-2 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.img
                    src="/img/logo_el_banano-removebg-preview.png"
                    className="w-[35vh] h-[35vh] object-contain"
                    alt="Logo"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  />
                  <span className="inline-block px-4 py-2 bg-black text-yellow-400 text-sm font-semibold tracking-widest rounded-full border-2 border-yellow-400/50 mt-4">
                    DESDE 1986
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-blue-900 [text-shadow:_4px_4px_0_white,_-4px_-4px_0_white,_4px_-4px_0_white,_-4px_4px_0_white]">
                    EL BANANO
                  </span>
                </motion.h1>
                
                <motion.h2 
                  className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-red-600 [text-shadow:_2px_2px_0_#fecaca,_-2px_-2px_0_#fecaca,_2px_-2px_0_#fecaca,_-2px_2px_0_#fecaca]">
                    AUTÉNTICA TRADICIÓN
                  </span>
                </motion.h2>
                
                <motion.p 
                  className="mt-6 text-xl md:text-2xl text-gray-800 font-light max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Sabores que perduran, experiencias que se recuerdan
                </motion.p>
              </div>

              {/* Botones */}
              <motion.div 
                className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  onClick={handleShowMenu}
                  className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium text-sm sm:text-base transition-all duration-300 shadow-lg uppercase tracking-wider relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Ver Menú</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>

                <motion.button
                  onClick={handleGoToHome} // Usamos la nueva función de navegación
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-medium text-sm sm:text-base transition-all duration-300 shadow-lg uppercase tracking-wider relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Volver al inicio</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </motion.div>
            </div>

            {/* Usa tu componente Header personalizado */}
            {isHeaderVisible && <Header />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RestaurantLandingPage;