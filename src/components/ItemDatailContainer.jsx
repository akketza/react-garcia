import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from'react-router-dom'
import {doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDatailContainer = () => {
    const[producto, setProducto]= useState({}) 
    const[loading, setLoading]= useState(true)
    const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()

    const  productRef = doc(db, 'items', id)

    getDoc(productRef)
    .then((snapshot) => {
      setProducto({...snapshot.data(), id: snapshot.id})
    })
    .catch((error) =>{ console.log(error)})
    .finally(() => {
      setLoading(false)
    })
  }, [id])

    // useEffect(()=>{
    //     data
    //     .then((res)=> setProducto(res.find((item)=>item.id === id )))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // }, [])
  return (
    <div>
       {loading? <p>Cargando...</p> :<ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDatailContainer