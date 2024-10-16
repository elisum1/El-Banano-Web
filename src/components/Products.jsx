import React, { useState } from "react";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSides, setSelectedSides] = useState([]);
  const [comment, setComment] = useState("");
  const [cart, setCart] = useState([]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedSides([]);
    setComment("");
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleSideChange = (side) => {
    if (selectedSides.includes(side)) {
      setSelectedSides(selectedSides.filter((s) => s !== side));
    } else if (selectedSides.length < 2) {
      setSelectedSides([...selectedSides, side]);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddToCart = () => {
    const newCartItem = {
      name: selectedProduct.name,
      price: selectedProduct.price,
      sides: selectedSides,
      comment: comment,
    };
    setCart([...cart, newCartItem]);
    closeModal();
  };

  const products = [
    {
      name: "Carne con dos acompañantes",
      price: "$43.500",
      image: "/img/El completo.jpg",
      description: "Delicioso plato de carne con dos acompañantes a elegir.",
    },
    {
      name: "Pechuga con dos acompañantes",
      price: "$37.500",
      image:
        "/img/Screenshot 2024-10-08 at 10-21-11 Restaurante El Banano (@elbananorestaurante) • Fotos y vídeos de Instagram.png",
      description: "Pechuga de pollo jugosa con la elección de dos acompañantes.",
    },
    {
      name: "Churrasco con dos acompañantes",
      price: "$47.500",
      image:
        "/img/Screenshot 2024-10-08 at 10-22-03 Restaurante El Banano (@elbananorestaurante) • Fotos y vídeos de Instagram.png",
      description: "Churrasco tierno acompañado de dos opciones a tu gusto.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
    {
      name: "Chicharron con dos acompañantes",
      price: "$28.500",
      image: "/img/IMG_20231126_161005_627.jpg",
      description: "Chicharrón crujiente servido con dos acompañantes.",
    },
  ];

  const sidesOptions = [
    "Maduro con queso",
    "Arepa con queso",
    "Papas a la francesa",
    "Ensalada",
    "Papa cocida",
    "Patacón",
    "Arroz",
  ];

  return (
    <section className="w-full rounded-lg mb-6 max-h-full">
      <h3 className="text-4xl font-bold m-8 jost text-center text-blue-700"></h3>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-8 xl:w-[1300px] w-[900px] m-auto  ">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg bg-white border border-yellow-500 transition-transform duration-300 transform hover:scale-105 w-[100%] h-[100%]"
          >
            <img
              src={product.image}
              alt={product.name}
              className=" mb-6 w-full h-[60%] object-cover rounded-t-lg"
            />
            <h4 className="font-bold md:text-sm xl:text-lg mb-2 text-blue-400 text-center">{product.name}</h4>
            <p className="text-gray-80 mb-4 ml-12 text-sm font-light roboto2">{product.description}</p>
            <div className="w-full flex justify-center ">

            <button
              className="bg-blue-500 text-white py-1 xl:py-3 px-6 rounded-full hover:bg-blue-600 transition"
              onClick={() => openModal(product)}
            >
              Agregar - {product.price}
            </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[80%] max-w-4xl p-8 rounded-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex">
              <div className="w-1/2 pr-8">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </div>

              <div className="w-1/2">
                <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-lg text-gray-600 mb-2">{selectedProduct.price}</p>
                <p className="text-sm text-gray-500 mb-4">{selectedProduct.description}</p>

                {/* Selección de acompañantes */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Selecciona dos acompañantes:
                  </label>
                  {sidesOptions.map((side, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={side}
                        checked={selectedSides.includes(side)}
                        onChange={() => handleSideChange(side)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        disabled={!selectedSides.includes(side) && selectedSides.length >= 2}
                      />
                      <label htmlFor={side} className="ml-2 text-gray-700">
                        {side}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Comentarios */}
                <div className="mb-4">
                  <label
                    htmlFor="comments"
                    className="block text-sm font-medium mb-2"
                  >
                    ¿Algún comentario o recomendación?
                  </label>
                  <textarea
                    id="comments"
                    value={comment}
                    onChange={handleCommentChange}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    rows="3"
                    placeholder="Escribe aquí tu comentario..."
                  />
                </div>

                {/* Botón Agregar al Carrito */}
                <button
                  className="bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 w-full"
                  onClick={handleAddToCart}
                  disabled={selectedSides.length !== 2}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
