import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='home' className="overflow-x-hidden">
      <header className={`w-full h-[12vh] 2xl:h-[13vh] fixed z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-950 shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto h-full flex items-center justify-between px-4 relative">
          {/* Botón de menú */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition-colors z-20 ${
              isScrolled ? 'text-white hover:bg-blue-900' : 'text-white hover:bg-yellow-500'
            }`}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
          </button>
   

{/* Logo centrado con rayos de sol */}
<div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
  <div className="relative">
    {/* Rayos de sol */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute top-1/2 left-1/2 h-1 origin-left ${
            isScrolled ? 'bg-blue-400/30' : 'bg-yellow-600/30'
          }`}
          style={{
            width: `${Math.min(window.innerHeight * 0.12, 300)}px`,
            rotate: `${i * 30}deg`,
            translateY: i >= 0 ? '-20%' : '-50%', // Ajustamos la posición vertical para los rayos inferiores
          }}
          animate={{
            scale: [1, 1.2, 1, 1.1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
    
    {/* Logo */}
    <motion.a 
      href="/" 
      className="block relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src="/img/logo_el_banano-removebg-preview.png"
        alt="El Banano Logo"
        className="h-[10vh] sm:h-[12vh] w-auto"
      />
    </motion.a>
  </div>
</div>

          {/* Carrito */}
          <button 
            onClick={() => setShowCartModal(true)}
            className={`p-2 rounded-lg transition-colors z-20 ${
              isScrolled ? 'text-white hover:bg-blue-900' : 'text-white hover:bg-yellow-500'
            }`}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
          </button>
        </div>
      </header>

      {/* Menú lateral */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-80 h-screen bg-blue-950 z-40 shadow-2xl"
          >
            <div className="h-[12vh] 2xl:h-[13vh] flex items-center justify-center border-b border-blue-900">
              <img
                src="/img/logo_el_banano-removebg-preview.png"
                alt="El Banano Logo"
                className="hidden sm:block h-[10vh] w-auto"
              />
            </div>
            
            <nav className="p-6 space-y-6">
              <a 
                href="/" 
                className="block text-white text-lg font-semibold hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                INICIO
              </a>
              <a 
                href="/RestaurantLandingPage" 
                className="block text-white text-lg font-semibold hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                MENU
              </a>
              <a 
                href="/nosotros" 
                className="block text-white text-lg font-semibold hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                SOBRE NOSOTROS
              </a>
              <a 
                href="/contacto" 
                className="block text-white text-lg font-semibold hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACTO
              </a>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-900">
              <div className="flex justify-center space-x-6">
                <a
                  href="https://instagram.com/elbanano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-white hover:text-yellow-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://facebook.com/elbanano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-white hover:text-yellow-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para cerrar el menú */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-30"
          />
        )}
      </AnimatePresence>

      {/* Modal del Carrito */}
      <AnimatePresence>
        {showCartModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCartModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md w-full text-center relative"
              onClick={e => e.stopPropagation()}
            >
              <img
                src="/img/logo_el_banano-removebg-preview.png"
                alt="El Banano Logo"
                className="h-24 mx-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                ¡Muy Pronto!
              </h2>
              <p className="text-gray-700 mb-6">
                El Banano muy pronto tendrá E-Commerce. ¡Síguenos en nuestras redes para mantenerte informado!
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://instagram.com/elbanano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-pink-600 hover:text-pink-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://facebook.com/elbanano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
              <button
                onClick={() => setShowCartModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Header;