import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
    const onAdd = (items) => {
        console.log(items)
    }

    return (
        <main>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </main>

    )
}

export default ItemListContainer;

