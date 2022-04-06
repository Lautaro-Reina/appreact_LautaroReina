import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='col-3 md-col-6'>
            <div className="card">
                <div className="card__img">
                    <img src={props.item.image}/>
                </div>
                <div className="card__info">
                    <p>{props.item.title}</p>
                </div>
                <div className="card__price">
                    <span>{props.item.category}</span>
                    <span>AR$ {props.item.price}</span>
                    <Link to={`/item/${props.item.id}`}><button className='button'>Ver más</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;