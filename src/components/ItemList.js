import React from 'react'
import Item from './Item'

const itemList = (props) => {
    return (
        <section className='container products'>
            {props.items.map ((item) => {
                return (
                    <Item key={item.id} item={item}/>
                )
            })}
        </section>
    )
}

export default itemList;
