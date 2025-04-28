import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'carnes', name: 'Carnes' },
    { id: 'picadas', name: 'Picadas' },
    { id: 'especiales', name: 'Especiales' }
  ];

  const dishes = [
    {
      id: 1,
      image: '/img/YEI02214.jpg',
      category: 'carnes',
      title: 'Churrasco Premium',
      description: 'Corte especial a la parrilla',
      price: '$45.000'
    },
    {
      id: 2,
      image: '/img/YEI02152.jpg',
      category: 'picadas',
      title: 'Picada Especial',
      description: 'Para compartir',
      price: '$65.000'
    },
    {
      id: 3,
      image: '/img/YEI02159.jpg',
      category: 'especiales',
      title: 'Plato Especial',
      description: 'Especialidad de la casa',
      price: '$55.000'
    },
    {
      id: 4,
      image: '/img/YEI02161.jpg',
      category: 'carnes',
      title: 'Lomo de Res',
      description: 'Corte premium a la parrilla',
      price: '$48.000'
    },
    {
      id: 5,
      image: '/img/YEI02167.jpg',
      category: 'picadas',
      title: 'Picada Mixta',
      description: 'Variedad de carnes y acompañamientos',
      price: '$70.000'
    },
    {
      id: 6,
      image: '/img/YEI02170.jpg',
      category: 'especiales',
      title: 'Plato Familiar',
      description: 'Ideal para compartir',
      price: '$85.000'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 sm:px-6"
      >
        {/* ¿Por qué elegir El Banano? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-lg"
          >
            <img 
              src="/img/YEI04584.jpg" 
              alt="Experiencia Banano"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-yellow-400/5"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg max-w-xs">
              <p className="font-bold text-blue-900 text-sm md:text-base">"Una tradición que se saborea en cada bocado"</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿POR QUÉ ELEGIR <span className="text-red-500">EL BANANO</span>?
            </h2>
            
            <div className="space-y-4 mb-6">
              {[
                {
                  title: "CARNES ASADAS MAESTRAS",
                  description: "Técnicas ancestrales que realzan el sabor de cortes premium seleccionados"
                },
                {
                  title: "TRADICIÓN ANTIOQUEÑA",
                  description: "Recetas auténticas transmitidas por generaciones"
                },
                {
                  title: "AMBIENTE ÚNICO",
                  description: "Donde cada visita se convierte en una experiencia memorable"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start"
                >
                  <div className="bg-yellow-400 p-1.5 rounded-full mr-3 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Separador decorativo */}
        <div className="relative h-px bg-gray-200 mb-16 md:mb-20 mx-auto max-w-2xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 bg-blue-500 w-4 h-4 rounded-full flex items-center justify-center text-white">
            <span className="text-xs font-bold">✻</span>
          </div>
        </div>

        {/* Título de la Galería */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestra Galería
          </h2>
          <p className="text-xl text-gray-600">
            Explora nuestra variedad de platos especialmente preparados para ti
          </p>
        </motion.div>

        {/* Filtros con animación */}
        <div className="flex justify-center mb-12 px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 p-2 bg-white rounded-full shadow-lg max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all whitespace-nowrap ${
                  category === cat.id 
                    ? 'bg-yellow-400 text-blue-900 font-bold' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Grid de platos con animaciones */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {dishes
              .filter(dish => category === 'all' || dish.category === category)
              .map((dish) => (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                  onClick={() => setSelectedImage(dish)}
                >
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={dish.image}
                      alt={dish.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <motion.div 
                    className="p-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{dish.title}</h3>
                    <p className="text-gray-600 mb-4">{dish.description}</p>
                    <p className="text-yellow-500 font-bold">{dish.price}</p>
                  </motion.div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal mejorado */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-[70vh] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-200 mb-4">{selectedImage.description}</p>
                  <p className="text-yellow-400 text-2xl font-bold">{selectedImage.price}</p>
                </div>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Galeria;