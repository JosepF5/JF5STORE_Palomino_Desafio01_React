import React, {useState} from 'react';
import './ItemCount.css';
import { Button } from 'react-bootstrap';
function ItemCount({stock, initial}) {


    const [value, setValue] = useState(initial)

    const handleSuma = (valor)=>{
        value < stock ? setValue(previo => previo+ valor): alert('compra maxima posible')
    }

    const handleResta =(valor)=>{
        value > initial ? setValue(estadoPrevio => estadoPrevio - valor) : alert('compra minima posible')
    }


    const onAdd = () => {
        const message = `Has comprado ${value} producto`;
        value === 1 ? alert(message) : alert(`${message}s`);
        setValue(initial)
      };

    return (
        <div className="row">
        <div className="col-sm-6 m-2">
        <Button variant="outline-primary" className="button-count m-2" onClick={()=>handleSuma(1)}>+</Button>
        <span>{value}</span>
        <Button variant="outline-primary" className="button-count m-2" onClick={()=>handleResta(1)}>-</Button>
        </div>
        <div className="col-sm-6 m-2">
        <Button variant="outline-success" className="button-count" onClick={onAdd}>Agregar al carrito</Button>
        </div>
        </div>
    )
}

export default ItemCount