import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='  h-[3rem] bg-gray-200 flex justify-end w-full items-center transform transition-all duration-200'>
        <p className='mr-8'>Menu PDF</p>
      </div>

      <header
        className={`bg-orange-500 shadow-md flex w-full h-[10vh] items-center justify-between px-8 fixed z-50 transition-all duration-500 transform ${
          isScrolled ? 'top-0' : 'top-18'
        }`}
      >
        {/* Logo Section */}
        <div className='flex items-center space-x-4'>
          <img src="public/img/logo_el_banano-removebg-preview.png" alt="Logo" className="h-[12vh] w-auto" />
          <nav className="hidden md:flex text-brown-800 h-[50px] flex justify-center items-center">
  <div className="flex space-x-8 text-md 2xl:text-xl  text-white">
    <a href="/menu" className="relative transition hover:text-gray-800 py-2 group">
      Menu
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-1/4"></span>
    </a>
    <a href="/" className="relative transition hover:text-gray-800 py-2 group">
      Inicio
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-1/4"></span>
    </a>
    <a href="#rewards" className="relative transition hover:text-gray-800 py-2 group">
      Sobre Nosotros
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-1/4"></span>
    </a>
    <a href="#values" className="relative transition hover:text-gray-800 py-2 group">
      Contacto
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-1/4"></span>
    </a>
  </div>
</nav>

        </div>

        <div className=' w-[30%] flex justify-end '>
  <input 
    type="search" 
    className='bg-gray-700 text-gray-300 rounded-md px-3 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 md:w-[50%]' 
    placeholder="Buscar..." 
    value="" 
  />
</div>



        {/* User and Cart Icons */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-bold raleway text-white">
          <a href="/find-us" className="flex items-center space-x-2 text-brown-800 hover:text-gray-800 transition">
            <i className="fa fa-map-marker fa-lg"></i>
            <span>Busca Tu Completo</span>
          </a>
          <a href="/login" className="flex items-center space-x-2 text-brown-800 hover:text-blue-700 transition">
            <i className="fa fa-user fa-lg"></i>
            <span>Registrarse / Entrar</span>
          </a>
          <a href="/cart" className="flex items-center space-x-2 text-brown-800 hover:text-blue-700 transition">
            <i className="fa fa-shopping-bag fa-lg"></i>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-blue-800" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} fa-2x`} aria-hidden="true"></i>
        </button>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white text-gray-700 ">
          <div className="flex flex-col items-center space-y-16 py-4 pt-36">
            <a href="/menu" className="transition hover:text-blue-800">MENU</a>
            <a href="/" className="transition hover:text-blue-800">INICIO</a>
            <a href="#rewards" className="transition hover:text-blue-800">SOBRE NOSOTROS</a>
            <a href="#values" className="transition hover:text-blue-800">CONTACTO</a>
            
            <div className='flex space-x-4'>
              <button className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-600 transition text-white text-sm">
               Registrase
              </button>
              <button className="bg-blue-800 px-4 rounded hover:bg-blue-600 transition text-white text-sm">
                Entrar
              </button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
