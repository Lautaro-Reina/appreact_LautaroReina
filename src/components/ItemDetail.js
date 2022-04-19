import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {contextCart} from './CartContext';

const ItemDetail = ({item}) => {

    const {addItem} = useContext(contextCart)



    const [quantity, setQuantity] = useState(0);

    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd)

        addItem(item, quantityToAdd )
    }

    return (
        <article className="detail container min-vh p5">
            <div className='gs-grid'>
                <div className='prueba col-12 md-col-6'>
                    <div className='detail-img'>
                        <img src={item.image} alt="" />
                    </div>
                </div>
                <div className='col-12 md-col-6'>
                    <div className="producto-detail">
                        <h3>{item.title}</h3>
                        <p className="descripcion">{item.description}</p>
                        <p><b>Disponible: </b>{item.stock}</p>
                        <p><b>Precio: </b>AR$ {item.price}</p>
                        {quantity === 0 
                        ? 
                        (<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>) 
                        :
                        (
                        <div className="productpost-links">
                            <Link to="/cart">
                                <button className="button-outline">Terminar mi compra</button>
                            </Link>
                            <Link to="/">
                                <button className="button">Seguir comprando </button>
                            </Link>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail;