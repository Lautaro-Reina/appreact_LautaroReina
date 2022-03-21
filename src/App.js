import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//<> CUMPLE LA FUNCION DE FRAGMENTO
const App = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App