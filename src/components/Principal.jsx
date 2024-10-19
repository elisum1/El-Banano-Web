import React, { useEffect, useState } from "react";

;


const RestaurantLandingPage = () => {

    // Función para desplazar a la sección indicada
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <div className="sm:h-[100vh] h-[60vh] w-full amarillo m-auto">

<div className="w-[29%] lg:w-[50%] sm:h-[100%] h-[50%]  lg:h-[58.5%] sm:flex flex-col items-center justify-center m-auto  hidden">
                {/* Imagen del Título rotada con efecto de aparición */}
                <p className="w-[100%] text-3xl sm:text-5xl 2xl:text-7xl font-bold font-gotham azul-text sm:text-center  "> EL ORIGINAL DESDE 1986</p>
            </div>
            <div className="w-full h-[100%] sm:hidden  bottom-32 flex justify-center items-center"> 
                <img src="/img/logo_el_banano-removebg-preview.png" className="w-[400px] h-[400px]" alt="" />
            </div>
            
            {/* Imagen centrada y ajustada con efecto de aparición */}
            <div className="flex justify-center  w-full h-auto ">
                <img
                    src="/img/Captura_de_pantalla_2024-10-15_151047-removebg-preview.png"
                    alt="Picada de la Casa"
                    className="object-contain sm:h-[100%] lg:h-[50%] lg:w-[80%] sm:w-[100%] hidden border-none sm:flex flex-col relative bottom-[20%]  fade-in-image"
                />
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
