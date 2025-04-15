import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = React.useRef(null);

  // Base de conocimiento del chatbot
  const knowledgeBase = {
    greetings: {
      patterns: [/hola/, /buenos días/, /qué tal/, /hi/, /hello/],
      responses: [
        "¡Hola! Soy el asistente de El Banano 🍌. ¿En qué puedo ayudarte hoy?",
        "¡Buen día! ¿Quieres saber sobre nuestro menú, ubicaciones u horarios?"
      ],
      options: ["Menú", "Ubicaciones", "Horarios", "Contacto"]
    },
    menu: {
      patterns: [/menú/, /comida/, /platos?/, /qué tienen/],
      responses: [
        "Nuestro menú incluye:\n\n🍌 Plátano Maduro - $12.000\n🥩 Lomo Ancho - $25.000\n🌮 Arepas Paisas - $8.000",
        "Platos destacados:\n• Bandeja Paisa - $18.000\n• Sancocho - $15.000\n• Postres desde $7.000"
      ],
      options: ["Combos", "Bebidas", "Postres", "Volver"]
    },
    locations: {
      patterns: [/ubicación/, /dónde están/, /sucursal/, /dirección/],
      responses: [
        "📍 CC Buena Vista - Carrera 50 #80-120\n📍 CC Arrecife - Calle 30 #82-65",
        "Estamos en:\n• Centro Comercial Buena Vista\n• Centro Comercial Arrecife"
      ],
      options: ["Horarios", "Cómo llegar", "Volver"]
    }
  };

  // Analizar el mensaje del usuario
  const analyzeMessage = (text) => {
    text = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
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
      response: "No entendí tu pregunta. ¿Quieres información sobre nuestro menú, ubicaciones u horarios?",
      options: ["Menú", "Ubicaciones", "Horarios"]
    };
  };

  // Efecto de escritura
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

  // Enviar mensaje
  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    // Mensaje del usuario
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    
    // Respuesta del bot después de un breve retraso
    setTimeout(() => {
      const { response, options } = analyzeMessage(inputValue);
      typeMessage(response, options);
    }, 800);
  };

  // Respuesta rápida con botones
  const handleQuickReply = (option) => {
    setMessages(prev => [...prev, { text: option, sender: 'user' }]);
    
    setTimeout(() => {
      const { response, options } = analyzeMessage(option);
      typeMessage(response, options);
    }, 500);
  };

  // Auto-scroll al final de los mensajes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mensaje inicial
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        typeMessage(
          "¡Hola! Soy el asistente de El Banano 🍌. ¿En qué puedo ayudarte hoy?",
          ["Menú", "Ubicaciones", "Horarios"]
        );
      }, 1000);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Botón flotante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </motion.button>

      {/* Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-yellow-500 text-white p-3 flex justify-between items-center">
              <h3 className="font-bold">Asistente El Banano</h3>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
                </svg>
              </button>
            </div>

            {/* Mensajes */}
            <div className="h-64 p-3 overflow-y-auto bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.sender === 'options' ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.options.map((option, j) => (
                        <button
                          key={j}
                          onClick={() => handleQuickReply(option)}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200 transition"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div
                      className={`inline-block px-3 py-2 rounded-lg max-w-xs ${
                        msg.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-800'
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
                </div>
              ))}
              {isTyping && (
                <div className="text-left">
                  <div className="inline-block px-3 py-2 bg-gray-200 text-gray-800 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-3 py-2 rounded-r-lg hover:bg-yellow-600 disabled:opacity-50"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;