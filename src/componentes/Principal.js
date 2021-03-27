import React from 'react';
import '../assets/css/principal.css'
import Boton from '../componentes/Boton'


class Principal extends React.Component{    
    state = {};
    constructor(props) {
        super(props);
        
    }

    handleChange = e =>{
        
        this.setState({
            [e.target.name]: e.target.value
        })

    }

        
    render(){
        
        return(
            <div className="card container-fluid  w-75 h-50 col-8" >

                <div className = "card-body w-100 row" >
                    <div className="col-12" >
                        <label className="w-50">Nombre del producto</label>
                        <input className="w-50" id="inProducto" name="producto" onChange={this.handleChange} value={this.state.name} required></input>
 
                    </div>
                    <div className="col-12 w-100 d-flex justify-content-end mt-4" >
                        <Boton
                            userInput = {this.state.producto}
                        />
                    </div>
                    
                </div>
                    
            </div>
        )
    }
}

export default Principal;