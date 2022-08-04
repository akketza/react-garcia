import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial) 

    const sumar = () => {
        if(count < stock){
        setCount(count + 1)
        }
    }
const resta = () => {
    if(count > initial){
        setCount(count - 1)
    }
}

    return (
    <div>
        <button className='btn btn-danger' onClick={resta}>-</button>
            <span>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
        <button className='btn btn-warning' onClick={onAdd}>Agregar al carrito</button>
    </div>
         
  )
}

export default ItemCount