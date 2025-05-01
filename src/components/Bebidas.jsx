import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const Bebidas = (onReturn) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      id: 'bebidas',
      title: "BEBIDAS",
      subtitle: "Refrescantes acompañamientos",
      description: "Variedad de bebidas frías y calientes",
      items: [
        { 
          name: "Jugos Naturales", 
          price: "$8.000", 
          desc: "Jugos en agua o leche de fruta natural",
          img: "/img/jugos-naturales.jpg"
        },
        { 
          name: "Gaseosas", 
          price: "$5.000", 
          desc: "Refrescos de diferentes sabores",
          img: "/img/gaseosas.jpg"
        },
      ]
    }
  ];

  const navigateItems = (direction) => {
    const currentItems = items[0].items;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentItemIndex + 1) % currentItems.length;
    } else {
      newIndex = (currentItemIndex - 1 + currentItems.length) % currentItems.length;
    }
    
    setCurrentItemIndex(newIndex);
  };

  const currentCategory = items[0];
  const currentItem = currentCategory.items[currentItemIndex];

  const handleOrderClick = (item = null) => {
    setActiveItem(item || currentItem);
    setShowConfirmModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gray-50">
      {/* Mitad roja */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex flex-col items-center justify-center h-[30vh] sm:h-[100vh] md:p-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <img 
            src="/img/logo_el_banano-removebg-preview.png" 
            alt="Logo" 
            className="w-22 h-32 md:w-48 md:h-48 mx-auto mb-1 object-contain"
          />
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="[text-shadow:_4px_4px_0_#00000030,_-4px_-4px_0_#00000030]">
              {currentCategory.title}
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {currentCategory.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Mitad azul claro */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 p-4 md:p-8 flex flex-col justify-center relative">
        <button 
          onClick={() => navigateItems('prev')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowRight className="text-white text-xl transform rotate-180" />
        </button>
        
        <button 
          onClick={() => navigateItems('next')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowRight className="text-white text-xl" />
        </button>

        <motion.div 
          className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border-2 border-blue-100"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-blue-300 p-4 md:p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {currentCategory.title}
            </h2>
            <p className="text-white text-sm md:text-base">{currentCategory.description}</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {currentCategory.items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div 
                    className="relative shadow-black bg-white rounded-sm overflow-hidden shadow-lg cursor-pointer transition-all h-[250px] hover:shadow-xl sm:h-[400px] w-full max-w-[300px] mx-auto hover:"
                    onClick={() => handleOrderClick(item)}
                  >
                    {/* Logo pequeño */}
                    <img 
                      src="/img/Logo.jpg"
                      alt="Logo"
                      className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 opacity-50"
                    />
                    
                    <div className="p-2 sm:p-4">
                      <span className="text-blue-950 text-md md:text-xl">
                        Lleva tu 
                      </span>
                      <br />
                      <span className='text-xl sm:text-3xl text-blue-950 font-semiBold'>{item.name}</span> 
                      <span className='text-white text-[8px] sm:text-lg'> Refrescante</span>
                    </div>

                    <div className="relative h-[55%] p-4 sm:mt-2">
                      <motion.img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                    
                    <div className="bg-red-600 absolute bottom-0 w-full p-3 text-center flex gap-3">
                      <span className='text-white sm:text-lg text-sm'>Por</span>
                      <span className="text-white font-bold text-sm md:text-3xl">{item.price}</span>
                      <button className='sm:px-4 px-2 text-center bg-yellow-400 rounded-sm sm:text-[.8rem] font-bold text-[0.5rem] text-blue-950'> PIDE YA !</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-2 pb-4">
            {currentCategory.items.map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentItemIndex ? 'bg-blue-300' : 'bg-blue-100'}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => handleOrderClick()}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-base md:text-lg shadow-lg transition-all flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Pedir Ahora</span>
          </motion.button>
        </motion.div>

        {/* Modal de Confirmación de WhatsApp */}
        <AnimatePresence>
          {showConfirmModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowConfirmModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl p-6 max-w-sm w-full relative"
              >
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ¿Deseas hacer tu pedido por WhatsApp?
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Te redirigiremos a WhatsApp para procesar tu pedido{activeItem ? ` de ${activeItem.name} por ${activeItem.price}` : ' de bebidas'}
                </p>
                
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowConfirmModal(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-700"
                  >
                    Cancelar
                  </button>
                  <a
                    href={`https://wa.me/573042883923?text=Hola, me gustaría ordenar${activeItem ? ` ${activeItem.name} por ${activeItem.price}` : ' del menú de bebidas'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Continuar a WhatsApp
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Bebidas;
