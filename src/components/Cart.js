import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextCart } from './CartContext';
import { db } from './Firebase';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';

const Cart = () => {

    const {carrito, priceTotal, removeItem, clear} = useContext(contextCart); 

    const crearOrden = () => {

        const ordenesCollection = collection(db, "ordenes")
    
        const orden = {
            buyer: {
                nombre: "Lautaro",
                email: "lautaro@gmail.com",
                telefono: "1234567890"
            },
            items: carrito,
            date: serverTimestamp(),
            total: priceTotal()
          }

            const pedido = addDoc(ordenesCollection, orden)

        pedido
            .then((resultado) => {
                return console.log(resultado)
            })
            .catch(() => {
                return console.log('error')
            })
    }

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
            <button onClick={crearOrden}>Terminar compra</button>
            
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