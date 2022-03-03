/* VARIABLE REACT EN SCOPE, ESTA PRIMER LINE SE PUEDE NO ESCRIBIR TAMBIEN */
import React from "react"  
/* VARIABLE REACTDOM EN SCOPE */
import ReactDOM from "react-dom"

import App from './App'
import './Styles/App.scss'


/* PARA PONER EL COMPONENTE EN EL DOM. TOMA DOS PARAMETROS:
EL COMPONENTE Y EL LUGAR DEL DOM DONDE SE QUIERE MOSTRAR EL COMPONENTE
*/
ReactDOM.render(<App/>, document.getElementById('root'))