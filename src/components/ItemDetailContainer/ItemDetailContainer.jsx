import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getFetch from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'


function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    const {idProd} = useParams()
    /*
    useEffect(()=>{
        getFetch
        .then(resp =>setItem(resp.find((prod)=>prod.id===parseInt(idProd))))
        .catch(err =>console.log(err))
        .finally(()=>setLoading(false))
        
    },[idProd])
    */
    useEffect(() => {        
        // getFetch
        //     .then(resp => setProd(resp.find(prod => prod.id === parseInt(id)))) 
        //     .catch(err => console.log(err))
        //     .finally(()=>setLoading(false))

            const db = getFirestore()
            const queryDb = doc(db, 'items', idProd)
            getDoc(queryDb)
            .then(resp => setItem( { id: resp.id, ...resp.data() } ))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
        // eslint-disable-next-line       
    },[idProd]) 
    console.log(item)

    

    return (
        <div className ="container">
            <h1>Detalle de producto </h1>
            {loading ? <div className="preCarga"></div>
            :  <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer