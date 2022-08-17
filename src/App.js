import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDatailContainer from './components/ItemDatailContainer';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './pages/Home';
import {CartProvider} from './context/CartContex'
import Cart from './view/Cart'
import { useEffect } from 'react';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

function App() {

// useEffect(() => {
//   const db = getFirestore()

//   const macRef = doc(db, 'items', 'tPRlaN27QDmptQZIgCup')
//   getDoc(macRef)
//   .then((snapshot) => {
//     if(snapshot.exists()){
//       console.log(snapshot.data())
//       console.log(snapshot.id)
//     }
//   })
//   .catch((error) => console.error(error))
// }, [])


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/productos' element={ <ItemListContainer greeting='Bienvenido' /> }/>
          <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenido' />}/>
          <Route path='/detalle/:id' element={ <ItemDatailContainer/> }/>
          <Route path='/cart' element={ <Cart/> }/>
      </Routes>
    </BrowserRouter>
    </CartProvider>

  );
}

export default App;
