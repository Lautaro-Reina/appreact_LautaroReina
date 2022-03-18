import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div class="card">
            <div class="card__img">
                <img src={props.item.image}/>
            </div>
            <div class="card__info">
                <p>{props.item.title}</p>
            </div>
            <div class="card__price">
                <span>{props.item.price}</span>
                <Link to={`/item/${props.item.id}`}><button>Ver más</button></Link>
            </div>
        </div>
    )
}

export default Item;