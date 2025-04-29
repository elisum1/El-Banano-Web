import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reseñas from "../components/Reseñas";
import Galeria from "../components/Galeria";
import Especialidades from "../components/Especialidades";
import Chatbot from "../components/Chatbot";
import LocacionesVideo from "../components/LocacionesVideo";
import CombosBanano from "../components/CombosBanano";
import Loading from "../components/Loading";


const Inicio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const dotsMenuRef = useRef(null);
  const firstSectionRef = useRef(null);
  const combosSectionRef = useRef(null);
  const LocacionesVideoRef = useRef(null);
  const GaleriaRef = useRef(null);
  const EspecialidadesRef = useRef(null);
  const ReseñasRef = useRef(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(loadingTimer);
  }, []);
  
  const sectionRefs = useRef([]);
  const sections = [
    firstSectionRef, 
    EspecialidadesRef,
    combosSectionRef, 
    LocacionesVideoRef,
    GaleriaRef,
    ReseñasRef, 
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dotsMenuRef.current && !dotsMenuRef.current.contains(event.target)) {
        setShowDotsMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (firstSectionRef.current) {
        const firstSectionHeight = firstSectionRef.current.offsetHeight;
        setHeaderVisible(window.scrollY > firstSectionHeight * 0.5);
      }
      setIsScrolled(window.scrollY > 0);
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section, index) => {
        if (section.current && scrollPosition > section.current.offsetTop) {
          setActiveDot(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (index) => {
    if (sections[index]?.current) {
      const yOffset = -80;
      const y = sections[index].current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section id='home' className="min-h-screen overflow-x-hidden">
      <Header/>
      <AnimatePresence>
        {(headerVisible || showDotsMenu) && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 w-full z-50"
          >
            <Header 
              isOpen={isOpen} 
              toggleMenu={() => setIsOpen(!isOpen)} 
              isScrolled={isScrolled}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-12 left-0 right-0 z-40 hidden md:flex justify-between items-center px-4 lg:px-8">
        <div className="flex space-x-4 lg:space-x-6 pl-4 lg:pl-20">
          <a href="#" className="text-gray-800 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>

        <div className="flex space-x-3 bg-black bg-opacity-30 px-3 py-2 rounded-full">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className="w-2.5 h-2.5 rounded-full focus:outline-none transition-all duration-300"
              style={{
                backgroundColor: activeDot === index ? '#3b82f6' : 'white',
                transform: activeDot === index ? 'scale(1.5)' : 'scale(1)',
                opacity: activeDot === index ? 1 : 0.6
              }}
            />
          ))}
        </div>
      </div>

      <div className="fixed right-4 lg:right-14 z-40 w-auto max-w-[90%] md:max-w-none">
        <Chatbot/>
      </div>

      <section className="relative h-screen w-full overflow-hidden bg-gray-100" ref={firstSectionRef}>
        {/* Versión Mobile */}
        <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500">
          <img
            src="/img/logo_el_banano-removebg-preview.png" 
            alt="El Banano Logo"
            className="h-[150px] w-auto mb-6"
          />
          <motion.h1 
            className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4 text-center px-2"
            style={{
              textShadow: '2px 2px 0px #FCD34D, 4px 4px 0px rgba(30, 58, 138, 0.5)'
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            EL BANANO
          </motion.h1>
          
          <p className="text-lg font-medium text-red-500 mb-4">
            DESDE 1986
          </p>
          <h2 className="text-xl text-gray-800 mb-3 font-semibold text-center px-2">
            AHORA TENEMOS COMBOS !!
          </h2>
          <p className="text-base text-gray-900 text-center max-w-[90%] px-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
        </div>

        {/* Versión Desktop */}
        <div className="hidden md:flex relative w-full h-full items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500">
          <div className="container mx-auto px-4 lg:px-6 flex flex-col items-center">
            <div className="w-full flex flex-col items-center h-[50vh]">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] font-extrabold text-blue-900 mb-6 text-center"
                style={{
                  textShadow: '4px 4px 0px #FCD34D, 8px 8px 0px rgba(30, 58, 138, 0.5)'
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                EL BANANO
              </motion.h1>

              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md justify-center flex">
                <h2 className="py-2 text-white font-extralight text-center text-xl md:text-2xl bg-red-500 rounded-md px-4">
                  DESDE 1986
                </h2>
              </div>
            </div>

            <div className="w-full md:w-full flex justify-center mt-10 md:mt-0">
              <motion.img 
                src="/img/ImagenPrincipal.png"
                className="max-h-[90vh] object-cover absolute top-[55%] w-[140vh]"
                alt="Plato especial"
                animate={{ 
                  rotate: 360
                }}
                transition={{ 
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  originX: 0.5,
                  originY: 0.5
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div ref={EspecialidadesRef}>
        <Especialidades ref={sections[1]}/>
      </div>

      <div ref={combosSectionRef}>
        <CombosBanano ref={sections[2]}/>
      </div>

      <div ref={LocacionesVideoRef}>
        <LocacionesVideo ref={sections[4]}/>
      </div>

      <div ref={GaleriaRef}>
        <Galeria ref={sections[5]}/>
      </div>

      <div ref={ReseñasRef}>
        <Reseñas ref={sections[6]}/>
      </div>

      <Footer/>
    </section>
  );
};

export default Inicio;