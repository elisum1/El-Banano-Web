import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaAngleDown } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuáles son sus horarios de atención?",
      answer: "Nuestros restaurantes están abiertos de lunes a domingo de 11:00 AM a 9:00 PM."
    },
    {
      question: "¿Hacen reservaciones para grupos grandes?",
      answer: "¡Sí! Aceptamos reservaciones para grupos. Te recomendamos contactarnos con al menos 24 horas de anticipación para garantizar tu espacio."
    },
    {
      question: "¿Tienen opciones vegetarianas?",
      answer: "Sí, contamos con una variedad de platos vegetarianos en nuestro menú, incluyendo ensaladas, patacones y opciones especiales."
    },
    {
      question: "¿Tienen servicio a domicilio?",
      answer: "Sí, realizamos entregas a domicilio a través de nuestros números de WhatsApp: CC Arrecife: 310-334-70-15, CC Buena Vista: 310-336-91-75"
    },
    {
      question: "¿Aceptan todas las tarjetas de crédito?",
      answer: "Sí, aceptamos todas las tarjetas de crédito y débito principales, así como efectivo y pagos móviles."
    },
    {
      question: "¿Tienen estacionamiento disponible?",
      answer: "Sí, ambas ubicaciones cuentan con estacionamiento disponible en los centros comerciales donde nos encontramos."
    },
    {
      question: "¿Ofrecen servicios para eventos?",
      answer: "Sí, ofrecemos servicios de catering y organización de eventos. Contáctanos para más información sobre nuestros paquetes y servicios."
    },
    {
      question: "¿Cuál es su especialidad?",
      answer: "Nuestra especialidad es El Completo, un plato emblemático que incluye carne premium con acompañamientos a elección, además de nuestras famosas mazorcas y platos antioqueños."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900">
      <Header />
      
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-between hover:bg-white/20 transition-all"
              >
                <div className="flex items-center">
                  <FaQuestionCircle className="text-yellow-400 mr-4 text-xl" />
                  <span className="text-white text-lg font-medium">{faq.question}</span>
                </div>
                <FaAngleDown
                  className={`text-yellow-400 text-xl transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-b-lg mt-1">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;