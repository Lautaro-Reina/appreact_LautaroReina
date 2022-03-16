import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [items, setItems] = useState({});

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
        <ItemDetail item={items}/>

    )
}

export default ItemDetailContainer;