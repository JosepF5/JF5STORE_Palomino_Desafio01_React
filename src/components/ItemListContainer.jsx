import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import getFetch from './../helpers/getFetch'
import ItemList from './ItemList/ItemList'

function ItemListContainer( {greeting} ) {
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(true)

    const {idPrecio} = useParams()

    useEffect(()=>{
        if (idPrecio) {
            getFetch
            .then(resp =>setProductos(resp.filter(prod=>prod.nombre === idPrecio)))
            .catch(err =>console.log(err))
            .finally(()=>setLoading(false))
        }else {
            getFetch
            .then(resp =>setProductos(resp))
            .catch(err =>console.log(err))
            .finally(()=>setLoading(false))
        }

        
    },[idPrecio])

    return (
        <main className ="container">
            <h1>{greeting}</h1>
            {loading ? <div className="preCarga"></div>
            : <ItemList productos={productos} />
            }
           
        </main>
    )
}

export default ItemListContainer
