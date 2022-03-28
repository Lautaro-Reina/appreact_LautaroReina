import React from 'react';
import { useContext } from 'react';
import { contextCart } from './CartContext';

const CartWidget = () => {

    const {cantidad} = useContext(contextCart)

    return (
        <div className='cart'>
            <i class="fi fi-rs-shopping-cart cart__icon"></i>
            {cantidad}
        </div>

    )
}

export default CartWidget;