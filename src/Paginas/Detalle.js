import React from 'react';
import CardInd from '../componentes/cardInd';


function Detalle(props) {

    const{state} = props.location

    const informacion = state[0]

   

    return(
        <div className="container-fluid d-flex justify-content-center w-75" >
            <CardInd
                id = {informacion.id}
                producto = {informacion.producto}
                valor = {informacion.valor}
                cantidad = {informacion.cantidad}
                imagen = {informacion.imagen}
            />
        </div>
    )
}

export default Detalle;