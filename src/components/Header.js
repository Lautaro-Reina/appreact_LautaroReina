import React from 'react';
import { useEffect, useState } from 'react';
import CartWidget from './CartWidget';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Header = () => {

    const [classHeader, setClassHeader] = useState("header")
    
    const controlScroll = () => {
        const newClass = window.scrollY >= 100 ? "header scroll-header" : "header"
        setClassHeader(newClass)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', controlScroll)
        
        return () => window.removeEventListener('scroll', controlScroll)
    },[])

  return (
    <header className={classHeader}>
      <div className='header__div container'>
        <Link to="/"><div className='header__logo'><img src="https://i.imgur.com/BQ7jZqu.png" alt="Logo de Arroyito VapeShop" /></div></Link>
          <NavBar/>
          <CartWidget/>
      </div>
    </header>
  )
}

export default Header