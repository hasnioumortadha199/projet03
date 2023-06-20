import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import HomeScreen from "./Screen/HomeScreen";
import "./index.css";
import ProductScreen from "./Screen/ProductScreen";
import Product from "./Screen/Product";
import Collection from "./Screen/Collection";
import Cart from "./Screen/Cart";

 
 function App() {
   
 return (
    <BrowserRouter>
      <div  >
        <main>
          <Routes>      
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/col" element={<Collection/>} />
           <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
