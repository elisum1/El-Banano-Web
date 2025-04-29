import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
        <div className="container mx-auto px-7 h-full flex items-center justify-around border-b-[2px] border-yellow-600/50">
          {/* Logo Section */}
          <a href="/" className="flex items-center">
            <img
              src="/img/logo_el_banano-removebg-preview.png"
              alt="El Banano Logo"
              className="h-[10vh] sm:h-[12vh] w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-6  text-xl font-semibold ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            <a href="/" className={`transition-colors ${isScrolled ? 'hover:text-yellow-500' : 'hover:text-white'}`}>INICIO</a>
            <a href="/RestaurantLandingPage" className={`transition-colors ${isScrolled ? 'hover:text-yellow-500' : 'hover:text-white'}`}>MENU</a>
            <a href="/nosotros" className={`transition-colors ${isScrolled ? 'hover:text-yellow-500' : 'hover:text-white'}`}>SOBRE NOSOTROS</a>
            <a href="/contacto" className={`transition-colors ${isScrolled ? 'hover:text-yellow-500' : 'hover:text-white'}`}>CONTACTO</a>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setShowCartModal(true)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                isScrolled ? 'bg-red-800 text-white' : 'bg-red-500 text-white'
              } hover:bg-red-600 transition-colors`}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="hidden lg:inline">Tu carrito</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 mb-1.5 transition-all ${
              isScrolled ? 'bg-white' : 'bg-white'
            } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 mb-1.5 transition-all ${
              isScrolled ? 'bg-white' : 'bg-white'
            } ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all ${
              isScrolled ? 'bg-white' : 'bg-white'
            } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`fixed top-[12vh] left-0 w-full bg-blue-950 z-40 transition-all duration-300 ${
        isOpen ? 'max-h-[calc(100vh-12vh)]' : 'max-h-0'
      } overflow-hidden`}>
        <nav className="flex flex-col items-center py-8 space-y-6">
          <a href="/" className="text-white text-lg font-semibold hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>
            INICIO
          </a>
          <a href="/RestaurantLandingPage" className="text-white text-lg font-semibold hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>
            MENU
          </a>
          <a href="/nosotros" className="text-white text-lg font-semibold hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>
            SOBRE NOSOTROS
          </a>
          <a href="/contacto" className="text-white text-lg font-semibold hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>
            CONTACTO
          </a>
        </nav>
      </div>

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