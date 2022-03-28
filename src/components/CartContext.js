import { createContext, useState, useEffect } from "react";

export const contextCart = createContext()
const { Provider } = contextCart

const CartContext = ({ children }) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState(() => {
        if (localStorage.getItem('cart')) {
            
            return JSON.parse(localStorage.getItem('cart'));

        }

        return [];
    })

    const addItem = (item, quantity) => {
        const copiaCarrito = [...carrito];
        let producto = {...item, quantity};

        if (isInCart(item.id)) {
            let index = copiaCarrito.findIndex(e => e.id === item.id);
            let producto = copiaCarrito[index];
            
            producto.quantity += quantity;

        } else {
            copiaCarrito.push(producto);
        }

        setCarrito(copiaCarrito);
        localStorage.setItem('cart', JSON.stringify(copiaCarrito));
    }

    const isInCart = (id) => {
        carrito.some(e => e.id === id)
    }

    const priceTotal = () => {
        return carrito.reduce((accum, element) => accum = accum + (element.price * element.quantity), 0)
    }

    const removeItem = (id) => {
        const carritoActualizado = carrito.filter(e => e.id !== id)
        setCarrito(carritoActualizado);
        localStorage.setItem('cart', JSON.stringify(carritoActualizado));
    }

    const clear = () => {
        setCarrito([]);
        localStorage.removeItem('cart');
    }

    useEffect(() => {
        if (carrito.length > 0) {
            let cantidad = 0
            carrito.forEach(item => cantidad = cantidad + item.quantity)
            setCantidad(cantidad)
        } else {
            setCantidad(0)
        }

    }, [carrito])

    const valueContext = {carrito, cantidad, addItem, isInCart, priceTotal, removeItem, clear}

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}

export default CartContext;
