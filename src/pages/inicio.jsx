import React, {useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reseñas from "../components/Reseñas";
import Galeria from "../components/Galeria";
import Visitanos from "../components/Visitanos";



const Inicio = () => {
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section id='home' className="min-h-screen ">
      <Header/>
      {/* Hero Section */}
      <section className="relative h-screen">
  {/* Fondo para móviles (amarillo) */}
  <div className="md:hidden absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex items-center justify-center">
    <img
      src="/img/logo_el_banano-removebg-preview.png"
      alt="El Banano Logo"
      className="h-[25vh] w-auto"
    />
  </div>

  {/* Fondo para pantallas medianas/grandes */}
  <div 
    className="hidden md:block absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/img/YEI04687.jpg')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
      <div className="text-center text-white px-4 flex flex-col md:flex-row items-center justify-center">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-blue-950 mb-6 [text-shadow:_2px_2px_0_white,_-2px_-2px_0_white,_2px_-2px_0_white,_-2px_2px_0_white] z-0">
          EL BANANO
        </h2>
        <img
          src="/img/logo_el_banano-removebg-preview.png"
          alt="El Banano Logo"
          className="h-[15vh] md:h-[20vh] lg:h-[25vh] w-auto ml-0 md:ml-8"
        />
      </div>
    </div>
  </div>
</section>

<section className="relative bg-gradient-to-b from-yellow-50 to-white py-24 overflow-hidden">
  {/* Elementos decorativos */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Encabezado */}
    <div className="text-center mb-20" data-aos="fade-up">
      <h2 className="text-5xl font-gotham font-black text-blue-900 mb-6">
        DESCUBRE NUESTRAS <span className="text-red-600">ESPECIALIDADES</span>
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mb-8"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Tres tradiciones culinarias que definen nuestra esencia
      </p>
    </div>

    {/* Tres especialidades - RUTAS DE IMÁGENES CORREGIDAS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
      {[
        {
          title: "CARNES ASADAS",
          description: "Cortes premium madurados y preparados al punto perfecto",
          img: "/img/YEI04571.jpg",  // Cambiado a /img/...
          color: "red"
        },
        {
          title: "SABORES ANTIOQUEÑOS",
          description: "Lo mejor de nuestra tradición paisa en cada bocado",
          img: "/img/YEI04584.jpg",  // Cambiado a /img/...
          color: "yellow"
        },
        {
          title: "EL BANANO LEGENDARIO",
          description: "Nuestra firma insignia, ahora mejor que nunca",
          img: "/img/YEI04571.jpg",  // Cambiado a /img/...
          color: "blue"
        }
      ].map((item, index) => (
        <div 
          key={index}
          className="group relative h-[60vh] overflow-hidden shadow-2xl"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {/* Gradiente dinámico corregido */}
          <div className={`absolute inset-0 ${
            item.color === 'red' ? 'bg-gradient-to-t from-red-900/80 via-red-900/30 to-transparent' :
            item.color === 'yellow' ? 'bg-gradient-to-t from-yellow-900/80 via-yellow-900/30 to-transparent' :
            'bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent'
          } z-10`}></div>
          
          {/* Imagen con fallback */}
          <img 
            src={item.img} 
            alt={item.title}
            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "/img/placeholder.jpg" // Imagen de respaldo
            }}
          />
          <div className="absolute bottom-0 left-0 z-20 p-8 pb-2 ">
            <h3 className="text-3xl font-gotham font-bold text-white mb-3">{item.title}</h3>
            <p className="text-white/90 mb-5">{item.description}</p>
            {/* Botón con color dinámico corregido */}
            <button className={`${
              item.color === 'red' ? 'bg-red-500 hover:bg-red-600' :
              item.color === 'yellow' ? 'bg-yellow-500 hover:bg-yellow-600' :
              'bg-blue-500 hover:bg-blue-600'
            } text-white px-6 py-2 rounded-lg font-gotham font-bold transition-all`}>
              Ver menú
            </button>
          </div>
        </div>
      ))}
    </div>
  
    {/* Línea decorativa */}
    <div className="relative h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20">
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center text-white">
        <span className="text-xs font-bold">✻</span>
      </div>
    </div>

  {/* Anuncio Banano Web */}
  <div className="max-w-7xl mx-auto bg-yellow-400  p-10 md:p-14 text-white relative overflow-hidden">
    {/* Elementos decorativos */}
    <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10"></div>
    <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-red-600 rounded-full opacity-10"></div>
    
    {/* Contenido principal */}
    <div className="relative z-10 text-center">
      <h3 className="text-4xl md:text-6xl font-gotham font-extrabold uppercase mb-6 tracking-wide">
        {/* Línea decorativa y título histórico */}
  <div className="max-w-7xl mx-auto px-6 mb-16">
    <div className="flex items-center justify-center">
      {/* Línea izquierda */}
      <div className="flex-1 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
      
      {/* Título impactante */}
      <h2 className="mx-8 text-5xl md:text-8xl font-gotham fon.t-extrabold text-center uppercase tracking-tight text-blue-900">
        DESDE 1986
      </h2>
      
      {/* Línea derecha */}
      <div className="flex-1 h-0.5 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  </div>
        ¡EL <span className="text-blue-900">BANANO WEB</span> HA VUELTO!
      </h3>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Redescubre nuestro plato insignia con una presentación renovada y sabores que honran nuestra tradición
      </p>
    

    {/* Puntos de atención mejorados */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
  {/* Punto 1 - CC Buena Vista */}
  <div className="relative h-[70vh]  overflow-hidden group shadow-2xl hover:shadow-2xl transition-all duration-500">
    {/* Imagen de fondo */}
    <img 
      src="public/img/Logo.jpg" 
      alt="Centro Comercial Buena Vista"
      className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
    />
    
    {/* Overlay oscuro */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
    
    {/* Contenido */}
    <div className="absolute inset-0 flex flex-col justify-between p-8">
      <div>
        <div className="flex items-center mb-4">
          <div className="bg-yellow-400 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-gotham font-bold text-white">
            EL BANANO EN CC BUENA VISTA
          </h3>
        </div>
       
      </div>
      
      {/* Botón centrado */}
      <div className="flex justify-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-gotham font-bold px-8 py-3 rounded-lg transition-all transform group-hover:-translate-y-2 shadow-lg">
          Ver más información
        </button>
      </div>
    </div>
  </div>

  {/* Punto 2 - CC Arrecife */}
  <div className="relative h-[70vh]  overflow-hidden group shadow-2xl hover:shadow-2xl transition-all duration-500">
    {/* Imagen de fondo */}
    <img 
      src="public/img/elbananoarrecife.jpeg" 
      alt="Centro Comercial Arrecife"
      className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
    />
    
    {/* Overlay oscuro */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
    
    {/* Contenido */}
    <div className="absolute inset-0 flex flex-col justify-between p-8">
      <div>
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-gotham font-bold text-white">
            EL BANANO EN CC ARRECIFE
          </h3>
        </div>
        
      </div>
      
      {/* Botón centrado */}
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-gotham font-bold px-8 py-3 rounded-lg transition-all transform group-hover:-translate-y-2 shadow-lg">
          Ver más información
        </button>
      </div>
    </div>
  </div>
</div>
        
      </div>
    </div>
  </div>
</section>

        <Galeria/>

      <div className=" py-16 flex justify-center ">

 {/* Contenedor de las promociones */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl w-full">

{/* Promoción 1 */}
<div className="flex flex-col md:flex-row text-left h-auto md:h-[500px] justify-between w-full shadow-xl rounded-3xl">
  {/* Video */}
  <video
    src="/img/¿Escuchaste esto Si, es el sonido de la gloria! digo, de un churrasco en la parrilla!.mp4"
    className="w-full md:w-1/2 h-[300px] md:h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-r-none"
    autoPlay
    loop
    muted
  />
  
  {/* Texto y botón */}
  <div className="flex flex-col w-full md:w-1/2 h-full text-center font-gotham rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-white p-6">
    <div className="mb-4 azul-text font-bold w-full h-full gap-8 flex flex-col justify-center items-center">
      <h3 className="text-3xl">
        ¡EL CHURRASCO ESTÁ DE VUELTA POR TIEMPO LIMITADO!
      </h3>
      <p className="font-gotham font-light">
        Saborea la perfección de nuestro churrasco, preparado con los mejores ingredientes para que disfrutes cada bocado.
      </p>
    </div>
    <button className="rojo text-white py-2 px-4 hover:bg-brown-700 transition w-full">
      ORDENAR AHORA
    </button>
  </div>
</div>

{/* Promoción 2 */}
<div className="flex flex-col md:flex-row text-left h-auto md:h-[500px] justify-between w-full shadow-xl rounded-3xl">
  {/* Video */}
  <video
    src="/img/Que esperas para visitar nuestra sede en el Rodadero y recordar todos estos lindos momentos.mp4"
    className="w-full md:w-1/2 h-[300px] md:h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-r-none"
    autoPlay
    loop
    muted
  />

  {/* Texto y botón */}
  <div className="flex flex-col w-full md:w-1/2 h-full text-center font-gotham rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-white p-6">
    <div className="mb-4 text-blue-900 font-bold w-full h-full gap-8 flex flex-col justify-center items-center">
      <h3 className="text-3xl">
        ¡VISÍTANOS EN EL RODADERO Y VIVE MOMENTOS INOLVIDABLES!
      </h3>
      <p className="font-gotham font-thin">
        Disfruta del sabor único de nuestros platillos mientras revives los mejores momentos junto a tus seres queridos.
      </p>
    </div>
    <button className="rojo text-white py-2 px-4 hover:bg-brown-700 transition w-full">
      VISÍTANOS AHORA
    </button>
  </div>

  
</div>  

</div>

</div>
<Reseñas/>
    <Visitanos/>
      <Footer/>
   
    </section>
  );
};

export default Inicio;
