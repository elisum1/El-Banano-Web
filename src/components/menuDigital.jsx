import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes, FaHome } from 'react-icons/fa';
import RestaurantLandingPage from './Principal';
import Entradas from './Entradas';
import Antioquenos from './Antioquenos';
import DelMar from './DelMar';
import PicadaMixtos from './PicadaMixtos';
import Especiales from '../components/Especiales';
import Patacones from './Patacones';
import Pastas from './Pastas';
import Arroces from './Arroces';
import MazorcaSalchipapa from './MazorcaSalchipapa';
import Bebidas from './Bebidas';

const MenuDigital = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentComponent, setCurrentComponent] = useState('menu');
  const [showLandingPage, setShowLandingPage] = useState(false);

  const menuCategories = [
    {
      id: 'completo',
      title: "EL COMPLETO",
      subtitle: "Armalo como quieras !!",
      description: "Elije tu proteina con uno o dos acompañantes de tu gusto ",
      items: [
        { 
          name: "Carne 230 gr.", 
          price1: "$37.500", 
          price2: "$62.500",
          desc1: "Carne de res premium asada al carbón con guarniciones",
          desc2: "Doble porción de carne premium con extras especiales",
          img1: "/img/carne-1x.jpg",
          img2: "/img/carne-2x.jpg"
        },
        { 
          name: "Junior 140 gr.", 
          price1: "$37.500", 
          price2: "$62.500",
          desc1: "Mezcla especial de carnes con especias tradicionales",
          desc2: "Doble porción de nuestra mezcla especial",
          img1: "/img/juntar-1x.jpg",
          img2: "/img/juntar-2x.jpg"
        },
        // Agrega más items según necesites
      ]
    },
  ];

  const navigateItems = (direction) => {
    const items = menuCategories[currentCategoryIndex].items;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentItemIndex + 1) % items.length;
    } else {
      newIndex = (currentItemIndex - 1 + items.length) % items.length;
    }
    
    setCurrentItemIndex(newIndex);
  };

  const navigateCategories = (direction) => {
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentCategoryIndex + 1) % menuCategories.length;
    } else {
      newIndex = (currentCategoryIndex - 1 + menuCategories.length) % menuCategories.length;
    }
    
    setCurrentCategoryIndex(newIndex);
    setCurrentItemIndex(0);
  };

  const navigateComponents = (direction) => {
    const components = [
      'menu', 
      'entradas', 
      'antioquenos',
      'delmar',
      'picada-mixtos',
      'especiales',
      'patacones',
      'pastas',
      'arroces',
      'mazorca-salchipapa',
      'bebidas'
    ];
    const currentIndex = components.indexOf(currentComponent);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % components.length;
    } else {
      newIndex = (currentIndex - 1 + components.length) % components.length;
    }
    
    setCurrentComponent(components[newIndex]);
  };

  const openImageModal = (imgUrl, item, index) => {
    setSelectedImage(imgUrl);
    setActiveItem(item);
    setCurrentItemIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setActiveItem(null);
  };

  const handleReturnToLanding = () => {
    setShowLandingPage(true);
  };

  const currentCategory = menuCategories[currentCategoryIndex];
  const currentItems = currentCategory.items;

  if (showLandingPage) {
    return <RestaurantLandingPage />;
  }

  if (currentComponent === 'entradas') {
    return <Entradas onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  if (currentComponent === 'antioquenos') {
    return <Antioquenos onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  if (currentComponent === 'delmar') {
    return <DelMar onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  if (currentComponent === 'picada-mixtos') {
    return <PicadaMixtos onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  if (currentComponent === 'especiales') {
    return <Especiales onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  if (currentComponent === 'patacones') {
    return <Patacones onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  if (currentComponent === 'pastas') {
    return <Pastas onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  if (currentComponent === 'arroces') {
    return <Arroces onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  if (currentComponent === 'mazorca-salchipapa') {
    return <MazorcaSalchipapa onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  if (currentComponent === 'bebidas') {
    return <Bebidas onReturn={handleReturnToLanding} onNavigate={navigateComponents} />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gray-500">
      {/* Sección amarilla - Modificada para móviles */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center p-12 md:p-8 relative h-[30vh] md:h-auto">
        {/* Botón de volver al inicio */}
        <motion.button 
          onClick={handleReturnToLanding}
          className="absolute top-2 left-2 md:top-4 md:left-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 md:p-3 rounded-full shadow-lg transition-all flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHome className="text-blue-900 text-lg md:text-xl mr-1 md:mr-2" />
          <span className="text-blue-900 font-semibold text-sm md:text-base">Volver</span>
        </motion.button>

        {/* Flechas de navegación entre componentes */}
        <button 
          onClick={() => navigateComponents('prev')}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 md:p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowLeft className="text-blue-900 text-lg md:text-xl" />
        </button>
        
        <button 
          onClick={() => navigateComponents('next')}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 md:p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowRight className="text-blue-900 text-lg md:text-xl" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <img 
            src="/img/logo_el_banano-removebg-preview.png" 
            alt="El Banano Logo" 
            className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-3 md:mb-6 object-contain"
          />
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-2 md:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="[text-shadow:_3px_3px_0_white,_-3px_-3px_0_white,_3px_-3px_0_white,_-3px_3px_0_white] md:[text-shadow:_4px_4px_0_white]">
              {currentCategory.title}
            </span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-xl text-blue-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {currentCategory.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Sección azul - Modificada para móviles */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-800 p-3 md:p-8 flex flex-col justify-center relative">
        {/* Flechas de navegación entre items */}
        <button 
          onClick={() => navigateItems('prev')}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 md:p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowLeft className="text-blue-900 text-lg md:text-xl" />
        </button>
        
        <button 
          onClick={() => navigateItems('next')}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 md:p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowRight className="text-blue-900 text-lg md:text-xl" />
        </button>

        <motion.div 
          className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Encabezado */}
          <div className="bg-blue-900 p-3 md:p-6 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-yellow-400 mb-1 md:mb-2">
              {currentCategory.title}
            </h2>
            <p className="text-white text-xs md:text-base">{currentCategory.description}</p>
          </div>

          {/* Contenedor de items con scroll - Mostrar solo 6 items inicialmente */}
          <div className="max-h-[50vh] md:max-h-[60vh] overflow-y-auto p-2 md:p-4">
            {currentItems.slice(0, 6).map((item, index) => (
              <motion.div 
                key={index}
                className="mb-3 md:mb-6 last:mb-0 border-b border-yellow-100 pb-3 md:pb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-blue-900 mb-2 md:mb-3">{item.name}</h3>
                
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {/* Versión 1x */}
                  <div 
                    className="bg-yellow-50 p-2 md:p-3 rounded-lg cursor-pointer transition-all hover:shadow-md"
                    onClick={() => openImageModal(item.img1, { ...item, price: item.price1, desc: item.desc1 }, index)}
                  >
                    <motion.img
                      src={item.img1}
                      alt={`${item.name} 1x`}
                      className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-md mb-1 md:mb-2"
                      whileHover={{ scale: 1.02 }}
                    />
                    <div className="text-center">
                      <span className="block text-red-600 font-bold text-sm md:text-base">{item.price1}</span>
                      <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">{item.desc1}</p>
                    </div>
                  </div>
                  
                  {/* Versión 2x */}
                  <div 
                    className="bg-yellow-50 p-2 md:p-3 rounded-lg cursor-pointer transition-all hover:shadow-md"
                    onClick={() => openImageModal(item.img2, { ...item, price: item.price2, desc: item.desc2 }, index)}
                  >
                    <motion.img
                      src={item.img2}
                      alt={`${item.name} 2x`}
                      className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-md mb-1 md:mb-2"
                      whileHover={{ scale: 1.02 }}
                    />
                    <div className="text-center">
                      <span className="block text-red-600 font-bold text-sm md:text-base">{item.price2}</span>
                      <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">{item.desc2}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nota especial */}
          <div className="bg-yellow-100 p-2 md:p-4 text-center border-t-2 border-yellow-300">
            <p className="text-blue-900 font-bold italic text-xs md:text-sm lg:text-base">¡Armalo como quieras!</p>
          </div>
        </motion.div>

        {/* Botón de acción */}
        <motion.div
          className="mt-3 md:mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base shadow-lg transition-all flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Pedir Ahora</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal para imagen ampliada - Mejorado para responsivo */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-2 right-2 md:top-4 md:right-4">
              <button 
                className="text-white text-2xl md:text-3xl hover:text-yellow-400 transition-colors"
                onClick={closeImageModal}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center w-full max-w-6xl h-full md:h-auto">
              {/* Flecha izquierda - Solo visible en desktop */}
              <button 
                className="hidden md:block text-white text-3xl p-2 hover:text-yellow-400 transition-colors"
                onClick={() => navigateItems('prev')}
              >
                <FaArrowLeft />
              </button>
              
              <div className="flex-1 flex flex-col md:flex-row items-center h-full w-full">
                <motion.div 
                  className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={selectedImage}
                >
                  <img 
                    src={selectedImage} 
                    alt="Ampliación" 
                    className="max-w-full max-h-[40vh] md:max-h-[70vh] object-contain rounded-lg"
                  />
                </motion.div>
                
                {activeItem && (
                  <div className="w-full md:w-1/2 bg-white p-3 md:p-4 rounded-lg shadow-lg mt-2 md:mt-0 md:ml-4 h-1/2 md:h-auto overflow-y-auto">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900 text-center">{activeItem.name}</h3>
                    <p className="text-red-600 font-bold text-base md:text-lg my-2 text-center">{activeItem.price}</p>
                    <p className="text-gray-700 text-sm md:text-base text-center md:text-left">{activeItem.desc}</p>
                  </div>
                )}
              </div>
              
              {/* Flecha derecha - Solo visible en desktop */}
              <button 
                className="hidden md:block text-white text-3xl p-2 hover:text-yellow-400 transition-colors"
                onClick={() => navigateItems('next')}
              >
                <FaArrowRight />
              </button>

              {/* Flechas para móvil */}
              <div className="flex md:hidden justify-between w-full mt-2">
                <button 
                  className="text-white text-2xl p-2 hover:text-yellow-400 transition-colors"
                  onClick={() => navigateItems('prev')}
                >
                  <FaArrowLeft />
                </button>
                <button 
                  className="text-white text-2xl p-2 hover:text-yellow-400 transition-colors"
                  onClick={() => navigateItems('next')}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuDigital;