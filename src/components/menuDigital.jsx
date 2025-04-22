import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa';
import ElCompleto from './ElCompleto';
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

const MenuDigital = ({ onReturnToLanding }) => {
  const menuComponents = [
    { id: 'completo', name: "El Completo", component: ElCompleto },
    { id: 'entradas', name: "Entradas", component: Entradas },
    { id: 'antioquenos', name: "Antioqueños", component: Antioquenos },
    { id: 'delmar', name: "Del Mar", component: DelMar },
    { id: 'picada-mixtos', name: "Picadas/Mixtos", component: PicadaMixtos },
    { id: 'especiales', name: "Especiales", component: Especiales },
    { id: 'patacones', name: "Patacones", component: Patacones },
    { id: 'pastas', name: "Pastas", component: Pastas },
    { id: 'arroces', name: "Arroces", component: Arroces },
    { id: 'mazorca-salchipapa', name: "Mazorcas/Salchipapas", component: MazorcaSalchipapa },
    { id: 'bebidas', name: "Bebidas", component: Bebidas }
  ];

  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const navigateComponents = (direction) => {
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentComponentIndex + 1) % menuComponents.length;
    } else {
      newIndex = (currentComponentIndex - 1 + menuComponents.length) % menuComponents.length;
    }
    
    setCurrentComponentIndex(newIndex);
  };

  const currentComponent = menuComponents[currentComponentIndex];
  const Component = currentComponent.component;

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Botón de volver */}
      <motion.button 
        onClick={onReturnToLanding}
        className="absolute top-4 left-4 z-50 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaHome className="text-blue-900 text-xl mr-2" />
        <span className="text-blue-900 font-semibold">Volver</span>
      </motion.button>

      {/* Flechas de navegación */}
      <div className="absolute top-[20vh] md:top-0 md:bottom-0 w-full md:w-1/2">
        <button 
          onClick={() => navigateComponents('prev')}
          className="absolute left-4 md:top-1/2 md:-translate-y-1/2 z-50 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-md flex items-center"
        >
          <FaArrowLeft className="text-blue-900 text-xl" />
        </button>
        
        <button 
          onClick={() => navigateComponents('next')}
          className="absolute right-4 md:top-1/2 md:-translate-y-1/2 z-50 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-md flex items-center"
        >
          <FaArrowRight className="text-blue-900 text-xl" />
        </button>
      </div>

      {/* Indicador de categoría actual */}
      <div className="absolute top-4 right-4 z-50 bg-white bg-opacity-80 px-4 py-2 rounded-full text-blue-900 font-semibold">
        {currentComponent.name}
      </div>

      {/* Contenedor del componente actual */}
      <motion.div
        key={currentComponent.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Component 
          onReturn={() => setCurrentComponentIndex(0)} 
          onNavigate={navigateComponents}
        />
      </motion.div>
    </div>
  );
};

export default MenuDigital;