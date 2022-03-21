import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const listParams = useParams();

    useEffect (() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then((response) => {
                return response.json()
            })
             /* console.log(listParams) */
            .then((resultado) => {
                setItems(resultado);
                console.log(listParams)
            })
            .catch(() => {
                console.log('Error al cargar los productos');
            })
            .finally(() => {
                setLoading(false);
            })
    }, [listParams]);

    return (
        loading
        ?
        <h1>Cargando...</h1>
        :
        <main>
            <ItemList items={items}/>
        </main>
    )
}

export default ItemListContainer;

