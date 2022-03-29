import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextCart } from './CartContext';

const CartWidget = () => {

    const {cantidad} = useContext(contextCart)

    return (
        <div className='cart'>
            <Link to="/cart"><i class="fi fi-rs-shopping-cart cart__icon"></i></Link>
            {cantidad > 0 ? cantidad : ''}
        </div>

    )
}

export default CartWidget;