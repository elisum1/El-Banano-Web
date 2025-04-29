import React from 'react';
import { motion } from 'framer-motion';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';

const TrabajaConNosotros = () => {
  const positions = [
    {
      title: "Chef de Cocina",
      description: "Buscamos un chef apasionado con experiencia en cocina colombiana",
      requirements: [
        "Mínimo 3 años de experiencia",
        "Especialidad en cocina tradicional",
        "Capacidad de liderazgo",
        "Gestión de inventarios"
      ],
      type: "Tiempo completo",
      isAvailable: false
    },
    {
      title: "Mesero/a",
      description: "Personal de servicio con excelente atención al cliente",
      requirements: [
        "Experiencia en servicio al cliente",
        "Buena presentación personal",
        "Trabajo en equipo",
        "Disponibilidad de horarios"
      ],
      type: "Tiempo completo/medio tiempo",
      isAvailable: false
    },
    {
      title: "Auxiliar de Cocina",
      description: "Apoyo en la preparación y manejo de alimentos",
      requirements: [
        "Conocimientos básicos de cocina",
        "Curso de manipulación de alimentos",
        "Proactividad",
        "Trabajo bajo presión"
      ],
      type: "Tiempo completo",
      isAvailable: false
    },
    {
      title: "Parrillero",
      description: "Experto en la preparación de carnes a la parrilla y manejo de temperaturas",
      requirements: [
        "Experiencia mínima de 2 años como parrillero",
        "Conocimiento en cortes de carne",
        "Manejo de tiempos y temperaturas",
        "Curso de manipulación de alimentos vigente"
      ],
      type: "Tiempo completo",
      isAvailable: false
    },
    {
      title: "Cajero/a",
      description: "Responsable del manejo de caja y atención al cliente",
      requirements: [
        "Experiencia en manejo de caja",
        "Conocimientos básicos de contabilidad",
        "Excelente servicio al cliente",
        "Disponibilidad de horarios rotativos"
      ],
      type: "Tiempo completo",
      isAvailable: false
    }
  ];

  const benefits = [
    {
      title: "Desarrollo Profesional",
      description: "Oportunidades de crecimiento y capacitación continua",
      icon: "🎯"
    },
    {
      title: "Ambiente Laboral",
      description: "Equipo dinámico y ambiente de trabajo positivo",
      icon: "👥"
    },
    {
      title: "Beneficios",
      description: "Prestaciones de ley",
      icon: "💰"
    },
    {
      title: "Estabilidad",
      description: "Empresa con más de 35 años en el mercado",
      icon: "🏢"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900">
        <div className='mb-12'>
      <Header />

        </div>
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Sección de Encabezado */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trabaja con Nosotros
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Únete a la familia El Banano y sé parte de nuestra tradición de excelencia gastronómica
            </p>
          </motion.div>

          {/* Sección de Beneficios */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-yellow-400 backdrop-blur-sm p-6 rounded-xl text-center"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-950">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Sección de Vacantes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${
                  position.isAvailable ? 'border-white/10' : 'border-red-500/10'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-yellow-400">{position.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    position.isAvailable 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {position.isAvailable ? 'Vacante Disponible' : 'No Disponible'}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Requisitos:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{position.type}</span>
                  <button 
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      position.isAvailable 
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-blue-900' 
                        : 'bg-gray-600 cursor-not-allowed text-gray-300'
                    }`}
                    disabled={!position.isAvailable}
                  >
                    {position.isAvailable ? 'Aplicar' : 'No Disponible'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sección de Contacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">¿Te interesa unirte a nuestro equipo?</h2>
            <p className="text-gray-300 mb-8">
              {positions.some(pos => pos.isAvailable) 
                ? 'Envía tu CV a: ' 
                : 'Actualmente no hay vacantes disponibles, pero puedes estar pendiente de futuras oportunidades en: '}
              <span className="text-yellow-400">recursosreb@gmail.com</span>
            </p>
            <div className="flex justify-center gap-4">
              <button 
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  positions.some(pos => pos.isAvailable)
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-600 cursor-not-allowed text-gray-300'
                }`}
                disabled={!positions.some(pos => pos.isAvailable)}
              >
                Enviar CV
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrabajaConNosotros;