
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h2>Tu carrito esta vacio</h2>
        <Link className='btn btn-dark' to='/'>Volver al inicio</Link>
    </div>
  )
}

export default EmptyCart