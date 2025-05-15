
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
/* import ItemCount from './components/ItemCount' */
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  console.log('App')

  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
     <Route path='/' element = {<ItemListContainer/>}></Route>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria: '/>}/>
     <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

    </Routes>
    </BrowserRouter>
  )
}


export default App