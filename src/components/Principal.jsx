import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFish, 
    faCoffee, 
    faHamburger, 
    faIceCream, 
    faDrumstickBite,
    faLayerGroup, 
    faBacon,
    faHome,
    faUtensils,
    faAddressBook,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';


const RestaurantLandingPage = () => {

    // Función para desplazar a la sección indicada
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <div className="h-[100vh] w-full bg-yellow-400">
            <div className="w-[64.2%] m-auto h-[9%] flex items-center justify-center relative top-[15%] font-normal">
  {/* Menú de Iconos */}
  <nav className="hidden md:flex justify-center space-x-8 p-4 w-full fixed top-[15%] z-10 bg-yellow-400 2xl:mb-0 text-2xl 2xl:text-4xl">
    <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
      <FontAwesomeIcon icon={faDrumstickBite} /> {/* Ícono de Carnes */}
      <p className="text-[15px]">El Completo</p>
    </div>
    <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
      <FontAwesomeIcon icon={faFish} /> {/* Ícono de Pescados */}
      <p className="text-[15px]">Del mar</p>
    </div>
    <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
      <FontAwesomeIcon icon={faCoffee} /> {/* Ícono de Bebidas */}
      <p className="text-[15px]">Bebidas</p>
    </div>
    <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
      <FontAwesomeIcon icon={faHamburger} /> {/* Ícono de Comida Rápida */}
      <p className="text-[15px]">Comida Rápida</p>
    </div>
    <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
      <FontAwesomeIcon icon={faIceCream} /> {/* Ícono de Entradas */}
      <p className="text-[15px]">Entradas</p>
    </div>
    <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
      <FontAwesomeIcon icon={''} /> {/* Ícono de Pastas */}
      <p className="text-[15px]">Mixtos</p>
    </div>
    <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
      <FontAwesomeIcon icon={faLayerGroup} /> {/* Ícono de Lasagnas */}
      <p className="text-[15px]">Del mar</p>
    </div>
    <div className="text-white cursor-pointer hover:text-gray-800 transition duration-300 flex items-center gap-3">
      <FontAwesomeIcon icon={faBacon} /> {/* Ícono de Entradas */}
      <p className="text-[15px]"></p>
    </div>
  </nav>
</div>


        {/* Contenido principal */}
        <div className="relative flex flex-col items-center justify-center w-full h-[60%] pt-20">
            
            {/* Íconos laterales de navegación con FontAwesome */}
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
                <div 
                    className="bg-blue-800 p-3 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 transition duration-300"
                    onClick={() => scrollToSection('home')}
                >
                    <FontAwesomeIcon icon={faHome} className="w-6 h-6" /> {/* Ícono de Inicio */}
                </div>
                <div 
                    className="bg-blue-800 p-3 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 transition duration-300"
                    onClick={() => scrollToSection('menu')}
                >
                    <FontAwesomeIcon icon={faUtensils} className="w-6 h-6" /> {/* Ícono de Menú */}
                </div>
                <div 
                    className="bg-blue-800 p-3 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 transition duration-300"
                    onClick={() => scrollToSection('contact')}
                >
                    <FontAwesomeIcon icon={faAddressBook} className="w-6 h-6" /> {/* Ícono de Contacto */}
                </div>
                <div 
                    className="bg-blue-800 p-3 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-blue-700 transition duration-300"
                    onClick={() => scrollToSection('about')}
                >
                    <FontAwesomeIcon icon={faInfoCircle} className="w-6 h-6" /> {/* Ícono de Nosotros */}
                </div>
            </div>

            <div className="w-[29%] lg:w-[13%] h-[140%]  lg:h-[100%] flex flex-col items-center ">
                {/* Imagen del Título rotada con efecto de aparición */}
                <img className="w-[100%]  -rotate-90 fade-in-image" src="/img/titulo-removebg-preview.png" alt="" />
            </div>
            
            {/* Imagen centrada y ajustada con efecto de aparición */}
            <div className="flex items-center justify-center w-full mt-4">
                <img
                    src="/img/Captura_de_pantalla_2024-10-15_151047-removebg-preview.png"
                    alt="Picada de la Casa"
                    className="object-contain h-[100%] lg:h-auto lg:w-[80%] w-[100%] border-none  relative top-[20%] fade-in-image"
                />
            </div>

        </div>

        {/* Secciones a las que se desplazará */}
        <section id="home" className="h-screen">
   
        </section>

        <section id="menu" className="h-screen ">
            
            {/* Contenido de la sección */}
        </section>

        <section id="contact" className="">
           
            {/* Contenido de la sección */}
        </section>

        <section id="about" className=" ">
            
            {/* Contenido de la sección */}
        </section>
    </div>
    )     
};

export default RestaurantLandingPage;
