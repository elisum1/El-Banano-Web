import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import Menu from '../components/Menu';


const MenuPage = () => {
  return (
    <div className=" min-h-screen font-roboto bg-slate-100 ">
      {/* Header */}
      {<Header />}
      {/* Menu */}
      {<Menu />}
      <div className=" flex  justify-center items-center w-full h-full ">
        
        

        {/* Main Section */}
        <main className="w-3/6 xl:w-4/5 mx-4">
      
          {<Products />}
        </main>
        
      </div>
    </div>
  );
};

export default MenuPage;
