import React, {useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reseñas from "../components/Reseñas";
import Galeria from "../components/Galeria";
import Visitanos from "../components/Visitanos";
import { motion } from "framer-motion";
import CombosBanano from "../components/CombosBanano";

const Inicio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = {
      text: inputValue,
      sender: 'user'
    };
    setMessages([...messages, userMessage]);
    setInputValue("");

    // Respuesta del bot
    setTimeout(() => {
      let botResponse = {};
      if (inputValue.toLowerCase().includes("punto") || inputValue.toLowerCase().includes("sucursal")) {
        botResponse = {
          text: "Tenemos dos puntos de atención:\n1. CC Buena Vista\n2. CC Arrecife\nHorario: Lunes a Domingo de 10am a 10pm",
          sender: 'bot'
        };
      } else if (inputValue.toLowerCase().includes("whatsapp") || inputValue.toLowerCase().includes("wsp")) {
        botResponse = {
          text: "Puedes contactarnos por WhatsApp al +57 123 456 7890",
          sender: 'bot'
        };
      } else {
        botResponse = {
          text: "Hola, soy el asistente de El Banano. ¿En qué puedo ayudarte? Puedes preguntar por:\n- Puntos de atención\n- Número de WhatsApp",
          sender: 'bot'
        };
      }
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  return (
    <section id='home' className="min-h-screen">
      <Header isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} isScrolled={isScrolled}/>
      
      {/* Botón flotante para subir */}
      {isScrolled && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
          aria-label="Volver arriba"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      )}

      {/* Chatbot */}
      <div className="fixed bottom-6 left-6 z-50">
        {chatOpen ? (
          <div className="w-72 bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-yellow-500 text-white p-3 flex justify-between items-center">
              <h3 className="font-bold">Asistente El Banano</h3>
              <button 
                onClick={() => setChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <div className="h-64 p-3 overflow-y-auto bg-gray-50">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSendMessage} className="p-3 border-t">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-yellow-500 text-white px-3 py-2 rounded-r-lg hover:bg-yellow-600"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button 
            onClick={() => setChatOpen(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Abrir chat"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </button>
        )}
      </div>

<section className="relative h-screen w-full">
  {/* Versión Mobile (sin cambios) */}
  <div className="md:hidden absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center p-4">
    <img
      src="/img/logo_el_banano.png" 
      alt="El Banano Logo"
      className="h-[120px] w-auto mb-8"
    />
    <h1 className="text-5xl font-black text-center text-blue-900 leading-tight" style={{ WebkitTextStroke: "2px white", textShadow: "3px 3px 0 white" }}>
      EL BANANO
    </h1>
    <p className="text-xl italic font-medium text-red-500 mt-4 text-center">
      ¡Sabores que enamoran!
    </p>
  </div>

  {/* Versión Desktop - Imagen con efecto de salto */}
  <motion.div 
    className="hidden md:block absolute inset-0 overflow-hidden"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      delay: 0.5, 
      type: "spring", 
      stiffness: 100, 
      damping: 10 
    }}
  >
    <div 
      className="w-full h-full bg-cover "
      style={{ 
        backgroundImage: "url('/img/Gemini_Generated_Image_ad4z7iad4z7iad4z.jpeg')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-500/5 to-transparent"></div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
  </motion.div>

  {/* Contenido Desktop - Texto animado */}
  <div className="hidden md:flex relative z-10 h-full items-center">
    <div className="container mx-auto px-6">
      <div className="w-full md:w-1/2 lg:w-2/3">
        {/* Badge (aparece después del texto) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5 }}
          className="mb-6"
        >
          <span className="inline-block px-12 py-2 bg-black text-yellow-400 text-sm font-bold tracking-widest rounded-full border-2 border-yellow-400/50 shadow-lg">
            DESDE 1986
          </span>
        </motion.div>

        {/* Título con letras saltando */}
        <div className="overflow-hidden">
          {"EL BANANO".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 70, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: 3 + index * 0.12, // 3s base + delay progresivo
                type: "spring",
                stiffness: 500,
                damping: 15
              }}
              className="inline-block text-6xl md:text-7xl lg:text-9xl font-black text-blue-900"
              style={{ 
                WebkitTextStroke: "3px white",
                textShadow: "4px 9px 0 rgba(0,0,0,0.8)"
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Subtítulo */}
        <motion.p
          className="text-xl md:text-2xl italic font-medium text-red-500 mb-8 mt-4"
          style={{ textShadow: "1px 1px 0 white" }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 4.2, type: "spring" }}
        >
          ¡Sabores que enamoran!
        </motion.p>
      </div>
    </div>
  </div>
</section>

      <section className="relative bg-gradient-to-b from-yellow-50 to-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-gotham font-black text-blue-900 mb-6">
              DESCUBRE NUESTRAS <span className="text-red-600">ESPECIALIDADES</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tres tradiciones culinarias que definen nuestra esencia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-28">
  {[
    {
      title: "El Completo",
      description: "Cortes premium madurados y preparados al punto perfecto",
      img: "/img/YEI04584.jpg",
      color: "blue"
    },
    {
      title: "Los Antioqueños",
      description: "Lo mejor de nuestra tradición paisa en cada bocado",
      img: "/img/YEI04659.jpg",
      color: "red"
    },
    {
      title: "Mazorcas y Salchipapas",
      description: "Nuestra firma insignia, ahora mejor que nunca",
      img: "/img/DSC06518.jpg",
      color: "yellow"
    }
  ].map((item, index) => (
    <div 
      key={index}
      className="group relative h-80 md:h-[60vh] overflow-hidden shadow-lg md:shadow-2xl rounded-lg md:rounded-none"
    >
      <div className={`absolute inset-0 ${
        item.color === 'red' ? 'bg-gradient-to-t from-red-900/80 via-red-900/30 to-transparent' :
        item.color === 'yellow' ? 'bg-gradient-to-t from-yellow-900/80 via-yellow-900/30 to-transparent' :
        'bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent'
      } z-10`}></div>
      
      <img 
        src={item.img} 
        alt={item.title}
        className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 z-20 p-6 md:p-8 pb-2">
        {/* Título con fuente Allura */}
        <h3 
          className="text-4xl md:text-7xl font-allura font-normal mb-2 md:mb-3 leading-none"
          style={{
            textShadow: `
              2px 2px 0 white,
              -2px -2px 0 white,
              2px -2px 0 white,
              -2px 2px 0 white
            `,
            color: item.color === 'red' ? '#ef4444' : 
                  item.color === 'yellow' ? '#eab308' : 
                  '#3b82f6'
          }}
        >
          {item.title}
        </h3>
        
        <p className="text-white/90 mb-4 md:mb-5 text-sm md:text-base">{item.description}</p>
        <button className={`${
          item.color === 'red' ? 'bg-red-500 hover:bg-red-600' :
          item.color === 'yellow' ? 'bg-yellow-500 hover:bg-yellow-600' :
          'bg-blue-500 hover:bg-blue-600'
        } text-white px-4 md:px-6 py-2 rounded-lg font-gotham font-bold transition-all text-sm md:text-base`}>
          Ver menú
        </button>
      </div>
    </div>
  ))}
</div>

<CombosBanano/>
          
          <div className="max-w-7xl mx-auto bg-yellow-400 p-5 md:p-14 text-white relative overflow-hidden rounded-lg md:rounded-none mb-16">
            <div className="relative z-10">
              <div className="mb-8 md:mb-16">
                <div className="flex items-center justify-center">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
                  <h2 className="mx-4 md:mx-8 text-4xl md:text-8xl font-gotham font-extrabold text-center uppercase tracking-tight text-blue-900">
                    DESDE 1986
                  </h2>
                  <div className="flex-1 h-0.5 bg-gradient-to-l from-white to-transparent"></div>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-4xl lg:text-6xl font-gotham font-extrabold uppercase mb-6 tracking-wide text-center">
                ¡EL <span className="text-blue-900">BANANO WEB</span> HA VUELTO!
              </h3>
              <p className="text-base md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-center">
                Redescubre nuestro plato insignia con una presentación renovada y sabores que honran nuestra tradición
              </p>
              
              <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-8 mt-12">
                <div className="relative h-40 md:h-full w-full overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="public/img/caption.jpg" 
                    alt="Plato Banano Web"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="relative h-40 md:h-full w-full overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/public/img/elbananoarrecife.jpeg" 
                    alt="Presentación Banano Web"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 md:py-16 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl w-full px-4">
          {[
            {
              title: "EL BANANO EN CC BUENA VISTA",
              video: "/img/¿Escuchaste esto Si, es el sonido de la gloria! digo, de un churrasco en la parrilla!.mp4",
              description: "Saborea la perfección de nuestro churrasco, preparado con los mejores ingredientes",
              buttonText: "ORDENAR AHORA",
              buttonClass: "rojo"
            },
            {
              title: "EL BANANO EN CC ARRECIFE",
              video: "/img/Que esperas para visitar nuestra sede en el Rodadero y recordar todos estos lindos momentos.mp4",
              description: "Disfruta del sabor único de nuestros platillos en un ambiente inolvidable",
              buttonText: "VISÍTANOS AHORA",
              buttonClass: "azul"
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row h-auto md:h-[400px] w-full shadow-lg rounded-xl overflow-hidden">
              <video
                src={item.video}
                className="w-full md:w-1/2 h-64 md:h-full object-cover"
                autoPlay
                loop
                muted
              />
              <div className={`flex flex-col w-full md:w-1/2 h-full text-center font-gotham p-6 ${index === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="mb-4 flex flex-col justify-center items-center h-full gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                    {item.title}
                  </h3>
                  <p className="font-light text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                <button className={`${item.buttonClass} text-white py-2 px-4 hover:opacity-90 transition w-full rounded-lg`}>
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Galeria/>
      <Reseñas/>
      <Visitanos/>
      <Footer/>
    </section>
  );
};

export default Inicio;