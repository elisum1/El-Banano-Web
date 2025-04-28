import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [canExit, setCanExit] = useState(false);

  useEffect(() => {
    const minLoadingTimer = setTimeout(() => {
      setCanExit(true);
    }, 7000);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 200);

    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(messageTimer);
      clearTimeout(minLoadingTimer);
    };
  }, []);

  const shouldShow = progress < 100 || !canExit;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div 
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 to-blue-900 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-40 h-40">
            <motion.img
              src="/img/logo_el_banano-removebg-preview.png"
              alt="Restaurante El Banano"
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1
              }}
              transition={{
                duration: 1,
                ease: "easeOut"
              }}
            />
            
            <motion.div 
              className="absolute -inset-4 border-2 border-yellow-400/30 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="mt-12 w-64 relative">
            <motion.div 
              className="h-[2px] bg-yellow-400/20"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute top-0 left-0 h-[2px] bg-yellow-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-yellow-400 text-lg font-light mb-2">
              {progress}%
            </p>
            
            <AnimatePresence>
              {showMessage && (
                <motion.p
                  className="text-yellow-400/70 text-sm font-light tracking-wider"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  CARGANDO EXPERIENCIAS...
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="absolute bottom-8 flex space-x-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;