import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';
import { 
  faShoppingCart, // Corrige aquí
} from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa Font Awesome
  
  const Nosotros = () => {
    const dishes = [
      {
        src: "/img/YEI02214.jpg",
        title: "Del Mar",
        description:
          "La cazuela de mariscos es un plato típico de la gastronomía colombiana y ecuatoriana. Una delicia que combina mariscos frescos cocidos al horno en una cremosa salsa a base de leche de coco y plátano verde rayado, perfecta para los amantes de los sabores tropicales.",
      },
      {
        src: "/img/YEI02152.jpg",
        title: "Asados",
        description:
          "Los asados son una tradición colombiana que destaca por sus cortes de carne jugosos, marinados con especias locales y asados a la parrilla. Acompañados de papas criollas, arepas y ají, son una experiencia perfecta para disfrutar en familia.",
      },
      {
        src: "/img/YEI02244.jpg",
        title: "Creppes",
        description:
          "Los creppes en Colombia son una fusión de lo dulce y lo salado. Finas capas de masa rellenas de ingredientes variados como pollo, champiñones o frutas frescas, servidos con salsas únicas que los hacen irresistibles para cualquier ocasión.",
      },
    ];
    
    
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
    <div className="font-sans bg-white text-gray-800">
       
       <header
        className={`bg-transparent flex w-full h-[12vh] 2xl:h-[13vh] items-center justify-around 2xl:justify-between px-[8%] 2xl:px-[18%] fixed z-50 transition-all duration-500 transform   ${
          isScrolled ? 'amarillo' : 'top-18'
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
          <div className='flex justify-around w-full sm:hidden'>
            <p className='font-gotham azul-text font-extrabold text-3xl  w-[50%] '>
              DESDE 1986            
            </p>
        <button className="2xl:hidden text-white w-2" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} fa-2x`} aria-hidden="true"></i>
        </button>
          </div>

          {/* Search Bar and Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="hidden xl:flex items-center space-x-4 text-white">
              <div className="text-right">
                <span className="font-bold font-gotham ">Llama a la orden</span><br />
                <span className="text-white text-2xl 2xl:text-3xl font-extrabold">54 548 779 654</span>
              </div>
              <a href='/carrito' className="rojo px-4 py-2 rounded-full text-white flex items-center space-x-2 hover:bg-red-500" onClick={'/carrito'}>
                <FontAwesomeIcon icon={faShoppingCart} /> 
                <span>Tu carrito está vacío</span>
                
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
      </header>

      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center h-screen"
  style={{
    backgroundImage: "url('/img/YEI04687.jpg')", // Cambia a tu ruta de imagen
  }}
>
  <div className="absolute inset-0 bg-white bg-opacity-10 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h2 className="text-6xl font-extrabold mb-6">Gastronomia Desde 1986</h2>
      <p className="text-xl font-light mb-6">
        Platos únicos que combinan sabores frescos y la mejor calidad.
      </p>
      <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
        Contactanos
      </button>
    </div>    
  </div>
</section>



      {/* Dishes Section */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <div key={index} className="group relative flex flex-col items-center">
              <div className="w-full h-72 overflow-hidden rounded-xl">
                <img
                  src={dish.src}
                  alt={dish.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-4xl font-bold mb-2 azul-text">{dish.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{dish.description}</p>
              </div>
              <button className="mt-6 px-6 py-2 amarillo text-white text-sm font-bold rounded-md hover:bg-gray-800 transition">
                Ver
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer/>

      
    </div>
  );
};

export default Nosotros;