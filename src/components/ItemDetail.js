import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {contextCart} from './CartContext';

const ItemDetail = (props) => {

    const {addItem} = useContext(contextCart)



    const [quantity, setQuantity] = useState(0);

    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd)

        addItem(props.item, quantityToAdd)
    }

    return (
        <article className="itemDetail">
            <img src={props.item.image} alt="" />
            <div className="titulos">
                <h3>{props.item.title}</h3>
                <p>AR$ {props.item.price}</p>
            </div>
            <p className="descripcion">{props.item.description}</p>
            {quantity === 0 ? (<ItemCount stock={5} initial={1} onAdd={onAdd}/>) : (<Link to="/Cart">Ir al carrito</Link>)}
        </article>
    )
}

export default ItemDetail;