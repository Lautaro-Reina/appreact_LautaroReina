import React from 'react';
import { useContext } from 'react';
import { contextCart } from './CartContext';

const Cart = () => {

    const {carrito, priceTotal, removeItem, clear} = useContext(contextCart); 

    return (
        <div>
            <h2>Carrito</h2>
            {carrito.map(producto => (
                <>
                <div key={producto.id}>
                    <p>{producto.title}</p>
                    <p>{producto.cantidad} x {producto.price}</p>
                    <button onClick={() => removeItem(producto.id)}>X</button>
                </div>
                <button onClick={clear}>Limpiar</button>
                <p>Total: AR$ {priceTotal()}</p>
                </>
            ))}
        </div>
    )
}

export default Cart;