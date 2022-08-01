import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <h2>Detalle del producto:{producto.name}</h2>
        <img src={producto.img} alt={producto.name}/>
        <p>{producto.description}</p>
    </div>
      
  )
}

export default ItemDetail