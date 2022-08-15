import React from 'react'
import { useCart } from '../context/CartContex'

const CartItem = ({producto}) => {
    const {removeItem} =useCart()
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <img src={producto.img} alt={producto.name} />
        <span>{producto.quantity}</span>
        <span>{producto.name}</span>
        <span>${producto.price}</span>
        <button className='btn btn-danger' onClick={() => removeItem(producto.id)}>X</button>
    </div>
  )
}

export default CartItem