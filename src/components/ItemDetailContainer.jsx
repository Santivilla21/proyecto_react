import React, { useEffect, useState } from 'react'
import { getItem } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const[detail, setDetail]= useState({})

    useEffect(()=>{
        
        getItem('ItemId')
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
    },[])

  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer