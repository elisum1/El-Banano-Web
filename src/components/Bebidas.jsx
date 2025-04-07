import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa';

const Bebidas = ({ onReturn, onNavigate }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

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

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gray-50">
      {/* Mitad roja */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex flex-col items-center justify-center p-6 md:p-8 relative">
        <motion.button 
          onClick={onReturn}
          className="absolute top-4 left-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHome className="text-red-600 text-xl mr-2" />
          <span className="text-red-600 font-semibold">Volver</span>
        </motion.button>

        <button 
          onClick={() => onNavigate('prev')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowLeft className="text-red-600 text-xl" />
        </button>
        
        <button 
          onClick={() => onNavigate('next')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowRight className="text-red-600 text-xl" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <img 
            src="/img/logo_el_banano-removebg-preview.png" 
            alt="Logo" 
            className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 object-contain"
          />
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
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
          <FaArrowLeft className="text-white text-xl" />
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

          <div className="p-6 flex flex-col items-center">
            <motion.div 
              key={currentItemIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <motion.img
                src={currentItem.img}
                alt={currentItem.name}
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.02 }}
              />
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">{currentItem.name}</h3>
              <p className="text-blue-700 font-bold text-xl text-center mb-4">{currentItem.price}</p>
              <p className="text-gray-700 text-center">{currentItem.desc}</p>
            </motion.div>
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
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-base md:text-lg shadow-lg transition-all flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Pedir Ahora</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Bebidas;