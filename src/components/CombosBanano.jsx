import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowRight, FaStar, FaShoppingCart } from 'react-icons/fa';

const CombosBanano = () => {
  const [activeCombo, setActiveCombo] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const combos = [
    { 
      id: 1, 
      name: 'COMBO 1', 
      color: 'from-red-500 to-red-600', 
      activeColor: 'from-red-600 to-red-700',
      image: '/img/Tropezones El Banano-imágenes-0.jpg',
      whatsappLink: 'https://wa.me/573042883923?text=¡Hola! Me gustaría ordenar el COMBO 1',
      description: 'Hamburguesa clásica con carne 100% res, queso americano, lechuga, tomate y salsa especial',
      ingredients: [
        'Carne de res 150g',
        'Queso americano',
        'Pan brioche',
        'Lechuga fresca',
        'Tomate',
        'Salsa especial',
        'Papas fritas',
      ],
      price: '12.99'
    },
    { 
      id: 2, 
      name: 'COMBO 2', 
      color: 'from-blue-700 to-blue-800', 
      activeColor: 'from-blue-800 to-blue-900',
      image: '/img/Tropezones El Banano-imágenes-1.jpg',
      whatsappLink: 'https://wa.me/573042883923?text=¡Hola! Me gustaría ordenar el COMBO 2',
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
      whatsappLink: 'https://wa.me/573042883923?text=¡Hola! Me gustaría ordenar el COMBO 3',
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
      whatsappLink: 'https://wa.me/573042883923?text=¡Hola! Me gustaría ordenar el COMBO 4',
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
      whatsappLink: 'https://wa.me/573042883923?text=¡Hola! Me gustaría ordenar el COMBO 5',
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
      whatsappLink: 'https://wa.me/573042883923?text=¡Hola! Me gustaría ordenar el COMBO 6',
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

  // Efecto para auto-avanzar el carrusel
  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    
    const interval = setInterval(() => {
      if (!isHovering) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isHovering]);

  const handleClick = (id) => {
    setActiveCombo(activeCombo === id ? null : id);
  };

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === combos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? combos.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setActiveCombo(combos[index].id);
  };

  const imageVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-yellow-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        {/* Fondo principal */}
        <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-blue-950 to-blue-950 transform -skew-y-12" />
        
        {/* Líneas decorativas */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Líneas horizontales */}
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform -rotate-2" />
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform rotate-1" />
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform -rotate-1" />
          
          {/* Líneas diagonales */}
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent transform -rotate-45" />
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent transform rotate-45" />
          
          {/* Elementos geométricos */}
          <div className="absolute top-20 left-20 w-40 h-40 border border-yellow-400/10 rounded-full" />
          <div className="absolute bottom-40 right-20 w-32 h-32 border border-yellow-400/10 rounded-full" />
        </div>
      </div>

      {/* Encabezado con animación */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="relative z-10 pt-16 pb-8 text-center"
      >
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-blue-950 rounded-2xl transform rotate-1"></div>
          <div className="relative bg-blue-950 rounded-2xl px-8 py-4 shadow-xl border border-yellow-400/20">
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-4"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Nuestros Combos
            </motion.h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Resto del contenido */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-xl relative"
            >
              {/* Imagen del combo */}
              <div className="relative h-[500px] overflow-hidden">
                <motion.img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openFullscreen(combo.image)}
                />
                
                {/* Overlay con gradiente solo cuando se muestran los ingredientes */}
                <AnimatePresence>
                  {activeCombo === combo.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/95 to-blue-950/90"
                    />
                  )}
                </AnimatePresence>

                {/* Contenido superpuesto */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                  <motion.div
                    className="absolute top-4 right-4 bg-yellow-400 text-blue-900 font-bold px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    ${combo.price}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-yellow-400">{combo.name}</h3>
                  
                  <AnimatePresence>
                    {activeCombo === combo.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                      >
                        <p className="text-gray-300 mb-4">{combo.description}</p>
                        <motion.ul className="space-y-2 mb-6">
                          {combo.ingredients.map((ingredient, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center text-gray-300"
                            >
                              <FaStar className="text-yellow-400 mr-2 text-sm" />
                              {ingredient}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Botones */}
                  <div className="space-y-3">
                    <motion.button
                      onClick={() => handleClick(combo.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-blue-950/60 text-yellow-400 py-2 px-4 rounded-lg hover:bg-yellow-400/80 hover:text-blue-950 transition-all"
                    >
                      {activeCombo === combo.id ? 'Ocultar Ingredientes' : 'Ver Ingredientes'}
                    </motion.button>

                    <motion.a
                      href={combo.whatsappLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-xl text-center transform transition-all hover:shadow-lg hover:from-yellow-500 hover:to-yellow-600"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <FaShoppingCart />
                        <span>Ordenar Ahora</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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

     
    </div>
  );
};

export default CombosBanano;
