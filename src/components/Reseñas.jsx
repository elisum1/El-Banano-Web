import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Reseñas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  const testimonials = [
    {
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "¡Las mejores carnes de la ciudad! El ambiente es increíble y el servicio excepcional. Definitivamente volveré.",
      platform: "TripAdvisor",
      date: "Hace 2 semanas"
    },
    {
      name: "María González",
      rating: 5,
      comment: "La picada familiar es espectacular. Perfecto para compartir con amigos y familia. Los plátanos son únicos.",
      platform: "Instagram",
      date: "Hace 1 mes"
    },
    {
      name: "Juan Pérez",
      rating: 5,
      comment: "Tradición y sabor en cada plato. El churrasco es una obra maestra. ¡No pueden perdérselo!",
      platform: "TripAdvisor",
      date: "Hace 3 días"
    }
  ];

  const reviews = [
    {
      platform: 'TripAdvisor',
      icon: '/img/Tripadvisor.png',
      rating: 4.6,
      reviews: '4,350 reseñas',
      stars: 5,
      color: 'from-green-400 to-green-600',
      url: 'https://www.tripadvisor.co/Restaurant_Review-g297484-d1650487-Reviews-Restaurante_El_Banano-Santa_Marta_Santa_Marta_Municipality_Magdalena_Department.html'
    },
    {
      platform: 'Facebook',
      icon: '/img/Facebook.png',
      rating: 4.2,
      reviews: '1,054 reseñas',
      stars: 4,
      color: 'from-blue-400 to-blue-600',
      url: 'https://web.facebook.com/restauranteelbanano'
    },
    {
      platform: 'Restaurant Guru',
      icon: '/img/RestaurantGuru.svg',
      rating: 4.0,
      reviews: '309 reseñas',
      stars: 4,
      color: 'from-red-400 to-red-600',
      url: 'https://es.restaurantguru.com/Asadero-el-Banano-Gaira'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen bg-blue-950 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-40 h-40 bg-white/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            EXPERIENCIAS
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lo que nuestra comunidad comparte sobre El Banano
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.platform}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.comment}</p>
              <p className="text-gray-400 text-sm">{testimonial.date}</p>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <ReviewCard 
                item={item} 
                onHover={() => setIsHovered(index)}
                onLeave={() => setIsHovered(null)}
              />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="w-full"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <ReviewCard item={reviews[currentSlide]} />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </motion.button>

            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-yellow-400 scale-110' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Síguenos y Comparte tu Experiencia
          </h3>
          
          <div className="flex justify-center gap-6">
            {[
              { 
                icon: '/img/Facebook.png', 
                name: 'Facebook', 
                url: 'https://web.facebook.com/restauranteelbanano'
              },
              { 
                icon: '/img/Instagram.png', 
                name: 'Instagram', 
                url: 'https://www.instagram.com/asaderoelbanano/'
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-12 h-12 object-contain"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ReviewCard = ({ item, onHover, onLeave }) => {
  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:border-white/40 transition-colors"
    >
      <div className="flex flex-col items-center">
        <img src={item.icon} alt={item.platform} className="w-16 h-16 object-contain mb-6" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`w-6 h-6 ${i < item.stars ? 'text-yellow-400' : 'text-gray-500'} fill-current`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </motion.svg>
            ))}
          </div>
          
          <h3 className="text-4xl font-bold text-white mb-2">{item.rating}</h3>
          <p className="text-gray-300 mb-6">{item.reviews}</p>
          
          <motion.a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-blue-900 font-semibold hover:shadow-lg transition-all duration-300"
          >
            Ver Reseñas
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reseñas;