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
                  <li className='header__li-navbar'><Link id="men's clothing"  to="/category/men'sclothing">Men's</Link></li>
                  <li className='header__li-navbar'><Link id="jewelery" to="/category/jewelery">Jewelery</Link></li>
                  <li className='header__li-navbar'><Link id="electronics" to="/category/electronics">Electronics</Link></li>
              </ul>
          </nav>
          <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar