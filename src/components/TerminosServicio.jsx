import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const TerminosServicio = () => {
  const terminos = [
    {
      titulo: "1. Aceptación de los Términos",
      contenido: "Al acceder y utilizar los servicios de Restaurante El Banano, ya sea en nuestras ubicaciones físicas o a través de nuestros servicios digitales, usted acepta estos términos y condiciones en su totalidad."
    },
    {
      titulo: "2. Reservaciones",
      contenido: "Las reservaciones están sujetas a disponibilidad. Nos reservamos el derecho de cancelar o modificar reservaciones en circunstancias excepcionales. Se requiere un aviso de cancelación de al menos 2 horas antes de la hora reservada."
    },
    {
      titulo: "3. Política de Servicio",
      contenido: "Nos esforzamos por brindar el mejor servicio posible. Los tiempos de preparación pueden variar según la demanda. Nos reservamos el derecho de rechazar el servicio a cualquier cliente que muestre comportamiento inadecuado."
    },
    {
      titulo: "4. Calidad y Seguridad Alimentaria",
      contenido: "Garantizamos la calidad de nuestros productos y cumplimos con todas las normas de seguridad alimentaria. Sin embargo, es responsabilidad del cliente informar sobre alergias o restricciones dietéticas específicas."
    },
    {
      titulo: "5. Política de Precios",
      contenido: "Los precios están sujetos a cambios sin previo aviso. Todos los precios incluyen IVA. Cargos adicionales pueden aplicar para servicios especiales o eventos."
    },
    {
      titulo: "6. Servicio a Domicilio",
      contenido: "El servicio a domicilio está disponible en áreas seleccionadas. Los tiempos de entrega son estimados y pueden variar según el tráfico y las condiciones climáticas. Aplican cargos adicionales por entrega."
    },
    {
      titulo: "7. Propiedad Intelectual",
      contenido: "Todo el contenido, incluyendo logotipos, imágenes y menús, es propiedad de Restaurante El Banano y está protegido por leyes de propiedad intelectual."
    },
    {
      titulo: "8. Política de Privacidad",
      contenido: "Protegemos su información personal según nuestra política de privacidad. Los datos recopilados se utilizan únicamente para mejorar nuestros servicios y comunicación con clientes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-400 relative overflow-hidden">
      {/* Líneas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Líneas onduladas */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-3" />
          <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform rotate-2" />
          <div className="absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-1" />
          <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform rotate-3" />
          <div className="absolute top-[90%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-2" />
        </div>

        {/* Círculos decorativos */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Líneas diagonales */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform -rotate-45" />
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform rotate-45" />
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform -rotate-45" />
        </div>

        {/* Patrones geométricos */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full transform rotate-45" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/10 rounded-full transform -rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-24
      mt-9">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 mb-6 shadow-lg">
            Documentación Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Términos de Servicio
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Por favor, lea detenidamente nuestros términos y condiciones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {terminos.map((termino, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-4 drop-shadow">
                    {termino.titulo}
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    {termino.contenido}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 relative group"
          >
            <div className="absolute inset-0 bg-white/20 rounded-2xl transform -rotate-1 transition-transform group-hover:-rotate-2" />
            <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow">
                Información de Contacto
              </h3>
              <p className="text-white/90">
                Si tiene alguna pregunta sobre estos términos de servicio, por favor contáctenos:
              </p>
              <ul className="mt-4 space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <span className="text-red-200">•</span>
                  <span>Email: recursosreb@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-200">•</span>
                  <span>Teléfono: +57 310 334 7015</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-200">•</span>
                  <span>Direcciones: CC Arrecife Rodadero-Santa Marta, CC Buena Vista Santa Marta</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TerminosServicio;