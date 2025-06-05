import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
const[detail, setDetail]= useState({})
const [invalid, setInvalid]= useState(null)
const [loading, setLoading]= useState(false)
const {itemId} = useParams()



useEffect(()=>{
  setLoading(true)
  
  const productCollection = collection(db, "product")
  
  const docRef = doc(productCollection, itemId)
 
  getDoc(docRef)
  .then((res)=>{
    if(res.data()){
      
      setDetail({id:res.id, ...res.data()})
    }else{
      
      setInvalid(true)
    }
  })
  .catch((error)=> console.log(error))
  .finally(()=> setLoading(false))
},[])

if(invalid){
  return(
    <div>
      <h2> El producto no existe</h2>
      <Link className='btn btn-dark' to='/'>Volver al inicio</Link>
    </div>
  )
}

  return (
    <div>
        {loading ? <LoaderComponent/> : <ItemDetail detail={detail}/>}
    </div>
  )
}

export default ItemDetailContainer