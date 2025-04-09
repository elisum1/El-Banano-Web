import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='home'>
      <header className={`w-full h-[12vh] 2xl:h-[13vh] fixed z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-800 shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo Section - Clickable */}
          <a href="/" className="flex items-center">
            <img
              src="/img/logo_el_banano-removebg-preview.png"
              alt="El Banano Logo"
              className="h-[10vh] sm:h-[12vh] w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-6 lg:space-x-8 text-xl font-light ${
            isScrolled ? 'text-white' : 'text-black'
          }`}>
            <a href="/" className="hover:text-yellow-500 transition-colors">Inicio</a>
            <a href="/RestaurantLandingPage" className="hover:text-yellow-500 transition-colors">Menú</a>
            <a href="/nosotros" className="hover:text-yellow-500 transition-colors">Sobre Nosotros</a>
            <a href="/contacto" className="hover:text-yellow-500 transition-colors">Contacto</a>
          </nav>

          {/* Right Section - Phone and Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <div className={`text-right ${isScrolled ? 'text-white' : 'text-white'}`}>
              <span className="block text-sm font-light">Llama a la orden</span>
              <span className="block text-xl font-bold">54 548 779 654</span>
            </div>
            <a href='/carrito' className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
              isScrolled ? 'bg-red-800 text-white' : 'bg-red-500 text-white'
            } hover:bg-red-600 transition-colors`}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="hidden lg:inline">Tu carrito</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 mb-1.5 transition-all ${
              isScrolled ? 'bg-blue-800' : 'bg-white'
            } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 mb-1.5 transition-all ${
              isScrolled ? 'bg-blue-800' : 'bg-white'
            } ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all ${
              isScrolled ? 'bg-blue-800' : 'bg-white'
            } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`fixed top-[12vh] left-0 w-full bg-yellow-400 z-40 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <nav className="flex flex-col items-center space-y-6 py-8">
          <a 
            href="/" 
            className="text-blue-800 text-xl font-semibold hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="/RestaurantLandingPage" 
            className="text-blue-800 text-xl font-semibold hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Menú
          </a>
          <a 
            href="/nosotros" 
            className="text-blue-800 text-xl font-semibold hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Sobre Nosotros
          </a>
          <a 
            href="/contacto" 
            className="text-blue-800 text-xl font-semibold hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
          <div className="pt-4 flex flex-col items-center">
            <span className="text-blue-800 font-semibold">Llama a la orden</span>
            <span className="text-blue-800 text-xl font-bold">54 548 779 654</span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;