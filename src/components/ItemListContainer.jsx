import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { data } from "../mock/FakeApi"
import {useParams} from'react-router-dom'

const ItemListContainer = (props) => {
    const [listaProductos, setListaProductos]=useState([])
    const [loading, setLoading]=useState(true)
    const { category } = useParams()


        useEffect(()=>{
            data
            .then((res) => {
                if (!category) {
                  setListaProductos(res)
                } else {
                  setListaProductos(res.filter((item) => item.category === category));
                }
              })
            .catch((error) =>console.log(error))
           .finally(()=>setLoading(false))
        }, [category])

        console.log(data)

    return (
        <div>
        <h3 className="greeting">{props.greeting}</h3>
        {loading ? <p>Cargando...</p> :<ItemList listaProductos={listaProductos}/>}
        
        </div>
        ) 
}

export default ItemListContainer;