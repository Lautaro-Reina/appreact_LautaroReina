import React from 'react'
import Item from './Item'

const ItemList = (props) => {
    return (
        <section className='container products'>
            <div className='gs-grid'>
                {props.items.map ((item) => {
                    return (
                        <Item key={item.id} item={item}/>
                    )
                })}
            </div>
        </section>
    )
}

export default ItemList;
