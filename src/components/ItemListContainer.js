import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { productosCollection } from './Firebase';
import { query, where, getDocs } from "firebase/firestore";
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);

    const {idCategory} = useParams();

    console.log(idCategory)

    useEffect (() => {

        if(!idCategory) {
            const consulta = getDocs(productosCollection);
            consulta
                .then((resultado) => {
                    const FirebaseDb = resultado.docs.map((doc) => {
                        return ({id: doc.id, ...doc.data()})
                    })
                    setItems(FirebaseDb);
                })
                .catch(() => {
                    console.log('ERROR DE CARGA')
                })
                .finally(() => {
                    setLoading(false)
                })  
        } else {
            const filter = query(productosCollection,where("category","==",idCategory));
            const itemsFilter = getDocs(filter);

            itemsFilter
                .then((resultado) => {
                    const FirebaseDb = resultado.docs.map((doc) => {
                        return ({id: doc.id, ...doc.data()})
                    })
                    setItems(FirebaseDb);
                })
                .catch(() => {
                    console.log('ERROR DE CARGA')
                })
                .finally(() => {
                    setLoading(false)
                }) 
        }

    }, [idCategory]);

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

