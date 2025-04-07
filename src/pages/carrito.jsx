import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Carrito = () => {
  // Estado de los productos en el carrito
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pechuga con dos acompañantes",
      price: 31900,
      quantity: 1,
      description: "Comida",
      image: "/img/Screenshot_2024-10-08_at_10-21-11_Restaurante_El_Banano___elbananorestaurante____Fotos_y_vídeos_de_Instagram-removebg-preview.png",
    },
    {
      id: 2,
      name: "Picada De la Casa",
      price: 31900,
      quantity: 1,
      description: "Mixtos",
      image: "/img/Pa_no_quedar_picado__pide_una_picada_de_la_casa____con_quien_la_compartirías-removebg-preview.png",
    },
  ]);

  // Función para actualizar la cantidad
  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  // Función para eliminar un producto del carrito
  const handleRemoveItem = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
  }; 

  // Calcular el total
  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <Header />
      <div className="mt-48 container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-10 font-gotham">
        {/* Sección de productos */}
        <div className="col-span-2 h-[100vh]">
          <h2 className="text-3xl font-bold mb-4 font-gotham">Mi pedido</h2>

          <h3 className="mb-10 font-semibold">Productos</h3>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <button className="text-blue-500 hover:underline text-sm">
                      Editar
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-bold">${item.price.toLocaleString()}</p>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))
                      }
                      className="px-2 py-1 text-xl"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-10 text-center border-0"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 text-xl"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección del total y promociones */}
        <div>
          <div className="bg-slate-200 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold ">Códigos de descuento y promociones</h3>
            <input
              type="text"
              placeholder="Agregar código"
              className="border border-gray-300 p-2 w-full mt-4"
            />
            <button className="amarillo text-white px-4 py-2 mt-2 rounded w-full">
              Agregar
            </button>
          </div>
          <div className="mt-6 rojo p-6 rounded-lg shadow text-white">
            <h3 className="text-lg font-bold">Subtotal</h3>
            <p className="text-2xl font-bold">${getTotal().toLocaleString()}</p>
          </div>
          <button className="mt-6 amarillo text-white w-full py-2 rounded-md text-md border-[1px] border-black">
            Siguiente
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Carrito;
