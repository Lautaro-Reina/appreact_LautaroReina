import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = (props) => {
    const [quantity, setQuantity] = useState(0);

    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd)
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