import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    return (
        <section className='container products min-vh'>
            <div className='gs-grid'>
                {items.map ((item) => {
                    return (
                        <Item key={item.id} item={item}/>
                    )
                })}
            </div>
        </section>
    )
}

export default ItemList;
