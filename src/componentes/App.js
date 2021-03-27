import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bienvenida from '../Paginas/Bienvenida';
import Productos from '../Paginas/Productos';
import NotFound from '../componentes/NotFound';
import Detalle from '../Paginas/Detalle'

function App() {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Bienvenida}/>
            <Route exact path="/Productos/:userInput" component={Productos}/>
            <Route exact path="/Producto/Detalle/:id" component={Detalle}/>
            <Route component={NotFound}/>
        </Switch>

        </BrowserRouter>
    )
}

export default App;