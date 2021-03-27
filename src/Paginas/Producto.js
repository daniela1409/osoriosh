import axios from 'axios';
import React from 'react';
import Card from '../componentes/Card';
import derecha from '../assets/img/derecha.png';
import izquierda from '../assets/img/izquierda.png';

class Producto extends React.Component{

    state ={
        productos: [],
        offset: 0,
        pageCounter: 1,
      }
    
      componentDidMount() {
        this.fetchData();
      }
    
      componentDidUpdate(prevProps,prevState) {
        const { offset } = this.state;
        if (offset !== prevState.offset) {
          if (offset < 0 ) {
            this.setState({
              offset: 0,
              pageCounter: 1,
            });
            this.fetchData(prevState.offset);
          }
          this.fetchData(offset);
        }
      }
    
      fetchData = (offset) => {
        const url = 'https://api.mercadolibre.com/sites/MCO/search?q='+ this.props.producto;
        let params = {
          offset: offset,
          limit: 20
        }
        axios.get(url, { params })
        .then(res => {
          const { results } = res.data;
    
          this.setState({
            productos: results,
          })
    
        })
        .catch(error =>{
          console.log(error);
        })
      }
    
      nextPage= () => {
        const {offset, pageCounter } = this.state;
        this.setState({
          offset: offset + 20,
          pageCounter: pageCounter + 1,
        });
        
      }
    
      previousPage= () => {
        const { offset, pageCounter } = this.state;
        this.setState({
          offset: offset - 20,
          pageCounter: pageCounter - 1,
        });
      }

      
    render(){
        return(
            <div >
                <a onClick={this.previousPage} href="#">
                    <img src={izquierda} id="image"/> 
                </a>
                <a onClick={this.nextPage} href="#">
                    <img src={derecha} id="image"/> 
                </a>
                
                {
                    
                    this.state.productos.map((prod) => {

                        

                        return(

                            <Card
                                id = {prod.id}
                                producto = {prod.title}
                                valor = {prod.price}
                                cantidad = {prod.available_quantity}
                                imagen = {prod.thumbnail}
                                condicion = {prod.condition}
                                key = {prod.id}
                            
                            />
                        )
                            
                        
                        
                    })
                }

            </div>

        )
    }
}

export default Producto;