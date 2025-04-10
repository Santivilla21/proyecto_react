import CartWidget from './CartWidget'
const Navbar = () => {
   return (
      <nav>

         <a className='nav-links' href=""><img src="../logo-presurisador.jpeg" alt="logo" /></a>
         <a className='nav-links' href="">Presurizadores</a>
         <a className='nav-links' href="">Infladores</a>
         <a className='nav-links' href="">Pelotas </a>
         <CartWidget></CartWidget>
      </nav> 
   )
}

export default Navbar