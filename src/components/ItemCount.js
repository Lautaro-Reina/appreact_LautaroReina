import React, { useState } from "react"; 

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial); //count solo puede cambiar si se pasa atraves de setCount. NO MANUALMENTE

    const aumentar = () => {
        if (count < props.stock) {
            setCount(count + 1);
        };
    };

    const disminuir = () => {
        if (count > 1) {
            setCount(count - 1);
        };
    }

    const agregar = () => {
        props.onAdd(count);
    }

    return(
        <div className="itemcount">
        <button onClick={disminuir} className="itemcount__btn">-</button>
            <div className="itemcount__cuantity">
                <span>{count}</span>
            </div>
            <button onClick={aumentar} className="itemcount__btn">+</button>
            <button onClick={agregar} className="itemcount__btn">Agregar</button>
        </div>
    )
}


export default ItemCount;