import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [classMenu, setClassMenu] = useState("nav__menu")

    const toggleMenu = () => {
        const newClass = classMenu === "nav__menu" ? "nav__menu show" : "nav__menu"
        setClassMenu(newClass)
    }

  return (
    <nav className='header__navbar'>
      <div className="nav__toggle" onClick={toggleMenu}>
                <i className='bx bx-menu bx-sm cart__icon'></i>
      </div>
      <div className={classMenu}>
      <ul className='header__ul-navbar'>
            <li className='header__li-navbar'><Link to="/">Inicio</Link></li>
            <li className='header__li-navbar'><Link to="/category/equipo">Equipo</Link></li>
            <li className='header__li-navbar'><Link to="/category/liquido">Liquido</Link></li>
            <li className='header__li-navbar'><Link to="/category/resistencia">Resistencia</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar