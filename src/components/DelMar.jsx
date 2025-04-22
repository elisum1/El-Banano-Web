import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const DelMar = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      id: 'delmar',
      title: "DEL MAR",
      subtitle: "Frescos sabores marinos",
      description: "Platos preparados con los más frescos ingredientes del mar",
      items: [
        { 
          name: "Cazuela de Mariscos", 
          price1: "$42.000", 
          price2: "$55.000",
          desc1: "Mezcla de mariscos en salsa de coco y aliños",
          desc2: "Cazuela especial con mariscos premium y salsa de coco thai",
          ingredients1: "Camarones, mejillones, calamares, langostinos, pulpo, leche de coco, cebolla, ajo, pimentón, cilantro, especias.",
          ingredients2: "Langostinos jumbo, mejillones chilenos, calamares patagónicos, pulpo español, leche de coco thai, especias importadas, vegetales frescos.",
          img1: "/img/cazuela-mariscos.jpg",
          img2: "/img/cazuela-mariscos-premium.jpg"
        },
        { 
          name: "Filete de Pescado", 
          price1: "$38.000", 
          price2: "$48.000",
          desc1: "Filete a la plancha con salsa de alcaparras",
          desc2: "Filete premium con salsa de alcaparras y vino blanco",
          ingredients1: "Filete de pescado fresco, alcaparras, limón, mantequilla, ajo, perejil, sal y pimienta al gusto.",
          ingredients2: "Filete de salmón noruego, alcaparras importadas, vino blanco, mantequilla clarificada, hierbas frescas, vegetales orgánicos.",
          img1: "/img/filete-pescado.jpg",
          img2: "/img/filete-pescado-premium.jpg"
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

  const openImageModal = (imgUrl, item, version) => {
    setSelectedImage(imgUrl);
    setActiveItem({
      ...item,
      version: version === 1 ? item.desc1 : item.desc2,
      price: version === 1 ? item.price1 : item.price2,
      ingredients: version === 1 ? item.ingredients1 : item.ingredients2
    });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setActiveItem(null);
  };

  const currentCategory = items[0];
  const currentItems = currentCategory.items;

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gray-50">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center h-[30vh] sm:h-[100vh] md:p-8 relative">
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
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-blue-900"
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

      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-800 p-3 md:p-8 flex flex-col justify-center relative">
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
          className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border-2 border-blue-100"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-blue-900 p-3 md:p-6 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-yellow-400 mb-1 md:mb-2">
              {currentCategory.title}
            </h2>
            <p className="text-white text-xs md:text-base">{currentCategory.description}</p>
          </div>

          <div className="max-h-[50vh] md:max-h-[60vh] overflow-y-auto p-2 md:p-4">
            {currentItems.map((item, index) => (
              <motion.div 
                key={index}
                className="mb-3 md:mb-6 last:mb-0 border-b border-blue-100 pb-3 md:pb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-blue-900 mb-2 md:mb-3">{item.name}</h3>
                
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div 
                    className="bg-white p-2 md:p-3 rounded-lg cursor-pointer transition-all hover:shadow-md"
                    onClick={() => openImageModal(item.img1, item, 1)}
                  >
                    <motion.img
                      src={item.img1}
                      alt={`${item.name} 1x`}
                      className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-md mb-1 md:mb-2"
                      whileHover={{ scale: 1.02 }}
                    />
                    <div className="text-center">
                      <span className="block text-blue-900 font-bold text-sm md:text-base">{item.price1}</span>
                      <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">{item.desc1}</p>
                    </div>
                  </div>
                  
                  <div 
                    className="bg-white p-2 md:p-3 rounded-lg cursor-pointer transition-all hover:shadow-md"
                    onClick={() => openImageModal(item.img2, item, 2)}
                  >
                    <motion.img
                      src={item.img2}
                      alt={`${item.name} 2x`}
                      className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-md mb-1 md:mb-2"
                      whileHover={{ scale: 1.02 }}
                    />
                    <div className="text-center">
                      <span className="block text-blue-900 font-bold text-sm md:text-base">{item.price2}</span>
                      <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">{item.desc2}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-100 p-2 md:p-4 text-center border-t-2 border-blue-200">
            <p className="text-blue-900 font-bold italic text-xs md:text-sm lg:text-base">¡Todos nuestros platos incluyen arroz o papas a elección!</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-3 md:mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base shadow-lg transition-all flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Pedir Ahora</span>
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && activeItem && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedImage} 
                  alt={activeItem.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col overflow-y-auto">
                <button 
                  onClick={closeImageModal}
                  className="self-end text-gray-500 hover:text-blue-600 mb-2"
                >
                  <FaTimes className="text-xl" />
                </button>
                
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{activeItem.name}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-4">{activeItem.price}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Descripción</h4>
                  <p className="text-gray-600">{activeItem.version}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Ingredientes</h4>
                  <p className="text-gray-600">{activeItem.ingredients}</p>
                </div>
                
                <motion.button
                  className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold shadow-md transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pedir este plato
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DelMar;