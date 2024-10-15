import React from "react";

const Menu = () => {
  return (
    <nav className="w-1/9 bg-white  p-2  shadow-lg h-[20%] sticky top-4 text-blue-900 border-b border-yellow-400" >
     
      <ul className="space-y- text-md flex justify-around items-center">
        <li>
          <a
            href="#completo"
            className="hover:text-black font-light transition-colors duration-200 ease-in-out"
          >
            El Completo
          </a>
        </li>
        <li>
          <a
            href="#del-mar"
            className="hover:text-black font-light transition-colors duration-200 ease-in-out"
          >
            Comida Rápida
          </a>
        </li>
        <li>
          <a
            href="#antioquenos"
            className="hover:text-black font-light transition-colors duration-200 ease-in-out"
          >
            Los Antioqueños
          </a>
        </li>
        <li>
          <a
            href="#especiales"
            className="hover:text-black font-light transition-colors duration-200 ease-in-out"
          >
            Especiales
          </a>
        </li>
        <li>
          <a
            href="#bebidas"
            className="hover:text-black font-light transition-colors duration-200 ease-in-out"
          >
            Bebidas
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
