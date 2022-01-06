import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import getFetch from './../helpers/getFetch'
import ItemList from './ItemList/ItemList'
import { collection, doc, getDoc, getFirestore, getDocs, query, where, limit } from 'firebase/firestore'
function ItemListContainer( {greeting} ) {
    const [productos, setProductos]=useState([])
    const [producto, setProducto]=useState([])
    const [loading, setLoading] = useState(true)
    const {idPrecio} = useParams()

    //useEffect(()=>{
    //    if (idPrecio) {
    //        getFetch
    //        .then(resp =>setProductos(resp.filter(prod=>prod.nombre === idPrecio)))
    //        .catch(err =>console.log(err))
    //        .finally(()=>setLoading(false))
    //    }else {
    //        getFetch
    //        .then(resp =>setProductos(resp))
    //        .catch(err =>console.log(err))
    //        .finally(()=>setLoading(false))
    //    }
//
    //    
    //},[idPrecio])

    //useEffect(()=>{
    //    const db=getFirestore();
//
    //    const queryDb=doc(db,'items','0g9NacmdPkOYuxw3y4mQ')
    //    getDoc(queryDb).then(resp =>setProducto({id: resp.id, ...resp.data()}))
    //},[idPrecio])
/*
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = query(
            collection(db, 'items')
            //where('price','>', 900 ), 
            //limit(1)
        )
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        

    }, [idPrecio]) */

    useEffect(()=>{
        if (idPrecio) {
          const db= getFirestore()
       
          const queryCollection = query(collection(db, 'productos'), where('precio', '==', idPrecio));
          getDocs(queryCollection)
          .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
          .catch(err=>console.log(err))
          .finally(()=>setLoading(false))
  
          }else {
                  const db= getFirestore()
                  const queryCollection= collection(db, 'productos')
                  getDocs(queryCollection)
                  .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
                  .catch(err =>console.log(err))
                  .finally(()=>setLoading(false))
  
          
       }},[idPrecio])

    console.log(producto)

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
