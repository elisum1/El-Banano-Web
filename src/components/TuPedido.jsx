import React from "react";

const TuPedido = ({ cart }) => {
  // Asegurarse de que cart es un array, por defecto a un array vacío si no está definido
  const total = (cart || []).reduce((acc, item) => {
    const price = parseFloat(item.price.replace("$", "").replace(".", "").replace(",", "")) || 0; // Manejar errores de análisis
    return acc + price;
  }, 0);

  return (
    <aside className="w-1/6 bg-white p-6 rounded-lg shadow-lg h-[50%] sticky top-4">
      <h2 className="text-lg font-semibold mb-4">Tu Pedido</h2>
      <div className="space-y-4 font-light">
        {cart && cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="flex justify-between">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No hay productos en tu pedido.</p>
        )}
        <hr />
        <div className="flex justify-between font-semibold">
          <p>Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <button className="bg-red-500 w-full py-2 rounded text-white font-bold hover:bg-red-600 transition">
          Confirmar Pedido
        </button>
      </div>

      <div className="mt-4">
        <img 
          src="public/img/Anuncio.jpg" 
          alt="Promoción Restaurante" 
          className="rounded-lg shadow-md w-full"
        />
      </div>
    </aside>
  );
};

export default TuPedido;
