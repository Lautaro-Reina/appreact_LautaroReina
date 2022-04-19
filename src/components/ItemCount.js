import React, { useState } from "react"; 
import { toast } from 'react-toastify';

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial);

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

        toast.success('Producto agregado', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    return(
        <div className="itemcount">
            <div className="itemcount-cuantity">
                <button onClick={disminuir} className="btn-icon">-</button>
                <span className="counter-input">{count}</span>
                <button onClick={aumentar} className="btn-icon">+</button>
            </div>
            <button onClick={agregar} className="button">Agregar</button>
        </div>
    )
}


export default ItemCount;