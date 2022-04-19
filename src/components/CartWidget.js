import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextCart } from './CartContext';

const CartWidget = () => {

    const {cantidad} = useContext(contextCart)

    let classBadge = 'badge';
        if (cantidad < 1) {
            classBadge += 'none';
        }

    return (
        <Link to="/cart">
        <div className='carticon'>
                <i className='bx bx-cart bx-sm cart__icon'></i>
            <div className= {classBadge}>
                {cantidad > 0 ? cantidad : ''}
            </div>
        </div>
        </Link>

    )
}

export default CartWidget;