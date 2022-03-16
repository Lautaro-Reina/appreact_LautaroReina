import React from 'react'

const ItemDetail = (props) => {

    return (
        <article className="itemDetail">
            <img src={props.item.image} alt="" />
            <div className="titulos">
                <h3>{props.item.title}</h3>
                <p>${props.item.price}</p>
            </div>
            <p className="descripcion">{props.item.description}</p>
            <button>terminar compra</button>
        </article>
    )
}

export default ItemDetail;