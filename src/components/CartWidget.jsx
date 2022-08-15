import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContex';
const CartWidget = () =>{
    const{cartQuantity} = useCart()
    return (
        <li><Link to='/cart'><BsFillCartFill  style={{width: '10rem'}}/>
        <span>{cartQuantity() || ''}</span>
        </Link></li>
        
    );
}
export default CartWidget