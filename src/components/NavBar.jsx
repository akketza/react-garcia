import CartWidget from './CartWidget'

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="#">Mac Records</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Inicio <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
            </li>
            </ul>
        </div>
        <CartWidget />
</nav>  
    )
}

export default NavBar