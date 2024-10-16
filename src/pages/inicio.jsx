import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RestaurantLandingPage from "../components/Principal";


const Inicio = () => {

  return (

    <section id='home' className="min-h-screen raleway">
      <Header />
      <div>
      <RestaurantLandingPage />

      </div>

      <section className="h-auto w-full flex flex-col items-center">
  <div className="h-auto w-full lg:w-[70%] m-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
    {/* Primer Bloque (Imagen 1) */}
    <div className="w-full h-full relative">
      <div className="w-full h-[300px] lg:h-[500px] mt-2 transition-transform transform hover:scale-105 duration-300 bg-yellow-400">
        <img
          src="/img/Captura_de_pantalla_2024-10-16_001350-removebg-preview.png"
          className="h-full w-full object-cover opacity-105"
          alt="Carnes Deliciosas"
        />
        {/* Título, Descripción y Botón */}
        <div className="absolute top-4 left-4 text-white text-left">
          <h2 className="text-3xl lg:text-5xl 2xl:text-7xl anton-regular">CARNES DELICIOSAS</h2>
          <p className="text-sm lg:text-lg mt-2 raleway">DISFRUTA NUESTRAS MEJORES CARNES A LA PARRILLA</p>
          <button className="bg-blue-800 text-white px-3 py-2 mt-4 rounded-lg hover:bg-blue-600 transition">Ordenar</button>
        </div>
      </div>
    </div>

    {/* Segundo Bloque (Imágenes 2 y 3) */}
    <div className="w-full h-full ">
      <div className="flex w-full h-[150px] lg:h-[250px] justify-center items-center gap-3">
        {/* Imagen 2 */}
        <div className="w-[50%] h-full relative transition-transform transform hover:scale-105 duration-300 bg-blue-800">
          <img
            src="/img/Pa_no_quedar_picado__pide_una_picada_de_la_casa____con_quien_la_compartirías-removebg-preview.png"
            className="h-full w-full object-cover opacity-75"
            alt="Picada de la Casa"
          />
          {/* Título, Descripción y Botón */}
          <div className="absolute top-4 left-4 text-white text-left">
            <h2 className="text-lg lg:text-3xl 2xl:text-5xl anton-regular">PICADAS</h2>
            <p className="text-xs lg:text-sm mt-2 raleway">PERFECTA PARA COMPARTIR EN COMPAÑIA</p>
            <button className="bg-blue-800 text-white px-2 py-1 lg:px-3 lg:py-2 mt-2 rounded-lg hover:bg-blue-600 transition">Ordenar</button>
          </div>
        </div>

        {/* Imagen 3 */}
        <div className="w-[50%] h-full relative transition-transform transform hover:scale-105 duration-300 bg-red-400">
          <img
            src="/img/platano-2-removebg-preview.png"
            className="h-full w-full object-cover opacity-75"
            alt="Plato Especial"
          />
          {/* Título, Descripción y Botón */}
          <div className="absolute top-4 left-4 text-white text-left">
            <h2 className="text-lg lg:text-3xl anton-regular">PLATO ESPECIAL</h2>
            <p className="text-xs lg:text-sm mt-2 raleway">UN SABOR UNICO</p>
            <button className="bg-blue-800 text-white px-2 py-1 lg:px-3 lg:py-2 mt-2 rounded-lg hover:bg-blue-600 transition">Ordenar</button>
          </div>
        </div>
      </div>

      {/* Cuarto bloque (Imagen adicional) */}
      <div className="w-full h-[150px] lg:h-[250px] mt-2 transition-transform transform hover:scale-105 duration-300 relative bg-orange-500 flex justify-end">
        <img
          src="/img/Nuevo Paisa.png"
          className="h-[80%] w-[30%] lg:w-[20%] object-cover opacity-75"
          alt="Otra Opción"
        />
        {/* Título, Descripción y Botón */}
        <div className="absolute top-4 left-4 text-white text-left">
          <h2 className="text-lg lg:text-5xl anton-regular">ANTIOQUEÑOS</h2>
          <p className="text-sm mt-2 raleway">UNA DELICIOSA OPCION ADICIONAL</p>
          <button className="bg-blue-800 text-white px-2 py-1 lg:px-3 lg:py-2 mt-2 rounded-lg hover:bg-blue-600 transition">Ordenar</button>
        </div>
      </div>
    </div>
  </div>
</section>




      <section id='menu' className="max-w-full mx-auto py-20 px-[5%] bg-gray-100 min-h-screen">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">Novedades</h2>
    <a href="#" className="text-blue-500 hover:underline">Ver todo</a>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-gray-950">
    {/* Producto 1 */}
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-60">
        <img className="w-[80%] h-[70%] object-contain" src="/img/El_completo-removebg-preview.png" alt="Producto 1" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">Producto 1</h3>
          <p className="text-gray-500">Descripción del producto 1...</p>
        </div>
        <p className="font-bold">$39.900</p>
      </div>
    </div>

    {/* Producto 2 */}
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-60">
        <img className="w-[80%] h-[70%] object-contain" src="/img/IMG_20231124_131337_579-removebg-preview.png" alt="Producto 2" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">Producto 2</h3>
          <p className="text-gray-500">Descripción del producto 2...</p>
        </div>
        <p className="font-bold">$42.900</p>
      </div>
    </div>

    {/* Producto 3 */}
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-60">
        <img className="w-[80%] h-[70%] object-contain" src="/img/IMG_20231126_161005_627-removebg-preview.png" alt="Producto 3" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">Producto 3</h3>
          <p className="text-gray-500">Descripción del producto 3...</p>
        </div>
        <p className="font-bold">$31.900</p>
      </div>
    </div>

    {/* Producto 4 */}
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-60">
        <img className="w-[80%] h-[70%] object-contain" src="/img/Screenshot_2024-10-08_at_10-21-11_Restaurante_El_Banano___elbananorestaurante____Fotos_y_vídeos_de_Instagram-removebg-preview.png" alt="Producto 4" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">Producto 4</h3>
          <p className="text-gray-500">Descripción del producto 4...</p>
        </div>
        <p className="font-bold">$31.900</p>
      </div>
    </div>

    {/* Producto 5 */}
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-60">
        <img className="w-[80%] h-[70%] object-contain" src="/img/Screenshot_2024-10-08_at_10-21-11_Restaurante_El_Banano___elbananorestaurante____Fotos_y_vídeos_de_Instagram-removebg-preview.png" alt="Producto 4" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">Producto 5</h3>
          <p className="text-gray-500">Descripción del producto 5...</p>
        </div>
        <p className="font-bold">$31.900</p>
      </div>
    </div>

    {/* Producto 6 */}
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-60">
        <img className="w-[80%] h-[70%] object-contain" src="/img/Screenshot_2024-10-08_at_10-21-11_Restaurante_El_Banano___elbananorestaurante____Fotos_y_vídeos_de_Instagram-removebg-preview.png" alt="Producto 6" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">Producto 6</h3>
          <p className="text-gray-500">Descripción del producto 6...</p>
        </div>
        <p className="font-bold">$31.900</p>
      </div>
    </div>
  </div>

  {/* Extra grid section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full mt-10 rounded-md gap-5">
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-50">
        <img className="w-[80%] h-[70%] object-contain" src="/img/Screenshot_2024-10-08_at_10-21-11_Restaurante_El_Banano___elbananorestaurante____Fotos_y_vídeos_de_Instagram-removebg-preview.png" alt="Producto Extra" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <h3 className="font-semibold text-lg">Producto Extra</h3>
        <p className="text-gray-500">Descripción del producto extra...</p>
        <p className="font-bold mt-2">$31.900</p>
      </div>
    </div>
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-50">
        <img className="w-[80%] h-[70%] object-contain" src="/img/Screenshot_2024-10-08_at_10-21-11_Restaurante_El_Banano___elbananorestaurante____Fotos_y_vídeos_de_Instagram-removebg-preview.png" alt="Producto Extra" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <h3 className="font-semibold text-lg">Producto Extra</h3>
        <p className="text-gray-500">Descripción del producto extra...</p>
        <p className="font-bold mt-2">$31.900</p>
      </div>
    </div>
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-50">
        <img className="w-[80%] h-[70%] object-contain" src="/img/Screenshot_2024-10-08_at_10-21-11_Restaurante_El_Banano___elbananorestaurante____Fotos_y_vídeos_de_Instagram-removebg-preview.png" alt="Producto Extra" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <h3 className="font-semibold text-lg">Producto Extra</h3>
        <p className="text-gray-500">Descripción del producto extra...</p>
        <p className="font-bold mt-2">$31.900</p>
      </div>
    </div>
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-50">
        <img className="w-[80%] h-[70%] object-contain" src="/img/Screenshot_2024-10-08_at_10-21-11_Restaurante_El_Banano___elbananorestaurante____Fotos_y_vídeos_de_Instagram-removebg-preview.png" alt="Producto Extra" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <h3 className="font-semibold text-lg">Producto Extra</h3>
        <p className="text-gray-500">Descripción del producto extra...</p>
        <p className="font-bold mt-2">$31.900</p>
      </div>
    </div>
    <div className="bg-gray-100 hover:shadow-lg hover:border-[1px] rounded-lg overflow-hidden flex flex-col border-gray-800">
      <div className="bg-gray-100 flex justify-center items-center h-50">
        <img className="w-[80%] h-[70%] object-contain" src="/img/Screenshot_2024-10-08_at_10-21-11_Restaurante_El_Banano___elbananorestaurante____Fotos_y_vídeos_de_Instagram-removebg-preview.png" alt="Producto Extra" />
      </div>
      <div className="p-4 bg-white h-48 flex flex-col justify-between">
        <h3 className="font-semibold text-lg">Producto Extra</h3>
        <p className="text-gray-500">Descripción del producto extra...</p>
        <p className="font-bold mt-2">$31.900</p>
      </div>
    </div>
  </div>
</section>




      <div className=" py-16 flex justify-center mt-[10%]">

  {/* Contenedor de las promociones */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl w-full">
    {/* Promociones */}
    <div className="flex text-lef  h-[500px] justify-between w-full shadow-xl rounded-3xl">
    <div className="flex flex-col w-full h-full text-center raleway rounded-3xl  ">
    <div className=" mb-4 text-blue-900 font-bold w-[80%] h-[100%] ml-2 mt-14 gap-8 flex flex-col rounded-3xl">
      <h3 className="text-3xl">
        SMOKED BRISKET IS BACK FOR A LIMITED TIME
      </h3>
      <p className="roboto2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita voluptatem illo autem consequat.</p>

      </div>
      <button className="bg-yellow-400 text-white py-2 px-4 hover:bg-brown-700 transition w-full">
        ORDER NOW
      </button>

    </div>
      <video
          src="/img/¿Escuchaste esto Si, es el sonido de la gloria! digo, de un churrasco en la parrilla!.mp4"
          className=" w-full h-full object-cover rounded-r-3xl"
          autoPlay
          loop
          muted
        />
    </div>

    {/* Domicilios */}
    <div className="flex   h-[500px] justify-between w-full rounded-r-3xl shadow-xl">
    <div className="flex flex-col w-full h-full text-center ralewaY rounded-r-3xl">
      <div className=" mb-4 text-blue-900 font-bold w-[80%] h-[100%] ml-2 mt-14 gap-8 flex flex-col">
      <h3 className="text-3xl">
        SMOKED BRISKET IS BACK FOR A LIMITED TIME
      </h3>
      <p className="roboto2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita voluptatem illo autem consequat.</p>

      </div>
      

      
      <button className="bg-yellow-400 text-white py-2 px-4 hover:bg-brown-700 transition w-full">
        ORDER NOW
      </button>

    </div>
      <video
          src="/img/Que esperas para visitar nuestra sede en el Rodadero y recordar todos estos lindos momentos.mp4"
          className=" w-full h-full object-cover rounded-r-3xl"
          autoPlay
          loop
          muted
        />
    </div>

    {/* Sedes y Horarios */}
    <div className="flex flex-col items-start text-left bg-white shadow-lg p-6 transition-transform transform hover:scale-105 border rounded-lg">
      <img
        src="/img/Open.png"
        alt="Sedes y horarios"
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-2xl mb-4 text-brown-800 font-bold">
        GROUP ORDER
      </h3>
      <p className="text-gray-800 mb-4 roboto2 text-lg">
        Perfect for any gathering, enjoy a meal with friends and family.
      </p>
      <button className="bg-brown-800 text-white py-2 px-4 rounded hover:bg-brown-700 transition">
        ORDER NOW
      </button>
    </div>
  </div>
</div> 

<section className="bg-yellow-400 py-12 text-white">
   
      <div className="container mx-auto mt-[2%]">
        

        {/* Puntajes de reseñas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Reseña Google */}
          <div className="flex flex-col items-center w-[100%]">
            <div className="flex items-center space-x-2 bg-white rounded-full h-[150px] w-[50%] text-blue-800 gap-2">
              <img src='/img/google_13170545.png' alt="Google" className="w-12 h-12 ml-3" />
              <div>
                <p className="text-6xl font-bold">4.6</p>
                <p>4350 reseñas</p>
              </div>
            </div>
          </div>

          {/* Reseña Facebook */}
          <div className="flex flex-col items-center w-[100%]">
            <div className="flex items-center space-x-2 bg-white rounded-full h-[150px] w-[50%] text-blue-800 gap-2">
              <img src='/img/facebook_5968764.png' alt="Facebook" className="w-12 h-12 ml-3" />
              <div>
                <p className="text-6xl font-bold">4.2</p>
                <p>1054 reseñas</p>
              </div>
            </div>
          </div>

          {/* Reseña TripAdvisor */}
          <div className="flex flex-col items-center w-[100%]">
            <div className="flex items-center space-x-2 bg-white rounded-full h-[150px] w-[50%] text-blue-800 gap-2">
              <img src='/img/tripadvisor_2504944.png' alt="TripAdvisor" className="w-12 h-12 ml-3" />
              <div>
                <p className="text-6xl font-bold">4.0</p>
                <p>309 reseñas</p>
              </div>
            </div>
          </div>
        </div>

<div className="flex flex-col justify-center items-center h-full w-full mt-[5%]">

<h2 className="text-center text-3xl font-bold mb-8">
          ¡Súmate a la comunidad digital del sabor!
        </h2>
        
        {/* Redes sociales */}
        <div className="flex justify-center space-x-6 mb-12 w-[400px]">
          <a href="#">
            <img src='/img/icons8-instagram.svg' alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="#">
            <img src='/img/facebook_5968764.png' alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#">
            <img src='/img/icons8-twitterx.svg' alt="Twitter" className="w-8 h-8" />
          </a>
        </div>

</div>

      </div>
    </section>
      <Footer/>
   
    </section>
  );
};

export default Inicio;
