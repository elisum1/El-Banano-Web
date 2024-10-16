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
      <header
        className={`bg-yellow-400  flex w-full h-[15vh] 2xl:h-[15vh] items-center justify-around 2xl:justify-between px-[3%] 2xl:px-[18%] fixed z-50 transition-all duration-500 transform   ${
          isScrolled ? 'top-0' : 'top-18'
        }`}
      >
        {/* Logo Section */}
        <div className='w-full flex justify-between border-b-[0.5px] border-yellow-200/70 p-2'>

    
        <div className='flex items-center space-x-4 '>
          <img
            src="/img/logo_el_banano-removebg-preview.png"
            alt="Pizzaro Logo"
            className="h-[12vh] w-auto"
          />
          <img src="/img/El_banaon-removebg-preview.png" alt="" className='w-56' />

          <nav className="hidden md:flex text-white space-x-8 text-md 2xl:text-md">
            <a href="/" className="flex flex-col items-center hover:text-gray-800">
              <span>Inicio</span>
            </a>
            <a href="/menu" className="flex flex-col items-center hover:text-gray-800">
              <span>Menu</span> 
            </a>
            <a href="/menu" className="flex flex-col items-center hover:text-gray-800">
              <span>Sobre nosotros</span> 
            </a>
            <a href="/menu" className="flex flex-col items-center hover:text-gray-800">
              <span>Contacto</span> 
            </a>
            {/* Add other category links similarly */}
          </nav>
        </div>

        {/* Search Bar and Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4 text-white">
            <div className="text-right">
              <span className="font-bold">LLama a la orden</span><br />
              <span className="text-white text-3xl font-extrabold">54 548 779 654</span>
            </div>
            <button className="bg-green-500 px-4 py-2 rounded-full text-white flex items-center space-x-2 hover:bg-green-600">
              <i className="fa fa-shopping-cart"></i>
              <span>Your Cart is Empty</span>
            </button>
          </div>

          
        </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} fa-2x`} aria-hidden="true"></i>
        </button>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-red-600 text-white text-lg">
          <div className="flex flex-col items-center space-y-4 py-6">
            <a href="/pizza" className="hover:text-yellow-400">Pizza</a>
            <a href="/burgers" className="hover:text-yellow-400">Burgers</a>
            {/* Add other mobile links */}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
