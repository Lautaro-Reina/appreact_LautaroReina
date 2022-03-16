import React from 'react'

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
                <button>Ver más</button>
            </div>
        </div>
    )
}

export default Item;