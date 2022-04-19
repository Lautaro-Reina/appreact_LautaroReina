import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextCart } from './CartContext';
import {CartList} from './CartList';

const Cart = () => {

    const {carrito, clear, priceTotal} = useContext(contextCart); 


    return carrito.length ? (
        <section className='container p5 cf min-vh'>
            <div class="heading">
                <h1>Mi carrito</h1>
                <div className='removebtn'>
                    <button className='button-outline' onClick={() => clear()}><i class='bx bx-trash bx-xs'></i></button>
                    <button className='button'>Seguir comprando</button>
                </div>
            </div>
            <div className='cart'>
                <ul className='cartWrap'>
                    {carrito.map(producto => <CartList key={producto.id} producto={producto}/>)}
                </ul>
            </div>

            <div className='total'>
                <Link to='/checkout'><button className='button-finish'>Terminar compra</button></Link>
                <p><b>Total:</b> AR$ {priceTotal()}</p>
            </div>
            
        </section>
    ) : (
       
        <div className='container cartvacio p5 min-vh'>
            <i class='bx bx-cart bx-lg' ></i>
            <h1>¡No tienes productos por comprar!</h1>
            <small>Una vez que agregues productos, los veras reflejados aqui.</small>
            <div>
                <Link to="/"><button className='button'>Ver productos</button></Link>
            </div>
        </div>
    )
}

export default Cart;