import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Nosotros = () => {
  const locations = [
    {
      city: "Santa Marta",
      address: "Calle 82 #11-75, Zona Rosa",
      phone: "601-234-5678",
      hours: "Lun-Dom: 12:00 PM - 10:00 PM",
      image: "/img/sede-bogota.jpg"
    },
    {
      city: "Santa Marta ",
      address: "Carrera 43A #1-50, Poblado",
      phone: "604-567-8901",
      hours: "Lun-Dom: 12:00 PM - 10:00 PM",
      image: "/img/sede-medellin.jpg"
    },
  
  ];

  const moments = [
    {
      title: "Nuestros Inicios",
      description: "El sueño comenzó en una pequeña cocina familiar donde las recetas tradicionales cobraban vida.",
      image: "/img/YEI02214.jpg",
      year: "1986"
    },
    {
      title: "Expansión",
      description: "La calidad y el sabor nos llevaron a abrir nuevas sedes para llegar a más personas.",
      image: "/img/YEI02152.jpg",
      year: "2000"
    },
    {
      title: "Innovación",
      description: "Incorporamos nuevas técnicas y sabores manteniendo nuestra esencia tradicional.",
      image: "/img/YEI02244.jpg",
      year: "2015"
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-yellow-50 to-white">
      <Header />
      
      {/* Hero Section con Parallax */}
      <section className="relative h-[100vh] bg-cover bg-center bg-fixed overflow-hidden" 
               style={{ backgroundImage: "url('/img/YEI04687.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center text-white px-4 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 [text-shadow:_4px_4px_0_#00000030]">
              SOBRE NOSOTROS
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400">Tradición y sabor desde 1986</p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <img 
                src="/img/logo_el_banano-removebg-preview.png"
                alt="Logo"
                className="w-32 h-32 mx-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Nuestra Trayectoria
          </motion.h2>
          <div className="space-y-24">
            {moments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -inset-4 bg-yellow-400 rounded-lg transform rotate-2" />
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="relative w-full h-[300px] object-cover rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-900 text-yellow-400 text-2xl font-bold p-4 rounded-full">
                    {moment.year}
                  </div>
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-3xl font-bold mb-4 text-yellow-400">{moment.title}</h3>
                  <p className="text-lg leading-relaxed">{moment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Section con iconos y efectos */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-300">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-blue-800">Los pilares que nos definen</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaLeaf, title: "Frescura", text: "Ingredientes seleccionados diariamente" },
              { icon: FaHeart, title: "Pasión", text: "Amor por la gastronomía en cada plato" },
              { icon: FaStar, title: "Excelencia", text: "Compromiso con la calidad superior" }
            ].map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <valor.icon className="text-5xl text-blue-900 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{valor.title}</h3>
                <p className="text-gray-600 text-center">{valor.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sedes Section con mapas interactivos */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Nuestras Sedes</h2>
            <p className="text-xl text-white">Encuentra El Banano cerca de ti</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 relative">
                  <img 
                    src={location.image} 
                    alt={location.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{location.city}</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-blue-900">
                    <FaMapMarkerAlt className="mr-2" />
                    <p>{location.address}</p>
                  </div>
                  <p className="text-gray-600">{location.phone}</p>
                  <p className="text-gray-600">{location.hours}</p>
                  <button className="w-full bg-yellow-400 text-blue-900 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
                    Ver en mapa
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Momentos */}
      <section className="py-20 bg-gradient-to-br from-yellow-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center text-blue-900 mb-16"
          >
            Momentos Especiales
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={`/img/momento-${index + 1}.jpg`}
                  alt={`Momento ${index + 1}`}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* Momentos Especiales section stays the same ... */}

      {/* Imagen Destacada */}
      <section className="relative h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="/img/FOTO.png"
            alt="El Banano Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
        </motion.div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl font-bold text-white mb-6">Una Experiencia Única</h2>
              <p className="text-xl text-yellow-400 mb-8">Donde cada plato cuenta una historia y cada visita se convierte en un recuerdo inolvidable.</p>
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all transform hover:scale-105">
                Reserva tu mesa
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Políticas y Privacidad */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Políticas y Privacidad</h2>
            <p className="text-xl text-white">Nuestro compromiso con tu confianza</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Políticas de Servicio</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">1</span>
                  <p>Reservas con anticipación mínima de 2 horas sujetas a disponibilidad.</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">2</span>
                  <p>Tiempo de espera máximo de 15 minutos para mesas reservadas.</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">3</span>
                  <p>Métodos de pago: efectivo, tarjetas débito/crédito y transferencias.</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Política de Privacidad</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">1</span>
                  <p>Protección de datos personales según normativa vigente.</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">2</span>
                  <p>Uso de información solo para mejorar la experiencia del cliente.</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold mr-3">3</span>
                  <p>No compartimos información con terceros sin autorización.</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white mt-8"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Términos y Condiciones</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Reservas</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Las reservas están sujetas a disponibilidad y pueden requerir un depósito previo para grupos grandes. 
                    La cancelación debe realizarse con mínimo 2 horas de anticipación.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Servicio</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Nos reservamos el derecho de admisión y servicio. El tiempo estimado de preparación 
                    puede variar según la ocupación del restaurante.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;