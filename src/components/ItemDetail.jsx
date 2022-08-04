import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
  const onAdd = () => {
    console.log('lo agregaste al carrito mi rey')
}

  const volver = useNavigate()
  return (
    <div>
        <h2>Nombre:{producto.name}</h2>
        <img src={producto.img} alt={producto.name}/>
        <p>{producto.description}</p>
        <button className='btn btn-info' onClick={()=>volver('/productos')}>Volver a productos</button>
        <ItemCount initial={1} stock={15} onAdd={onAdd}/>
    </div>
      
  )
}

export default ItemDetail