import React, {useEffect, useState} from 'react';
/* import ItemCount from './ItemCount'; */
/* import products from '../database/products'; */
import ItemList from './ItemList'

/* const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000);
    })
} */

const ItemListContainer = () => {
    /* const onAdd = (items) => {
        console.log(items)
    } */

    const [items, setItems] = useState([]);

    useEffect (() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then((response) => {
                return response.json();
            })
            .then((resultado) => {
                setItems(resultado);
            })
            .catch(() => {
                console.log('Error al cargar los productos');
            })
    }, []);

    return (
        <main>
            <ItemList items={items}/>
        </main>

    )
}

export default ItemListContainer;

