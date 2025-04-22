import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ElCompleto = ({ onReturn, onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

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
          img1: "public/img/YEI02152.jpg",
          img2: "/img/carne-2x.jpg"
        },
        { 
          name: "Junior 140 gr.", 
          price1: "$37.500", 
          price2: "$62.500",
          desc1: "Mezcla especial de carnes con especias tradicionales",
          desc2: "Doble porción de nuestra mezcla especial",
          img1: "public/img/YEI02214.jpg",
          img2: "/img/juntar-2x.jpg"
        },
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

  const openImageModal = (imgUrl, item, index) => {
    setSelectedImage(imgUrl);
    setActiveItem(item);
    setCurrentItemIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setActiveItem(null);
  };

  const currentCategory = menuCategories[currentCategoryIndex];
  const currentItems = currentCategory.items;

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gray-500">
      {/* Sección amarilla */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center p-12 md:p-8 relative h-[30vh] md:h-auto">
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

      {/* Sección azul */}
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

          {/* Contenedor de items */}
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
    </div>
  );
};

export default ElCompleto;