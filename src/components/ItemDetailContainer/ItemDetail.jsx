import {useState} from 'react'
// import { CartContext } from '../../context/CartContext';
import ItemCount from "./ItemCount";
import { Col, Row } from "react-bootstrap"
import { useCartContext } from '../../context/CartContext';

function ItemDetail({prod}) {
    const [count, setCount] = useState(0)

    const {cartList ,agregarAlCarrito}= useCartContext()

    function onAdd (cant){
        console.log(cant)
        agregarAlCarrito( {...prod, cantidad:cant} ) 
        // agregarAlCarrito( prod, cant ) 
    }
    
    console.log(cartList);
    return (
        
        <Row >
            <label>Soy el detalle</label>
            <Col>                
                <div className='card w-50'>
                    <div className="container">
                        <label>{prod.nombre}</label>
                    </div>
                    <div className="container">
                        <img  src={prod.img} className="w-25" alt="foto" />
                        <br/>
                        <label>{prod.stockG}</label><br/>
                    </div>
                    <div className="container">
                        <label>{prod.precioG}</label>
                    </div>
                </div>
            </Col>
            <Col>                
                <ItemCount onAdd={onAdd} stock={10}/>      
            </Col>                           
        </Row>

       
    )
}

export default ItemDetail
