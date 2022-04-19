import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { productosCollection } from './Firebase';
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from './ItemDetail';
import Loading from './Loading';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect (() => {
        const pedido = getDoc(doc(productosCollection, id))
        pedido
        .then((res) => {
            return setItem({...res.data(), id})
            })
        .catch(() => {
            console.log('ERROR DE CARGA')
            })
        .finally(() => {
            setLoading(false)
            }) 
    }, [id])

    return (
        loading
        ?
        <Loading/>
        :
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;