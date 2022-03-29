import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextCart } from './CartContext';

const Cart = () => {

    const {carrito, priceTotal, removeItem, clear} = useContext(contextCart); 

    return carrito.length ? (
        <div>
            <h2>Carrito</h2>
            {carrito.map(producto => (
                <>
                <div key={producto.id}>
                    <p>{producto.title}</p>
                    <p>Cantidad: {producto.quantity}</p>
                    <button onClick={() => removeItem(producto.id)}>X</button>
                </div>
                <button onClick={clear}>Limpiar</button>
                <p>Total: AR$ {priceTotal()}</p>
                </>
            ))}
        </div>
    ) : (
       
        <div>
            <h2>Carrito</h2>
            <p>Carrito vacio!</p>
            <Link to="/"><button>Ver productos</button></Link>
        </div>
    )
}

export default Cart;