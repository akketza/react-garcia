import React, { useEffect, useState } from 'react'
import { data } from '../mock/FakeApi'
import ItemDetail from './ItemDetail'
import {useParams} from'react-router-dom'

const ItemDatailContainer = () => {
    const[producto, setProducto]= useState({}) 
    const[loading, setLoading]= useState(true)
    const { id } = useParams()
    useEffect(()=>{
        data
        .then((res)=> setProducto(res.find((item)=>item.id === id )))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [])
  return (
    <div>
       {loading? <p>Cargando...</p> :<ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDatailContainer