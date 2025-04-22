import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import MenuDigital from "./menuDigital";


const RestaurantLandingPage = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const [initialSection, setInitialSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsHeaderVisible(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setCurrentComponent(location.state.scrollTo);
      setInitialSection(location.state.initialSection || null);
    }
  }, [location.state]);

  const handleShowMenuDigital = () => {
    setCurrentComponent('menuDigital');
    setInitialSection(null);
  };

  const handleReturnToLanding = () => {
    setCurrentComponent(null);
    setInitialSection(null);
  };

  const handleGoToHome = () => {
    navigate('/');
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'menuDigital':
        return (
          <MenuDigital 
            onReturnToLanding={handleReturnToLanding}
            initialSection={initialSection}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {currentComponent ? (
          <motion.div
            key={currentComponent}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {renderComponent()}
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[100vh] sm:h-[100vh] w-full overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500"
          >
            <div className="absolute inset-0 overflow-hidden z-1">
              <div className="absolute inset-0 bg-[url('/img/banana-pattern.png')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            <div className="relative h-full w-full max-w-7xl mx-auto flex flex-col justify-center items-center px-4 sm:px-8 z-10">
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
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                />
              </motion.div>

              <div className="hidden sm:flex flex-col items-center text-center mb-24">
                <motion.div
                  className="mb-2 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.img
                    src="/img/logo_el_banano-removebg-preview.png"
                    className="w-[42vh] h-[42vh] object-contain"
                    alt="Logo"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 5, 0] }}
                  />
                  <span className="inline-block px-4 py-2 bg-black text-yellow-400 text-sm font-semibold tracking-widest rounded-full border-2 border-yellow-400/50 mt-4">
                    DESDE 1986
                  </span>
                </motion.div>
                
                <motion.h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium italic">
                  <span className="text-red-600 [text-shadow:_2px_2px_0_#fecaca]">
                    AUTÉNTICA TRADICIÓN
                  </span>
                </motion.h2>
                
                <motion.p className="mt-6 text-xl md:text-2xl text-gray-800 font-light max-w-2xl">
                  Sabores que perduran, experiencias que se recuerdan
                </motion.p>
              </div>

              <motion.div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 sm:gap-6">
                <motion.button
                  onClick={handleShowMenuDigital}
                  className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium text-sm sm:text-base shadow-lg uppercase tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Menú
                </motion.button>

                <motion.button
                  onClick={handleGoToHome}
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-medium text-sm sm:text-base shadow-lg uppercase tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Volver al inicio
                </motion.button>
              </motion.div>
            </div>

            {isHeaderVisible && <Header />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RestaurantLandingPage;