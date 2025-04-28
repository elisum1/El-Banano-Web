import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Visitanos from '../components/Visitanos';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contacto = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    mensaje: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(true);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        to_email: 'elias.um94@gmail.com',
        from_name: `${formData.nombre} ${formData.apellido}`,
        from_email: formData.email,
        phone: formData.celular,
        message: formData.mensaje,
      };

      await emailjs.send(
        'Elbanano2428..',
        'template_z55fmk9',
        templateParams,
        '__2oYDNAMCtJgTb8-'
      );

      alert('Mensaje enviado exitosamente!');
      setFormData({
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-950">
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-50 bg-yellow-400"
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contáctanos</h1>
          <p className="text-gray-300 text-lg">
            Estamos aquí para escucharte. Envíanos tu mensaje y te responderemos lo antes posible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-white mb-2">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-white mb-2">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="celular" className="block text-white mb-2">Número de Celular</label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-white mb-2">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-yellow-400"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>

      <Visitanos />
      <Footer/>
    </div>
  );
};

export default Contacto;