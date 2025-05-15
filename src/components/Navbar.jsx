import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
   return (
      <nav>

         <NavLink className='nav-links' to='/'><img src="../logo-presurisador.jpeg" alt="logo" /></NavLink>
         <NavLink className='nav-links' to="/category/presurizadores">Presurizadores</NavLink>
         <NavLink className='nav-links' to="/category/infladores">Infladores</NavLink>
         <NavLink className='nav-links' to="/category/pelotas">Pelotas </NavLink>
         <CartWidget/>
      </nav> 
   )
}

export default Navbar