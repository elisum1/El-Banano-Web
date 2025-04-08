import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa';

const Antioquenos = ({ onReturn, onNavigate }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const antioquenos = [
    {
      id: 'antioquenos',
      title: "LOS ANTIOQUEÑOS",
      subtitle: "Sabores tradicionales de nuestra tierra",
      description: "Platos típicos preparados con recetas tradicionales",
      items: [
        { 
          name: "Bandeja Paisa", 
          price: "$35.000", 
          desc: "Arroz, frijoles, chicharrón, carne molida, chorizo, huevo, aguacate y arepa",
          img: "/img/bandeja-paisa.jpg"
        },
        { 
          name: "Sancocho", 
          price: "$28.000", 
          desc: "Sancocho tricolor con carne, plátano, yuca y mazorca",
          img: "/img/sancocho.jpg"
        },
        { 
          name: "Mondongo", 
          price: "$30.000", 
          desc: "Mondongo antioqueño con panza de res, verduras y especias",
          img: "/img/mondongo.jpg"
        },
      ]
    }
  ];

  const navigateItems = (direction) => {
    const items = antioquenos[0].items;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentItemIndex + 1) % items.length;
    } else {
      newIndex = (currentItemIndex - 1 + items.length) % items.length;
    }
    
    setCurrentItemIndex(newIndex);
  };

  const currentCategory = antioquenos[0];
  const currentItem = currentCategory.items[currentItemIndex];

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gray-50">
      {/* Mitad amarilla */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center md:p-8 relative h-[30vh] sm:h-[100vh] ">
        {/* Botón de volver al inicio */}
        <motion.button 
          onClick={onReturn}
          className="absolute top-4 left-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHome className="text-blue-900 text-xl mr-2" />
          <span className="text-blue-900 font-semibold">Volver</span>
        </motion.button>

        {/* Flechas de navegación entre componentes */}
        <button 
          onClick={() => onNavigate('prev')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowLeft className="text-blue-900 text-xl" />
        </button>
        
        <button 
          onClick={() => onNavigate('next')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowRight className="text-blue-900 text-xl" />
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
            className="w-22 h-32  md:w-48 md:h-48 mx-auto  object-contain"
          />
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="[text-shadow:_4px_4px_0_white,_-4px_-4px_0_white,_4px_-4px_0_white,_-4px_4px_0_white]">
              {currentCategory.title}
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {currentCategory.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Mitad roja */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-4 md:p-8 flex flex-col justify-center relative">
        {/* Flechas de navegación entre items */}
        <button 
          onClick={() => navigateItems('prev')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowLeft className="text-red-600 text-xl" />
        </button>
        
        <button 
          onClick={() => navigateItems('next')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowRight className="text-red-600 text-xl" />
        </button>

        <motion.div 
          className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Encabezado */}
          <div className="bg-red-600 p-4 md:p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
              {currentCategory.title}
            </h2>
            <p className="text-white text-sm md:text-base">{currentCategory.description}</p>
          </div>

          {/* Contenedor del item actual */}
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
              <h3 className="text-2xl font-bold text-red-700 text-center mb-2">{currentItem.name}</h3>
              <p className="text-red-600 font-bold text-xl text-center mb-4">{currentItem.price}</p>
              <p className="text-gray-700 text-center">{currentItem.desc}</p>
            </motion.div>
          </div>

          {/* Indicador de items */}
          <div className="flex justify-center space-x-2 pb-4">
            {currentCategory.items.map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentItemIndex ? 'bg-red-600' : 'bg-red-200'}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Botón de acción */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-base md:text-lg shadow-lg transition-all flex items-center mx-auto"
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

export default Antioquenos;