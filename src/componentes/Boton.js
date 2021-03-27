import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/Boton.css'
import lupa from '../assets/img/lupa.png'


function Boton(props) {
    

    return(



        <div className="col-4 w-100 d-flex justify-content-end">
           <Link to={`/Productos/${props.userInput}`}  id="link">
                <img src={lupa} id="lupa"/>Buscar
            </Link>
        </div>
    )

}

export default Boton;