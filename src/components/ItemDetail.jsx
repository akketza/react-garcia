import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useCart } from '../context/CartContex'
import { useState } from 'react'

const ItemDetail = ({producto}) => {
  const [count, setCount] = useState(0) 
  const {name, description, img, stock, price} = producto
  const{addCart} = useCart()
  const [compra, setCompra]=useState(false)
  const navigate = useNavigate()
  const onAdd = () => {
    let itemComprar = {
      name,
      img,
      stock,
      price,
      quantity: count
    }
    setCompra(true)
    addCart(itemComprar)
}

  const volver = useNavigate()
  return (
    <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Nombre:{name}</h2>
        <img src={img} alt={name} style={{width: '20rem',}}/>
        <p>{description}</p>
        <p>Stock disponible : {stock}</p>
        {compra ?<div>
          <button className='btn btn-info' onClick={() => {navigate('/productos')}}>Seguir Comprando</button>
        <button className='btn btn-info' onClick={()=>{navigate(('/carrito'))}}>Ir al carrito</button>
        </div>
        :<ItemCount stock={stock} count={count} setCount={setCount} onAdd={onAdd}/>}
    </div>
      
  )
}

export default ItemDetail