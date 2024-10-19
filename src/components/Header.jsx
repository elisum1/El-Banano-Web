import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//     faFish, 
//     faCoffee, 
//     faHamburger, 
//     faIceCream, 
//     faDrumstickBite,
//     faLayerGroup, 
//     faBacon,
//     faHome,
//     faUtensils,
//     faAddressBook,
//     faInfoCircle,
//     faShoppingCart, // Corrige aquí
// } from '@fortawesome/free-solid-svg-icons';

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
      <header
        className={`amarillo flex w-full h-[15vh] 2xl:h-[15vh] items-center justify-around 2xl:justify-between px-[8%] 2xl:px-[18%] fixed z-50 transition-all duration-500 transform   ${
          isScrolled ? 'top-0' : 'top-18'
        }`}
      >
        {/* Logo Section */}
        <div className='w-full flex justify-between border-b-[0.5px] border-yellow-200/70 sm:p-2 p-6'>
          <div className='hidden sm:flex items-center space-x-4 transition-all'>
            <img
              src="/img/logo_el_banano-removebg-preview.png"
              alt="Pizzaro Logo"
              className="h-[14vh] 2xl:h-[15vh] w-[14vh] 2xl:w-[15vh]"
            />
            <h2 className='font-gotham font-extrabold azul-text text-4xl md:text-2xl 2xl:text-4xl'>EL BANANO</h2>
            <nav className="hidden xl:flex text-white space-x-8 text-md 2xl:text-md font-gotham font-semibold">
              <a href="/" className="flex flex-col items-center hover:text-gray-800">
                <span className=''>Inicio</span>
              </a>
              <a href="/menu" className="flex flex-col items-center hover:text-gray-800">
                <span>Menu</span> 
              </a>
              <a href="/nosotros" className="flex flex-col items-center hover:text-gray-800">
                <span>Sobre nosotros</span> 
              </a>
              <a href="/" className="flex flex-col items-center hover:text-gray-800">
                <span>Contacto</span> 
              </a>
            </nav>
          </div>
          <div>
            <p className='font-gotham azul-text font-extrabold text-4xl sm:hidden'>
              DESDE 1986            
            </p>
          </div>

          {/* Search Bar and Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="hidden xl:flex items-center space-x-4 text-white">
              <div className="text-right">
                <span className="font-bold font-gotham ">Llama a la orden</span><br />
                <span className="text-white text-2xl 2xl:text-3xl font-extrabold">54 548 779 654</span>
              </div>
              <button className="rojo px-4 py-2 rounded-full text-white flex items-center space-x-2 hover:bg-red-500">
                {/* <FontAwesomeIcon icon={faShoppingCart} /> Usar el icono de carrito */}
                <span>Tu carrito está vacío</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="xl:hidden text-white" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} fa-2x`} aria-hidden="true"></i>
        </button>
      </header>

      <div className="w-[64.2%] m-auto h-[9%] flex items-center justify-center relative top-[15%]">
        {/* Menú de Iconos */}
        <nav className="hidden md:flex justify-center space-x-8 p-4 w-full fixed top-[15%] z-10 2xl:mb-0 text-2xl 2xl:text-4xl amarillo">
          <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
            {/* <FontAwesomeIcon icon={faDrumstickBite} /> */}
            <p className="text-[15px]">El Completo</p>
          </div>
          <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
            {/* <FontAwesomeIcon icon={faFish} /> */}
            {/* <p className="text-[15px]">Del mar</p> */}
          </div>
          <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
            {/* <p className="text-[15px]">Bebidas</p> */}
          </div>
          <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
            {/* <FontAwesomeIcon icon={faHamburger} /> */}
            <p className="text-[15px]">Comida Rápida</p>
          </div>
          <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
            {/* <FontAwesomeIcon icon={faIceCream} /> */}
            <p className="text-[15px]">Entradas</p>
          </div>
          <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
            {/* <FontAwesomeIcon icon={faLayerGroup} /> */}
            <p className="text-[15px]">Del mar</p>
          </div>
          <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
            {/* <FontAwesomeIcon icon={faBacon} /> */}
            <p className="text-[15px]"></p>
          </div>
        </nav>
      </div>

      {/* Contenido principal */}
      <div className="relative flex flex-col items-center justify-center w-full h-[60%] pt-20">
        {/* Íconos laterales de navegación con FontAwesome */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
          <div 
            className="azul p-3 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 transition duration-300"
            onClick={() => scrollToSection('home')}
          >
            {/* <FontAwesomeIcon icon={faHome} className="w-6 h-6" /> */}
          </div>
          <div 
            className="azul p-3 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 transition duration-300"
            onClick={() => scrollToSection('menu')}
          >
            {/* <FontAwesomeIcon icon={faUtensils} className="w-6 h-6" /> */}
          </div>
          <div 
            className="azul p-3 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 transition duration-300"
            onClick={() => scrollToSection('contact')}
          >
            {/* <FontAwesomeIcon icon={faAddressBook} className="w-6 h-6" /> */}
          </div>
          <div 
            className="azul p-3 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 transition duration-300"
            onClick={() => scrollToSection('about')}
          >
            {/* <FontAwesomeIcon icon={faInfoCircle} className="w-6 h-6" /> */}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="xl:hidden bg-yellow-300 text-white text-lg ">
          <div className="flex flex-col items-center space-y-4 py-52 ">
            <a href="/" className="flex flex-col items-center hover:text-gray-800">Inicio</a>
            <a href="/menu" className="flex flex-col items-center hover:text-gray-800">Menú</a>
            <a href="/nosotros" className="flex flex-col items-center hover:text-gray-800">Sobre nosotros</a>
            <a href="/contacto" className="flex flex-col items-center hover:text-gray-800">Contacto</a>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
