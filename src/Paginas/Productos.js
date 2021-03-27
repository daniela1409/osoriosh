import React from 'react';
import '../assets/css/Producto.css';
import { useParams, Link  } from 'react-router-dom';
import Producto from './Producto';
import img from '../assets/img/OsorioShop.PNG'


import '../assets/css/Producto.css';

function Productos() {
   
    const {userInput} = useParams();

    if(userInput !== "undefined"){
        return(

            <div>
                <div id="barra" className="container w-100">
                    <Link to="/" id="Link">
                        <img src={img} id="image" className="w-5"/> Osorio Shop
                    </Link>
                    
                </div>
                <div id="producto" className="container-fluid d-flex justify-content-center row w-100">
                    
                    <div className="col-12">
                        <h1>PRODUCTOS</h1>
                    </div>
                    <div className="col-12 w-100">
                        <Producto
                        producto = {userInput}
                        />
                    </div>
                </div>
            </div>
        )

    }
    else{
        return(

            <Link to="/">
                Volver Página de inicio
            </Link>
        )
            
    }

    
    
}
export default Productos;