import React from 'react';
import { useContext } from 'react';
import { contextCart } from './CartContext';

export const CartList = ({producto}) => {
    const {removeItem} = useContext(contextCart)
    return (
        <>
        <li className="cart-items odd">
            <div className="cart-info"> 
                <div className="cart-section">
                    <div>
                        <img src={producto.image} alt="" className="itemImg" />
                    </div>
                    <div className='info'>
                        <p className='info-number'>{producto.id}</p>
                        <h3>{producto.title}</h3>
                        <p>x{producto.quantity}</p>
                    </div>
                </div>  
      
                <div className='cartprice'>
                    <div className="prodTotal cart-section">
                        <p>AR$ {(producto.price * producto.quantity).toFixed(2)}</p>
                    </div>
                    <div className="cartSection removeWrap">
                        <button onClick={() => removeItem(producto.id)} className='btn-icon'>x</button>
                    </div>
                </div>
            </div>
        </li>
        </>
    )
}