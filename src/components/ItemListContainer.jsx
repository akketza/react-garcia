import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import {useParams} from'react-router-dom'
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore"

const ItemListContainer = (props) => {
    const [listaProductos, setListaProductos]=useState([])
    const [loading, setLoading]=useState(true)
    const { category } = useParams()


        useEffect(()=>{
          const db = getFirestore()

          const productsCollection = collection(db, 'items')
          if(category){
            const q = query(productsCollection, where('category', '==', category))
            
            getDocs(q)
            .then((snapshot) => {
              setListaProductos(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
            }).catch((error) => {console.log(error)})
            .finally(() => {
              setLoading(false)
            })
          } else{
            getDocs(productsCollection)
            .then((snapshot) => {
              setListaProductos(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
            }).catch((error) => {console.log(error)})
            .finally(() => {
              setLoading(false)
            })
          }
        }, [category])


    return (
        <div>
        <h3 className="greeting">{props.greeting}</h3>
        {loading ? <p>Cargando...</p> :<ItemList listaProductos={listaProductos}/>}
        
        </div>
        ) 
}

export default ItemListContainer;