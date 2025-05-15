import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({prod}) => {
    const {name, price, img, id}= prod
  return (
    <div className='card' style={{width:'14rem', marginTop:15}}>
        <img className='card-img-top' src={img} alt={name}/>
        <div className='card-body'>
            <h4 className='card-title'>{name}</h4>
            <p className='card-text'>${price},00</p>
            <Link className='btn btn-warning' to={'/item/'+id}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item