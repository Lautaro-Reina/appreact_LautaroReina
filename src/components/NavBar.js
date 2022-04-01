import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className='header'>
      <div className='container'>
        <Link to="/"><div className='header__logo'>Logo</div></Link>
          <nav className='header__navbar'>
              <ul className='header__ul-navbar'>
                  <li className='header__li-navbar'><Link to="/">Inicio</Link></li>
                  <li className='header__li-navbar'><Link to="/category/equipo">Equipo</Link></li>
                  <li className='header__li-navbar'><Link to="/category/liquido">Liquido</Link></li>
                  <li className='header__li-navbar'><Link to="/category/resistencia">Resistencia</Link></li>
              </ul>
          </nav>
          <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar