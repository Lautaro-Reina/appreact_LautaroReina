import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div className='col-6 md-col-3'>
            <div className="card">
                <div className="card__img">
                    <img src={item.image} alt=''/>
                </div>
                <div className="card__info">
                    <p>{item.title}</p>
                </div>
                <div className="card__price">
                    <span>{item.category}</span>
                    <span>AR$ {item.price}</span>
                    <Link to={`/item/${item.id}`}><button className='button'>Ver más</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;