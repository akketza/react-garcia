import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'
import { useCart } from '../context/CartContex'
import Categories from './Categories'

const NavBar = () => {
 const {cart} = useCart()

  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>MAC RECORD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/productos'>CDS</Link>
        </li>
      
        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle" to='/productos' role="button" data-bs-toggle="dropdown" aria-expanded="false">
           
          </p>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/category/rap'>RAP</Link></li>
            <li><Link className="dropdown-item" to='/category/rocknacional'>ROCK NACIONAL</Link></li>
            <li><Link className="dropdown-item" to='/category/rockinternacional'>ROCK INTERNACIONAL</Link></li>
            <li><Link className="dropdown-item" to='/category/ryb'>R&B</Link></li>
          </ul>
         
        </li>

        <Categories/>
        <CartWidget/>
          
      </ul>
    </div>
  </div>

</nav>
  )
}



export default NavBar