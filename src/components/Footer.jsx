import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Primera Columna: Navegación */}
        <div className="space-y-4">
          <h4 className="text-xl font-gotham font-bold uppercase tracking-wider border-b-2 border-yellow-400 pb-2">Explora</h4>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-yellow-400 transition-colors">Inicio</a></li>
            <li><a href="/RestaurantLandingPage" className="hover:text-yellow-400 transition-colors">Menu</a></li>
            <li><a href="/nosotros" className="hover:text-yellow-400 transition-colors">Sobre Nosotros</a></li>
            <li><a href="/contacto" className="hover:text-yellow-400 transition-colors">Contacto</a></li>
          </ul>
        </div>

       

        {/* Tercera Columna: Contacto */}
        <div className="space-y-4">
          <h4 className="text-xl font-gotham font-bold uppercase tracking-wider border-b-2 border-yellow-400 pb-2">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>+57 310 334 7015</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>recursosreb@gmail.com</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-yellow-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>CC Arrecife Rodadero-Santa Marta, CC Buena Vista Santa Marta</span>
            </li>
          </ul>
        </div>

        {/* Cuarta Columna: Redes Sociales */}
        <div className="space-y-4">
          <h4 className="text-xl font-gotham font-bold uppercase tracking-wider border-b-2 border-yellow-400 pb-2">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com/elbanano" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
            <a href="https://instagram.com/elbanano" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/elbanano" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
          
          {/* Logo del restaurante */}
          <div className="pt-6">
            <img 
              src="/img/logo-banano-blanco.png" 
              alt="El Banano" 
              className="h-12 w-auto"
            />
            <p className="text-yellow-400 font-gotham font-bold mt-2">SABOR TRADICIONAL DESDE 1986</p>
          </div>
        </div>
      </div>

      {/* Pie de página inferior */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-blue-800 text-center text-blue-300">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
          <li><a href="/terminos" className="hover:text-yellow-400 transition-colors">Términos de Servicio</a></li>
          <li><a href="/privacidad" className="hover:text-yellow-400 transition-colors">Política de Privacidad</a></li>
          <li><a href="/preguntas" className="hover:text-yellow-400 transition-colors">Preguntas Frecuentes</a></li>
          <li><a href="/TrabajaConNosotros" className="hover:text-yellow-400 transition-colors">Trabaja con Nosotros</a></li>
        </ul>
        <p className="mt-6">&copy; {new Date().getFullYear()} Restaurante El Banano. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;