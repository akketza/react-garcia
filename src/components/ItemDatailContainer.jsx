import React, { useEffect, useState } from 'react'
import { data } from '../mock/FakeApi'
import ItemDetail from './ItemDetail'

const ItemDatailContainer = () => {
    const[producto, setProducto]= useState({}) 
    const[loading, setLoading]= useState(true)
    useEffect(()=>{
        data
        .then((res)=> setProducto(res.find((item)=>item.id === '03')))
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