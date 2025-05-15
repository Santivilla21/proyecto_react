import { useEffect, useState } from "react"
import { getProducts } from '../mock/asyncMock'
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (categoryId) {
                    setProducts(res.filter((prod) => prod.category === categoryId))
                } else {

                    setProducts(res)
                }
            })
            .catch((error) => console.error(error))
    }, [categoryId])





    return (
        <div>
            <h1>Comodidad Deportes</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer