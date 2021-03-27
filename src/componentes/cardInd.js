import React from 'react';
import '../assets/css/Card.css'

class CardInd extends React.Component{

    render(){
        const {id, producto, valor, cantidad, imagen} = this.props;

    return(
        
        <div className="card container-fluid w-75 col-12 h-100" id="card">
            <div className="card-header w-100">
                <h3>Detalle del producto</h3>
            </div>
            
            <div className = "card-body w-100 row" id="body">

                <div className = "col-4">
                    <img src={imagen}/>
                </div>
                <div className = "col-8 row w-100">
                    
                    <div className = "col-12 ">
                        <h6 id={id}></h6>
                        <h4>{producto}</h4>
                    </div>
                    <div className = "col-6 ">
                        <h6 >Valor: {valor}</h6>
                        <h6>Cantidad: {cantidad}</h6>
                    </div>
                    <div className = "col-6 ">
                        
                    </div>
                    
                </div>
                
            </div>
        </div>

    )
    }
    
}

export default CardInd;