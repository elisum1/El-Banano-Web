import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 300);

    // Mostrar mensaje después de 2 segundos
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(messageTimer);
    };
  }, []);

  const bananaVariants = {
    initial: { rotate: 0 },
    animate: { 
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const progressBarVariants = {
    initial: { width: 0 },
    animate: { 
      width: `${progress}%`,
      transition: { duration: 0.3 }
    }
  };

  const messageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.5, duration: 0.8 }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex flex-col items-center justify-center bg-yellow-400 z-[9999]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <div className="relative w-40 h-40 mb-8">
          <motion.img
            src="/img/logo_el_banano-removebg-preview.png"
            alt="Restaurante El Banano"
            className="w-full h-full object-contain"
            variants={bananaVariants}
            initial="initial"
            animate="animate"
          />
          
          <motion.div 
            className="absolute -inset-4 border-4 border-yellow-300 rounded-full"
            animate={{
              rotate: -360,
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        </div>

        <div className="w-64 h-3 bg-yellow-200 rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-blue-600"
            variants={progressBarVariants}
            initial="initial"
            animate="animate"
          />
        </div>

        <div className="text-center">
          <p className="text-white text-xl font-semibold mb-2">
            {progress}% CARGADO
          </p>
          
          <AnimatePresence>
            {showMessage && (
              <motion.p
                className="text-yellow-100 text-sm"
                variants={messageVariants}
                initial="initial"
                animate="animate"
              >
                Preparando una experiencia deliciosa...
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;