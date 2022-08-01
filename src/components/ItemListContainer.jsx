import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { data } from "../mock/FakeApi"

const ItemListContainer = (props) => {
    const [listaProductos, setListaProductos]=useState([])
    const [loading, setLoading]=useState(true)
    const onAdd = () => {
        console.log('lo agregaste al carrito mi rey')
    }

        useEffect(()=>{
            console.log('soy el useEffect')
            data
            .then((res)=>setListaProductos(res))
            .catch((error) =>console.log(error))
           .finally(()=>setLoading(false))
        }, [])

        console.log(listaProductos)

    return (
        <div>
        <h3 className="greeting">{props.greeting}</h3>
        <ItemCount initial={1} stock={15} onAdd={onAdd}/>
        {loading ? <p>Cargando...</p> :<ItemList listaProductos={listaProductos}/>}
        
        </div>
        ) 
}

export default ItemListContainer;