import React, {useEffect, useState} from 'react';
/* import ItemCount from './ItemCount'; */
import products from '../database/products';
import ItemList from './ItemList'

const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000);
    })
}

const ItemListContainer = () => {
    /* const onAdd = (items) => {
        console.log(items)
    } */

    const [items, setItems] = useState([]);

    useEffect (() => {
        getDatos().then( respuestaPromise => {
            setItems(respuestaPromise);
        })
    }, []);

    return (
        <main>
            <ItemList items={items}/>
        </main>

    )
}

export default ItemListContainer;

