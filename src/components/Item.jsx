import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({producto}) => {

  const navegar = useNavigate()

  return (
    <div className="card" style={{width: '18rem'}}>
  <img src={producto.img} className="card-img-top" alt={producto.name}/>
        <div className="card-body">
            <h5 className="card-title">{producto.name}</h5>
            {/* <p className="card-text" style={{display: 'inline'}}>{producto.description}</p> */}
            <p className="card-text">${producto.price}</p>
            <button className="btn btn-primary" onClick={()=>navegar(`/detalle/${producto.id}`)}>Ver mas</button>
        </div>
    </div>

  )
}

export default Item