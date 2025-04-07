
import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';



const MenuPage = () => {
  return (

    <div className=" min-h-screen  bg-slate-100 ">
      {/* Header */}
      {<Header />}
      {/* Menu */}
   
      <div className=" flex  justify-center items-center w-full h-full mt-48 m-auto">
        
        

        {/* Main Section */}
        <main className="w-3/6 xl:w-4/5 mx-4">
      
          {<Products />}
        </main>
        
      </div>
    </div>
  );
};

export default MenuPage;
