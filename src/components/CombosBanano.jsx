import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CombosBanano = () => {
  const [activeCombo, setActiveCombo] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  
  const combos = [
    { 
      id: 1, 
      name: 'COMBO 1', 
      color: 'from-red-500 to-red-600', 
      activeColor: 'from-red-600 to-red-700',
      image: '/img/Tropezones El Banano-imágenes-0.jpg',
      whatsappLink: 'https://wa.me/1234567890?text=Quiero%20pedir%20el%20COMBO%201',
      description: 'Hamburguesa clásica con carne 100% res, queso americano, lechuga, tomate y salsa especial',
      ingredients: [
        'Carne de res 150g',
        'Queso americano',
        'Pan brioche',
        'Lechuga fresca',
        'Tomate',
        'Salsa especial',
        'Papas fritas',
        'Bebida 500ml'
      ],
      price: '12.99'
    },
    { 
      id: 2, 
      name: 'COMBO 2', 
      color: 'from-blue-700 to-blue-800', 
      activeColor: 'from-blue-800 to-blue-900',
      image: '/img/Tropezones El Banano-imágenes-1.jpg',
      whatsappLink: 'https://wa.me/1234567890?text=Quiero%20pedir%20el%20COMBO%202',
      description: 'Hamburguesa doble con tocino crujiente, cebolla caramelizada y salsa BBQ',
      ingredients: [
        'Doble carne de res',
        'Tocino crujiente',
        'Cebolla caramelizada',
        'Queso cheddar',
        'Salsa BBQ',
        'Papas fritas',
        'Bebida 500ml'
      ],
      price: '15.99'
    },
    { 
      id: 3, 
      name: 'COMBO 3', 
      color: 'from-cyan-400 to-blue-500', 
      activeColor: 'from-cyan-500 to-blue-600',
      image: '/img/Tropezones El Banano-imágenes-2.jpg',
      whatsappLink: 'https://wa.me/1234567890?text=Quiero%20pedir%20el%20COMBO%203',
      description: 'Hamburguesa vegetariana con portobello, queso de cabra y vegetales frescos',
      ingredients: [
        'Portobello asado',
        'Queso de cabra',
        'Espinaca fresca',
        'Tomate seco',
        'Pan integral',
        'Papas fritas',
        'Bebida 500ml'
      ],
      price: '13.99'
    },
    { 
      id: 4, 
      name: 'COMBO 4', 
      color: 'from-gray-100 to-gray-200', 
      activeColor: 'from-gray-200 to-gray-300',
      image: '/img/Tropezones El Banano-imágenes-3.jpg',
      whatsappLink: 'https://wa.me/1234567890?text=Quiero%20pedir%20el%20COMBO%204',
      description: 'Hamburguesa de pollo crujiente con lechuga, mayonesa de ajo y pan de semillas',
      ingredients: [
        'Pechuga de pollo empanizada',
        'Lechuga iceberg',
        'Mayonesa de ajo',
        'Pan de semillas',
        'Papas fritas',
        'Bebida 500ml'
      ],
      price: '14.49'
    },
    { 
      id: 5, 
      name: 'COMBO 5', 
      color: 'from-yellow-400 to-yellow-500', 
      activeColor: 'from-yellow-500 to-yellow-600',
      image: '/img/Tropezones El Banano-imágenes-4.jpg',
      whatsappLink: 'https://wa.me/1234567890?text=Quiero%20pedir%20el%20COMBO%205',
      description: 'Hamburguesa BBQ con aros de cebolla, jalapeños y salsa picante',
      ingredients: [
        'Carne de res 180g',
        'Aros de cebolla',
        'Jalapeños',
        'Salsa picante',
        'Queso pepper jack',
        'Papas fritas',
        'Bebida 500ml'
      ],
      price: '16.99'
    },
    { 
      id: 6, 
      name: 'COMBO 6', 
      color: 'from-pink-500 to-red-500', 
      activeColor: 'from-pink-600 to-red-600',
      image: '/img/Tropezones El Banano-imágenes-5.jpg',
      whatsappLink: 'https://wa.me/1234567890?text=Quiero%20pedir%20el%20COMBO%206',
      description: 'Hamburguesa mega con triple carne, triple queso y todos los toppings',
      ingredients: [
        'Triple carne de res',
        'Triple queso cheddar',
        'Tocino',
        'Huevo frito',
        'Cebolla crispy',
        'Papas fritas',
        'Bebida 750ml'
      ],
      price: '19.99'
    }
  ];

  const handleClick = (id) => {
    setActiveCombo(id);
  };

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const imageVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Modal para imagen en pantalla completa */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            <motion.img
              src={fullscreenImage}
              alt="Combo completo"
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
            <button 
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={closeFullscreen}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-8xl mx-auto border-[1px] border-yellow-400 bg-yellow-400 rounded-2xl ">
        {/* Panel de selección */}
        <div className="w-full lg:w-1/3 bg-red-500 rounded-2xl shadow-2xl p-5 md:p-6 border-white border-[1px] ">
          <h3 className="text-white text-xl font-light mb-5 text-center">Selecciona tu combo</h3>
          
          <div className="flex flex-col items-center">
            {combos.map((combo) => (
              <motion.button
                key={combo.id}
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleClick(combo.id)}
                className={`
                  relative 
                  overflow-hidden
                  font-light 
                  text-white
                  uppercase 
                  tracking-widest
                  text-sm md:text-base
                  w-48
                  h-12
                  border-2 
                  border-yellow-500
                  rounded-lg
                  flex 
                  items-center 
                  justify-center
                  mb-4
                  transition-colors 
                  duration-300
                  group
                  ${activeCombo === combo.id ? 'font-semibold bg-yellow-300 border-white' : 'hover:bg-yellow-500/90 hover:border-white'}
                `}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {combo.name}
                </span>
                
                {/* Efecto de 4 círculos dorados */}
                {[1, 2, 3, 4].map((n) => (
                  <span 
                    key={n}
                    className="absolute w-1/4 h-full bg-yellow-300 rounded-full -z-10"
                    style={{
                      left: `calc((${n} - 1) * 25%)`,
                      transform: 'translateY(150%)',
                      transition: 'all 0.5s cubic-bezier(0.68,-0.55,0.265,1.55)',
                      transitionDelay: `${(n - 1) * 0.1}s`
                    }}
                    group-hover="transform translate-y-0 scale-200"
                  ></span>
                ))}
              </motion.button>
            ))}
          </div>

          {/* Llamado a la acción secundario */}
          <motion.div 
            className="mt-7 bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border border-white/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <div className="flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700 font-medium">¿Necesitas ayuda para elegir?</p>
            </div>
            
            <motion.a 
              href="https://wa.me/1234567890" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.03c.545 0 1.033-.488 1.033-1.032 0-.546-.487-1.033-1.033-1.033s-1.033.487-1.033 1.033c0 .544.487 1.032 1.033 1.032m4.128 0c.546 0 1.033-.488 1.033-1.032 0-.546-.487-1.033-1.033-1.033s-1.033.487-1.033 1.033c0 .544.488 1.032 1.033 1.032"/>
              </svg>
              Chatea con nosotros
            </motion.a>
          </motion.div>
        </div>

        {/* Panel de visualización con descripción */}
        <div className="border-[1px] border-blue-800 mt-4 w-full lg:w-2/3 bg-gray-50 h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden relative rounded-2xl shadow-2xl">
          <AnimatePresence mode='wait'>
            {activeCombo ? (
              <motion.div
                key={activeCombo}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25
                }}
                className="absolute inset-0 flex flex-col lg:flex-row"
              >
                {/* Contenedor de imagen */}
                <div 
                  className="w-full lg:w-1/2 h-full flex items-center justify-center p-4 cursor-pointer bg-gray-100"
                  onClick={() => openFullscreen(combos.find(c => c.id === activeCombo).image)}
                >
                  <img 
                    src={combos.find(c => c.id === activeCombo).image} 
                    alt={combos.find(c => c.id === activeCombo).name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                
                {/* Contenedor de descripción */}
                <div className="w-full lg:w-1/2 h-full p-6 md:p-8 flex flex-col overflow-y-auto bg-blue-900">
                  <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">
                    {combos.find(c => c.id === activeCombo).name}
                  </h2>
                  
                  <p className="text-white mb-5">
                    {combos.find(c => c.id === activeCombo).description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Ingredientes:</h3>
                    <ul className="space-y-2">
                      {combos.find(c => c.id === activeCombo).ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-white">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-gray-50">Precio:</span>
                        <span className="text-2xl font-bold text-yellow-400 ml-2">${combos.find(c => c.id === activeCombo).price}</span>
                      </div>
                    </div>
                    
                    <motion.a
                      href={combos.find(c => c.id === activeCombo).whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full 
                                    shadow-lg flex items-center justify-center gap-2 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>Pedir por WhatsApp</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center p-8 text-gray-800 w-full"
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring' }}
                >
                  ELIGE TU COMBO
                </motion.h2>
                
                <motion.p 
                  className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Selecciona una opción para ver los detalles completos del plato
                </motion.p>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full 
                            text-lg md:text-xl transition-all shadow-lg hover:shadow-xl"
                  onClick={() => handleClick(1)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Ver todos los combos
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CombosBanano;