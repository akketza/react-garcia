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
        <button onClick={resta}>-</button>
            <span>{count}</span>
        <button onClick={sumar}>+</button>
        <button onClick={onAdd}>comprar</button>
    </div>
         
  )
}

export default ItemCount