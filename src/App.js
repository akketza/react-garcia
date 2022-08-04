import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDatailContainer from './components/ItemDatailContainer';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/productos' element={ <ItemListContainer greeting='Bienvenido' /> }/>
        <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenido' />}/>
        <Route path='/detalle/:id' element={ <ItemDatailContainer/> }/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
