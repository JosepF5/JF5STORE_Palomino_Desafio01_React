
import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({item}) {
  
    
    return (
        <div key={item.id}>
            <p> Producto: {item.nombre}</p>
            <p> Stock: {item.stockG}</p>
            <p>
                 <img className='imgDetail' src={item.img} alt={item.alt} />
            </p>
            <p>precio: ${item.precioG}</p>
             <p> <ItemCount  stock ={item.stockG} initial={1} />
            </p>
           
        </div>
    )
}

export default ItemDetail