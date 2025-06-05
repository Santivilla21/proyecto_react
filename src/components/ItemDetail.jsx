import  {useContext, useState} from 'react'
import ItemCount from './ItemCount'

import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
const ItemDetail = ({detail}) => {
  const [purchase, setPurchase]= useState(false)

const {cart, addToCart}= useContext(CartContext)
 

  
  const onAdd = (cantidad) =>{
   addToCart(detail, cantidad)
   setPurchase(true)
  }

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h1>Detalle del producto: {detail.name}</h1>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>Stock: {detail.stock} unidades</p>
        <p>Price: ${detail.price},00</p>
       {
       purchase 
       ? <div style={{display:'flex', width:'80%', alignItems:'center', justifyContent:'space-between'}}>
          <Link  className='btn btn-dark' to='/'>Seguir comprando</Link>
      
        </div>
       : <ItemCount stock={detail.stock} onAdd={onAdd}/>
       }
    </div>
  )
}

export default ItemDetail