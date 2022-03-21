import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    /* const parametros = useParams();
    const id = parametros.id; */
    const {id} = useParams(); //Destruc.

    useEffect (() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((resultado) => {
                setItem(resultado);
            })
            .catch(() => {
                console.log('Error al cargar los productos');
            })
            .finally(() => {
                setLoading(false);
            })
    },[]);

    return (
        loading
        ?
        <h1>Cargando...</h1>
        :
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;