import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaRegSmile } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = React.useRef(null);

  const knowledgeBase = {
    greetings: {
      patterns: [/hola/i, /buenos\s*d[ií]as/i, /buenas/i, /hi/i, /hello/i, /hey/i],
      responses: [
        "¡Hola! 👋 Soy BananoBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?",
        "¡Bienvenido a El Banano! 🍌 ¿Qué te gustaría saber?"
      ],
      options: ["🍽️ Ver Menú", "📍 Ubicaciones", "⏰ Horarios", "📞 Reservas"]
    },
    menu: {
      patterns: [/men[uú]/i, /comida/i, /platos?/i, /qu[eé]\s*tienen/i, /carta/i, /ver\s*men[uú]/i],
      responses: [
        "🍽️ Nuestro menú destacado:\n\n🥘 Platos Principales:\n• Bandeja Paisa Premium - $35.000\n• Lomo al Trapo - $42.000\n• Pescado en Salsa - $38.000\n\n🥗 Entradas:\n• Patacones con Hogao - $12.000\n• Empanadas (6 uds) - $15.000\n\n🍺 Bebidas:\n• Jugos Naturales - $8.000\n• Cervezas Artesanales - $12.000"
      ],
      options: ["Ver Especialidades", "🍷 Bebidas", "🍰 Postres", "📞 Reservar"]
    },
    locations: {
      patterns: [/ubicaci[oó]n/i, /d[oó]nde\s*est[aá]n/i, /sucursal/i, /direcci[oó]n/i, /local/i, /sede/i],
      responses: [
        "📍 Nuestras sedes están ubicadas en:\n\n🏢 Sede Principal:\n• CC Buenavista - Local 301\n• Horario: 12:00 PM - 10:00 PM\n\n🏢 Sede Centro:\n• CC Arrecife - Local 205\n• Horario: 12:00 PM - 9:00 PM\n\n¿Te gustaría hacer una reserva?"
      ],
      options: ["📞 Reservar", "⏰ Ver Horarios", "🚗 Cómo Llegar", "🔄 Volver"]
    },
    schedule: {
      patterns: [/horarios?/i, /hora/i, /cuando\s*abren/i, /horario\s*de\s*atenci[oó]n/i, /ver\s*horarios?/i],
      responses: [
        "⏰ Nuestros horarios de atención:\n\n🏢 Sede Principal:\n• Lunes a Domingo: 12:00 PM - 10:00 PM\n\n🏢 Sede Centro:\n• Lunes a Domingo: 12:00 PM - 9:00 PM\n\n¿Deseas hacer una reserva?"
      ],
      options: ["📞 Hacer Reserva", "📍 Ver Ubicaciones", "🔄 Volver al Inicio"]
    },
    reservations: {
      patterns: [/reserva/i, /reservar/i, /reservaci[oó]n/i, /mesa/i, /hacer reserva/i],
      responses: [
        "🎉 ¡Excelente elección! Para hacer una reserva necesitamos:\n\n1️⃣ Número de personas\n2️⃣ Fecha y hora\n3️⃣ Sede de preferencia\n\nPuedes llamarnos al:\n📞 +57 300-123-4567\n\n¿O prefieres que te contactemos?"
      ],
      options: ["📱 Dejar Contacto", "📍 Ver Ubicaciones", "🔄 Volver al Inicio"]
    }
  };

  const analyzeMessage = (text) => {
    text = text.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, "")
      .trim();

    const exactMatches = {
      "menu": "menu",
      "ver menu": "menu",
      "ubicaciones": "locations",
      "ubicacion": "locations",
      "horarios": "schedule",
      "horario": "schedule",
      "reservar": "reservations",
      "reserva": "reservations",
      "volver": "greetings",
      "inicio": "greetings",
      "volver al inicio": "greetings"
    };

    if (exactMatches[text]) {
      const intent = exactMatches[text];
      return {
        intent,
        response: knowledgeBase[intent].responses[0],
        options: knowledgeBase[intent].options
      };
    }

    for (const [intent, data] of Object.entries(knowledgeBase)) {
      if (data.patterns.some(pattern => pattern.test(text))) {
        return {
          intent,
          response: data.responses[Math.floor(Math.random() * data.responses.length)],
          options: data.options
        };
      }
    }
    
    return {
      intent: 'unknown',
      response: "Lo siento, no entendí tu pregunta. ¿Te gustaría información sobre nuestro menú, ubicaciones u horarios?",
      options: ["🍽️ Ver Menú", "📍 Ubicaciones", "⏰ Horarios"]
    };
  };

  const typeMessage = (text, options) => {
    setIsTyping(true);
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setMessages(prev => {
          const last = prev[prev.length - 1];
          if (last?.sender === 'bot') {
            return [...prev.slice(0, -1), { ...last, text: text.substring(0, i + 1) }];
          }
          return [...prev, { text: text.substring(0, i + 1), sender: 'bot' }];
        });
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        if (options) {
          setMessages(prev => [...prev, { options, sender: 'options' }]);
        }
        scrollToBottom();
      }
    }, 30);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    
    setTimeout(() => {
      const { response, options } = analyzeMessage(inputValue);
      typeMessage(response, options);
    }, 800);
  };

  const handleQuickReply = (option) => {
    const cleanOption = option.replace(/[🍽️📍⏰📞🍷🍰🚗🔄📱]/g, '').trim();
    setMessages(prev => [...prev, { text: cleanOption, sender: 'user' }]);
    
    setTimeout(() => {
      const { response, options } = analyzeMessage(cleanOption);
      typeMessage(response, options);
    }, 500);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        typeMessage(
          "¡Hola! 👋 Soy el asistente de El Banano 🍌. ¿En qué puedo ayudarte hoy?",
          ["🍽️ Ver Menú", "📍 Ubicaciones", "⏰ Horarios", "📞 Reservas"]
        );
      }, 1000);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-6 h-6"
        >
          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
          <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="absolute bottom-16 right-0 w-[280px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-yellow-200"
          >
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-5 h-5"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                </svg>
                <h3 className="font-bold text-sm">BananoBot</h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
              >
                <FaTimes className="h-4 w-4" />
              </motion.button>
            </div>

            <div className="h-[250px] p-3 overflow-y-auto bg-gray-50 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'options' ? (
                    <div className="flex flex-wrap gap-2 w-full mt-2">
                      {msg.options.map((option, j) => (
                        <motion.button
                          key={j}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleQuickReply(option)}
                          className="px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-xs hover:bg-yellow-200 transition-colors shadow-sm hover:shadow"
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div
                      className={`max-w-[80%] p-2.5 rounded-xl text-sm ${
                        msg.sender === 'user'
                          ? 'bg-yellow-500 text-white rounded-br-none'
                          : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
                      }`}
                    >
                      {msg.text.split('\n').map((line, k) => (
                        <React.Fragment key={k}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-3 rounded-xl rounded-bl-none shadow-sm">
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;