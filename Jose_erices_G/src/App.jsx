import React, { useState, useEffect } from 'react';
import Navbar from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import ComponenteFuncional from './components/ComponenteFuncional/ComponenteFuncional';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';


const App = () => {




  return (
    <>

      <BrowserRouter>

        <CartProvider>

          <Navbar />


          <Routes>

            <Route path='/' element={<ItemListContainer />} />


            <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

            <Route path='/detalle/:id' element={<ItemDetailContainer />} />

            <Route path='/cart' element={<Cart />} />

            <Route path='/checkout' element={<Checkout />} />

            <Route path='*' element={<Error />} />

            <Route path='/ComponenteFuncional' element={<ComponenteFuncional />} />


          </Routes>

          <Footer />

        </CartProvider>

      </BrowserRouter>

    </>
  );
};

export default App;

