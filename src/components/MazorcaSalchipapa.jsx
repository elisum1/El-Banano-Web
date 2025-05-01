import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const MazorcaSalchipapa = (onReturn) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const items = [
    {
      id: 'mazorca-salchipapa',
      title: "MAZORCAS Y SALCHIPAPAS",
      subtitle: "Acompañamientos deliciosos",
      description: "Variedad de mazorcas y salchipapas para acompañar",
      items: [
        { 
          name: "Mazorca Desgranada", 
          price1: "$18.000", 
          price2: "$25.000",
          desc1: "Mazorca desgranada con mantequilla y queso",
          desc2: "Mazorca premium con toppings especiales",
          ingredients1: "Mazorca tierna, mantequilla, queso rallado, sal al gusto.",
          ingredients2: "Mazorca tierna seleccionada, mantequilla premium, quesos especiales, tocino crocante, especias.",
          img1: "/img/mazorca-desgranada.jpg",
          img2: "/img/mazorca-premium.jpg"
        },
        { 
          name: "Salchipapa Especial", 
          price1: "$22.000", 
          price2: "$32.000",
          desc1: "Papas fritas con salchichas, salsas y toppings",
          desc2: "Salchipapa gourmet con ingredientes premium",
          ingredients1: "Papas fritas, salchichas, salsa rosada, salsa de ajo, queso rallado, huevo de codorniz.",
          ingredients2: "Papas premium, salchichas artesanales, chorizo, carne desmechada, salsas gourmet, queso fundido.",
          img1: "/img/salchipapa-especial.jpg",
          img2: "/img/salchipapa-premium.jpg"
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
      {/* Mitad roja (izquierda) */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex flex-col items-center justify-center p-12 md:p-8 relative h-[30vh] md:h-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <img 
            src="/img/logo_el_banano-removebg-preview.png" 
            alt="Logo" 
            className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-3 md:mb-6 object-contain"
          />
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white"
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

      {/* Mitad roja (derecha) */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-3 md:p-8 flex flex-col justify-center relative">
        {/* Flechas de navegación */}
        <button 
          onClick={() => navigateItems('prev')}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 md:p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowLeft className="text-red-600 text-lg md:text-xl" />
        </button>
        
        <button 
          onClick={() => navigateItems('next')}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 md:p-3 rounded-full shadow-md z-10 flex items-center"
        >
          <FaArrowRight className="text-red-600 text-lg md:text-xl" />
        </button>

        <motion.div 
          className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border-2 border-red-100"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Encabezado */}
          <div className="bg-red-600 p-3 md:p-6 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-yellow-400 mb-1 md:mb-2">
              {currentCategory.title}
            </h2>
            <p className="text-white text-xs md:text-base">{currentCategory.description}</p>
          </div>

          {/* Contenedor de items */}
          <div className="max-h-[50vh] md:max-h-[60vh] overflow-y-auto p-2 md:p-4">
            {currentItems.map((item, index) => (
              <motion.div 
                key={index}
                className="mb-3 md:mb-6 last:mb-0 border-b border-red-100 pb-3 md:pb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-red-700 mb-2 md:mb-3">{item.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {/* Versión 1x */}
                  <div 
                    className="relative shadow-black  rounded-sm overflow-hidden shadow-lg cursor-pointer transition-all h-[250px] hover:shadow-xl sm:h-[400px] w-full max-w-[300px] mx-auto hover:"
                    onClick={() => openImageModal(item.img1, item, 1)}
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
                      <span className='text-white text-[8px] sm:text-lg'> Tradicional</span>
                    </div>

                    <div className="relative h-[55%] p-4 sm:mt-2">
                      <motion.img
                        src={item.img1}
                        alt={`${item.name} 1x`}
                        className="w-full h-full object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                    
                    <div className="bg-red-600 absolute bottom-0 w-full p-3 text-center flex gap-3">
                      <span className='text-white sm:text-lg text-sm'>Por</span>
                      <span className="text-white font-bold text-sm md:text-3xl">{item.price1}</span>
                      <button className='sm:px-4 px-2 text-center bg-yellow-400 rounded-sm sm:text-[.8rem] font-bold text-[0.5rem] text-blue-950'> PIDE YA !</button>
                    </div>
                  </div>
                  
                  {/* Versión 2x */}
                  <div 
                    className="relative shadow-black rounded-sm overflow-hidden shadow-lg cursor-pointer transition-all h-[250px] hover:shadow-xl sm:h-[400px] w-full max-w-[300px] mx-auto hover:"
                    onClick={() => openImageModal(item.img2, item, 2)}
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
                      <span className='text-white text-[8px] sm:text-lg'> Premium</span>
                    </div>

                    <div className="relative h-[55%] p-4 sm:mt-2">
                      <motion.img
                        src={item.img2}
                        alt={`${item.name} 2x`}
                        className="w-full h-full object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                    
                    <div className="bg-red-600 absolute bottom-0 w-full p-3 text-center flex gap-3">
                      <span className='text-white sm:text-lg text-sm'>Por</span>
                      <span className="text-white font-bold text-sm md:text-3xl">{item.price2}</span>
                      <button className='sm:px-4 px-2 text-center bg-yellow-400 rounded-sm sm:text-[.8rem] font-bold text-[0.5rem] text-blue-950'> PIDE YA !</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nota especial */}
          <div className="bg-red-100 p-2 md:p-4 text-center border-t-2 border-red-200">
            <p className="text-red-700 font-bold italic text-xs md:text-sm lg:text-base">¡Todos nuestros acompañamientos incluyen salsas especiales!</p>
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
            className="bg-yellow-400 hover:bg-yellow-500 text-red-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base shadow-lg transition-all flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Pedir Ahora</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal de imagen */}
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
              {/* Imagen grande */}
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedImage} 
                  alt={activeItem.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Detalles del plato */}
              <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col overflow-y-auto">
                <button 
                  onClick={closeImageModal}
                  className="self-end text-gray-500 hover:text-red-600 mb-2"
                >
                  <FaTimes className="text-xl" />
                </button>
                
                <h3 className="text-2xl font-bold text-red-700 mb-2">{activeItem.name}</h3>
                <p className="text-lg font-semibold text-red-600 mb-4">{activeItem.price}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Descripción</h4>
                  <p className="text-gray-600">{activeItem.desc}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Ingredientes</h4>
                  <p className="text-gray-600">{activeItem.ingredients}</p>
                </div>
                
                <motion.button
                  onClick={() => setShowConfirmModal(true)}
                  className="mt-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold shadow-md transition-all"
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

      {/* Modal de confirmación de WhatsApp */}
      <AnimatePresence>
        {showConfirmModal && activeItem && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowConfirmModal(false)}
          >
            <motion.div 
              className="bg-white rounded-xl p-6 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">¿Deseas hacer tu pedido por WhatsApp?</h3>
                <p className="text-gray-600 mb-6">Te redirigiremos a WhatsApp para completar tu pedido de {activeItem.name}</p>
                
                <div className="flex gap-4 justify-center">
                  <motion.button
                    onClick={() => {
                      const version = activeItem.price === activeItem.price2 ? '2x' : '1x';
                      const mensaje = `¡Hola! 👋 Me gustaría hacer un pedido en El Banano:
              🍽️ *${activeItem.name}* 
                   ${version}
                    💰 *Precio:* ${activeItem.price}
                      📋 *Ingredientes:*
                          ${activeItem.ingredients}

                            ¡Ayudame a armarlo! Gracias 🌟`;
                      const urlWhatsApp = `https://wa.me/573042883923?text=${encodeURIComponent(mensaje)}`;
                      window.open(urlWhatsApp, '_blank');
                      setShowConfirmModal(false);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold shadow-md transition-all flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sí, pedir ahora
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setShowConfirmModal(false)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-bold shadow-md transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancelar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón de retorno */}
      <motion.button
        onClick={onReturn}
        className="fixed bottom-4 left-4 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowLeft className="text-blue-900 text-xl" />
      </motion.button>
    </div>
  );
};

export default MazorcaSalchipapa;