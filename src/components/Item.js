import React from 'react'

const item = (props) => {
    return (
        <div class="card">
            <div class="card__img">
                {/* <img src={props.item.imageUrl}/> */}
            </div>
            <div class="card__info">
                <p>{props.item.description}</p>
            </div>
            <div class="card__price">
                <span>{props.item.price}</span>
                <button>Ver más</button>
            </div>
        </div>
    )
}

export default item;