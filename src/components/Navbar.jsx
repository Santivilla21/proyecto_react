import { NavLink } from 'react-router-dom'
import CartWidgetReactIcons from './CartWidgetReactIcons' 
const Navbar = () => {
   return (
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
         <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <NavLink className='nav-links' to='/'><img src="../logo-presurisador.jpeg" alt="logo" width="50" /></NavLink>
            <NavLink className='nav-links' to="/category/presurizadores">Presurizadores</NavLink>
            <NavLink className='nav-links' to="/category/infladores">Infladores</NavLink>
            <NavLink className='nav-links' to="/category/pelotas">Pelotas </NavLink>
         </div>

         <NavLink className='nav-links' to="/cart">
            <CartWidgetReactIcons />
            
         </NavLink>
      </nav>
   )
}

export default Navbar