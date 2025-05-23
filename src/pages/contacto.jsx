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
    mensaje: '',
    tipoMensaje: 'general', // nuevo campo para el tipo de mensaje
    calificacion: 0 // nuevo campo para la calificación
  });

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      calificacion: rating
    });
  };

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
      const templateParamsAdmin = {
        to_email: 'elias.um94@gmail.com',
        from_name: `${formData.nombre} ${formData.apellido}`,
        from_email: formData.email,
        phone: formData.celular,
        message: formData.mensaje,
        calificacion: formData.calificacion // añadido
      };
  
      const templateParamsUser = {
        to_email: formData.email,
        from_name: `${formData.nombre} ${formData.apellido}`,
        from_email: formData.email,
        phone: formData.celular,
        message: formData.mensaje,
        calificacion: formData.calificacion, // añadido
        html_message: `
          <div style="font-family: system-ui, sans-serif, Arial; font-size: 16px">
            <a style="text-decoration: none; outline: none" href="https://el-banano-web.vercel.app/" target="_blank">
              <img style="height: 32px; vertical-align: middle" height="32" src="https://el-banano-web.vercel.app/public/img/logo_el_banano-removebg-preview.png" alt="El Banano" />
            </a>
        
            <p style="padding-top: 16px; border-top: 1px solid #eaeaea">Hola ${formData.nombre} ${formData.apellido},</p>
        
            <p>¡Gracias por ponerte en contacto con nosotros!</p>
        
            <p>Hemos recibido tu ${formData.tipoMensaje === 'servicio' ? 'comentario sobre nuestro servicio' : 'mensaje'} y te responderemos lo antes posible. A continuación un resumen:</p>
        
            <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 5px;">
              ${formData.tipoMensaje === 'servicio' && formData.calificacion > 0 ? 
                `<p><strong>Calificación:</strong> ${'⭐'.repeat(formData.calificacion)}${'☆'.repeat(5 - formData.calificacion)} (${formData.calificacion}/5)</p>` : ''}
              <p><strong>Correo:</strong> ${formData.email}</p>
              <p><strong>Teléfono:</strong> ${formData.celular}</p>
              <p><strong>Mensaje:</strong><br />${formData.mensaje}</p>
            </div>
        
            <p style="padding-top: 16px; border-top: 1px solid #eaeaea">
              ¡Saludos!<br />
              Equipo El Banano
            </p>
          </div>
        `
      };

      await Promise.all([
        emailjs.send(
          'Elbanano2428..',
          'template_z55fmk9',
          templateParamsAdmin,
          '__2oYDNAMCtJgTb8-'
        ),
        emailjs.send(
          'Elbanano2428..',
          'template_v3xmlgf',
          templateParamsUser,
          '__2oYDNAMCtJgTb8-'
        )
      ]);

      alert('Mensaje enviado exitosamente!');
      setFormData({
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        mensaje: '',
        tipoMensaje: 'general', // resetear a valor por defecto
        calificacion: 0 // resetear a 0
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-950">
      <div className='mb-32'>
      <Header/>

      </div>

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
              <label className="block text-white mb-2">Tipo de Mensaje</label>
              <select
                name="tipoMensaje"
                value={formData.tipoMensaje}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-yellow-400"
              >
                <option value="general">Mensaje General</option>
                <option value="servicio">Comentario sobre el Servicio</option>
              </select>
            </div>

            {formData.tipoMensaje === 'servicio' && (
              <div>
                <label className="block text-white mb-2">Califica Nuestro Servicio</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleStarClick(star)}
                      className="text-3xl focus:outline-none"
                    >
                      {star <= formData.calificacion ? '⭐' : '☆'}
                    </motion.button>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  {formData.calificacion > 0 ? `${formData.calificacion} de 5 estrellas` : 'Selecciona tu calificación'}
                </p>
              </div>
            )}

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
      <Footer />
    </div>
  );
};

export default Contacto;
