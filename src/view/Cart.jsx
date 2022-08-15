import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContex'
import CartItem from '../components/CartItem'

const Cart = () => {
    const navegar = useNavigate()
    const{cart, emptyCart, cartTotal} = useCart()
  return (
    <div>
        {!cart.length
        ?
        <>
        <h4>Tu carrito esta vacio</h4>
        <h5>Te invitamos a recorrer nuestro shop</h5>
        <button onClick={() => navegar('/')}>Ver productos</button>
        </>
        :
        <>
        <h3>Tu carrito</h3>
            {cart.map((producto)=> <CartItem key={producto.id} producto={producto}/>)}
            <span>Total a pagar : ${cartTotal()}</span>
        <div>
            <button className='btn btn-success'>Terminar Compra</button>
            <button className='btn btn-danger' onClick={emptyCart}>Vaciar Carrito</button>
        </div>
        </>}
    </div>
  )
}

export default Cart