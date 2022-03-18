import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {idProducto} = useParams()

    useEffect (() => {
        fetch(`https://fakestoreapi.com/products/${idProducto}`)
            .then((response) => {
                return response.json();
            })
            .then((resultado) => {
                setItem(resultado);
            })
            .catch(() => {
                console.log('Error al cargar los productos');
            })
    }, []);

    return (
        <ItemDetail item={item}/>

    )
}

export default ItemDetailContainer;