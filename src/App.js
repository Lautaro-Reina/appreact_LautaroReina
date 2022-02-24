import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

//<> CUMPLE LA FUNCION DE FRAGMENTO

const App = () => {
  return (
      <>
            <NavBar/>
            <ItemListContainer greeting='Bienvenido a ArroyitoVapeShop!' />
      </>
  )
}

export default App