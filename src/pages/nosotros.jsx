import React from 'react';
import Header from '../components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome

const Nosotros = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      {/* Historia del Restaurante */}
      <section className="min-h-screen flex justify-center items-center bg-white px-8 py-16">
        <div className="bg-yellow-300/90 text-white grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-lg p-10 w-full max-w-7xl gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Nuestra Historia</h2>
            <p className="text-lg leading-relaxed">
              Desde 1986, en Restaurante El Banano nos dedicamos a ofrecer lo mejor de la cocina tradicional con un toque moderno. Comenzamos como un pequeño restaurante familiar y hemos crecido gracias al apoyo de nuestros clientes, quienes disfrutan de nuestros platos únicos y auténticos. Hoy en día, seguimos comprometidos con la misma pasión por la excelencia en cada uno de nuestros servicios.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/img/historia-restaurante.jpg"
              alt="Historia del restaurante"
              className="w-[35rem] h-[25rem] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 rounded-md gap-12 items-center bg-indigo-200">
        <div className="flex flex-col md:flex-row items-center space-x-6">
          <img
            src="/img/Screenshot 2024-10-08 at 12-49-09 Restaurante El Banano (@elbananorestaurante) • Instagram photos and videos.png"
            alt="Equipo"
            className="w-80 h-80 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="mt-6 md:mt-0">
            <h3 className="text-3xl font-semibold text-blue-900 mb-2">Nuestro Equipo</h3>
            <p className="text-gray-600 text-lg">
              Conoce a nuestro apasionado equipo que trabaja incansablemente para brindarte la mejor experiencia gastronómica.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-x-6">
          <img
            src="/img/Screenshot 2024-10-08 at 12-51-31 Restaurante El Banano (@elbananorestaurante) • Instagram photos and videos.png"
            alt="Equipo"
            className="w-80 h-80 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="mt-6 md:mt-0">
            <h3 className="text-3xl font-semibold text-blue-900 mb-2">Nuestro Equipo</h3>
            <p className="text-gray-600 text-lg">
              Nuestro equipo está compuesto por profesionales dedicados y creativos que aman lo que hacen.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col relative mt-4">
  {/* Sección de imagen de fondo */}
  <div className="relative flex-grow">
    <img 
      src="/img/Screenshot 2024-10-08 at 10-22-03 Restaurante El Banano (@elbananorestaurante) • Fotos y vídeos de Instagram.png" 
      alt="Restaurante El Banano" 
      className="absolute inset-0 object-cover w-full h-[44.5vh] opacity-50" 
    />
    <div className="absolute inset-[0%] bg-black opacity-40 z-10" /> {/* Capa oscura para mejorar la legibilidad */}

    <div className="absolute top-0 left-0 flex flex-col items-start z-20 w-full h-full px-8">
      <h2 className="text-6xl font-bold text-white mb-6">Llevamos el restaurante a tu casa</h2>
      <div className="flex justify-end space-x-8  w-full  ">
        <a href="tel:+1234567890" className="text-yellow-300 text-8xl hover:text-yellow-400 transition duration-300">
          <i className="fas fa-phone-alt"></i> {/* Icono de llamada */}
        </a>
        <a href="https://wa.me/1234567890" className="text-yellow-300 text-8xl hover:text-yellow-400 transition duration-300">
          <i className="fab fa-whatsapp"></i> {/* Icono de WhatsApp */}
        </a>
        <a href="/cart" className="text-yellow-300 text-8xl hover:text-yellow-400 transition duration-300">
          <i className="fas fa-shopping-cart"></i> {/* Icono de carrito de compras */}
        </a>
      </div>
    </div>
  </div>

  {/* Nueva sección para el título y el botón */}
  <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8">
    <div className="md:w-1/2 flex flex-col items-start justify-center h-full">
      <h2 className="text-5xl font-bold text-blue-900 jost">¿Quieres tu pedido de regalo?</h2>
      <p className="mt-4 text-gray-700">Haz tu pedido ahora y sorprende a alguien especial.</p>
      <div className="mt-6">
        <button className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
          Llama ahora
        </button>
      </div>
    </div>
    
    {/* Sección de contacto */}
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg z-20 mr-[10%] mt-6 md:mt-0 md:w-1/2 flex items-center justify-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">Contáctanos</h2>
      <form className="w-full">
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700" htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700" htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Ingresa tu correo"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700" htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            rows="5"
            placeholder="Escribe tu mensaje"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  </div>
</section>



      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg">Contacto</h4>
            <p className="mt-2 text-gray-300">Teléfono: 123-456-7890</p>
            <p className="text-gray-300">Email: info@restaurantebanano.com</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Política de Cookies</h4>
            <p className="mt-2 text-gray-300">
              Este sitio utiliza cookies para mejorar la experiencia del usuario. Al continuar, aceptas nuestra política de cookies.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Redes Sociales</h4>
            <div className="mt-2">
              <a href="#" className="text-yellow-300 hover:underline">Facebook</a>,{' '}
              <a href="#" className="text-yellow-300 hover:underline">Instagram</a>,{' '}
              <a href="#" className="text-yellow-300 hover:underline">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Nosotros;
