import {useState} from 'react'
import {Link} from 'react-router-dom'
import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext';
function ItemDetail({item}) {
    const [count, setCount] = useState(false)
    const {cartList ,agregarAlCarrito}= useCartContext()

    function onAdd (cant){
        console.log(cant)
        /*agregarAlCarrito( {...item, cantidad:cant} ) */
        setCount(true)
    }
    console.log(cartList);
    return (
        <div key={item.id}>
            <p> Producto: {item.nombre}</p>
            <p> Stock: {item.stockG}</p>
            <p>
                 <img className='imgDetail' src={item.img} alt={item.alt} />
            </p>
            <p>precio: ${item.precioG}</p>
            <p>
            {count ? <ItemCount  onAdd={onAdd} stock ={item.stockG} initial={0} /> :(<Link to="/cart">Ir al carrito</Link>)}
            
            </p>
            <p>
            <Link to="/">Home</Link>
            </p>
            
           
        </div>
    )
}

export default ItemDetail