import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__logo'>Logo</div>
          <nav className='header__navbar'>
              <ul className='header__ul-navbar'>
                  <li className='header__li-navbar'><a href="#inicio">Inicio</a></li>
                  <li className='header__li-navbar'><a href="#productos">Productos</a></li>
                  <li className='header__li-navbar'><a href="#contacto">Contacto</a></li>
              </ul>
          </nav>
          <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar