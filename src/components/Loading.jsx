import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-yellow-500 z-50">
      <img
        src="public/img/logo_el_banano-removebg-preview.png" // Asegúrate de tener el logo aquí
        alt="Restaurante El Banano"
        className="animate-spin w-40 h-40"
      />
      <p className="text-white">LOADING ... CARGANDO</p>
    </div>
  );
};

export default Loading;