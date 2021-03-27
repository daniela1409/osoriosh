import React from 'react'
import '../assets/css/Card.css'
import { Link } from 'react-router-dom'
import ver from '../assets/img/ver.png'

class Card extends React.Component{

    render(){
        
        
        const {id, producto, valor, cantidad, imagen, condicion, ciudad} = this.props; 

       
        
        return(

            <div className="card container-fluid w-75 col-12 my-4" id="card">
                
                <div className = "card-body w-100 row" id="body">

                    <div className = "col-4">
                        <img src={imagen}/> 
                    </div>
                    <div className = "col-8 row w-100">
                        <div className = "col-12 ">
                            <h6 id = {id} ></h6>
                            <h4>{producto}</h4>
                        </div>
                        <div className = "col-8 ">
                            <h6 >Valor: {valor}</h6>
                            <h6>Cantidad: {cantidad}</h6>
                            <h6>Cantidad: {condicion}</h6>
                        </div>
                        <div className = "col-4 font-black">
                            <Link  to={{pathname:`/Producto/Detalle/${id}`, state:[{id: id, producto: producto, valor: valor, cantidad: cantidad, imagen: imagen, condicion: condicion}]}} >
                                <img src={ver} id="ver"/> Ver
                            </Link>
                        </div>
                        
                        
                    </div>
                   
                </div>
            </div>
            
        )
    }
}

export default Card