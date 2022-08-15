import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd, count, setCount}) => {

    const sumar = () => {
        if(count < stock){
        setCount(count + 1)
        }
    }
    const resta = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    return (
        <>
    <div>
        <button className='btn btn-danger' onClick={resta}>-</button>
            <span className='btn btn-light mx-2'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-warning' onClick={onAdd}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount