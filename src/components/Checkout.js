import {addDoc, collection, Timestamp, getFirestore} from 'firebase/firestore';
import {useState} from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextCart } from './CartContext';

const Checkout = () => {
    const {carrito, priceTotal, clear} = useContext(contextCart); 
    const [warning, setWarning] = useState('');
    const [showOrder, setShowOrder] = useState(0);
    const [dataForm, setDataForm] = useState ({
        name: '', email: '', phone: '', confirmation: ''
    })

    const handleChange = (e) => {
        setDataForm({
            ...dataForm, [e.target.name]: e.target.value
        })
    }

    const placeOrder = (e) => {
        // Verifica si las entradas están vacías. Muestra un mensaje de advertencia si es verdadero.
        if (dataForm.name === "" || dataForm.email === "" || dataForm.phone === "" || dataForm.confirmation === "") {
            e.preventDefault()
            setWarning(<p className='warning warning-error'>Complete los datos!</p>)
        } else if (dataForm.confirmation !== dataForm.email) {
            // Comprueba si los e-mails son diferentes. Muestra un mensaje de advertencia si es verdadero.
            e.preventDefault()
            setWarning(<p className='warning warning-error'>Los mails no coinciden</p>)
        } else {
            // Si todo es correcto, se procede a realizar el pedido.
            e.preventDefault()
            setWarning(<p className='warning'>Cargando...</p>)
            let order = {}
            order.buyer = dataForm
            order.total = priceTotal()
            order.date  = Timestamp.fromDate(new Date())
            order.products = carrito.map(prod => {
                const id = prod.id;
                const title = prod.title;
                const price = prod.price;
                const quantity = prod.quantity;
                
                return {id, title, quantity, price}
            })
            // ENVÍE los datos del pedido a la base de datos.
            const db = getFirestore()
            const orderCollection = collection(db, "orders")
            addDoc(orderCollection, order)
            .then(resp => {
                // Si el pedido se realiza correctamente, se limpia el carrito.
                clear()
                setShowOrder(resp.id)
                setWarning(<p className='warning warning-success'>Tu orden es: <b>{resp.id}</b></p>)
            })
            .catch(err => console.log(err))
        }
    }

    
    if (!showOrder) {
        return (
                <section className='container-form min-vh'>
                        <h1 className='pa'>Formulario de compra</h1>
                        <form onSubmit={placeOrder} onChange={handleChange}>
                            <div className='check-form'>
                                <input type="text" name="name" placeholder="Nombre y apellido" defaultValue={dataForm.name}/>
                                <input type="text" name="phone" placeholder="Numero" defaultValue={dataForm.phone}/>
                                <input type="email" name="email" placeholder="E-mail" defaultValue={dataForm.email}/>
                                <input type="email" name="confirmation" placeholder="E-mail confirmacion" defaultValue={dataForm.confirmation}/>
                                <span>{warning}</span>
            
                                <button className="button">Comprar</button>
                            </div>
                        </form>
                    </section>
        )
    } else {
        return (
            <section className='container-order min-vh p5'>
                <h1 className='order-title'>Gracias por tu compra!</h1>
                <p>{warning}</p>
                <Link to='/' className='button--order'>Volver al inicio</Link>
            </section>
        )
    }

}

export default Checkout;