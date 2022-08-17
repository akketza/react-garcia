import React from 'react'
import { useEffect, useState } from 'react'
import {collection, DocumentSnapshot, getDocs, getFirestore} from 'firebase/firestore'
import {Link} from 'react-router-dom'

const Categories = () => {
   const [categories, setCategories] = useState([])

    useEffect(() =>{
        const db = getFirestore()

        const categoriesCollection = collection(db, 'categories')
        getDocs(categoriesCollection)
        .then((snapshot) =>{
            setCategories(snapshot.docs.map((doc) => doc.data().name))
        })
        .catch((error) => {console.log(error)})

    }, [])

    return(
        <>
        {
            categories.map((el) => {
        <li className="nav-item" key={el}>
            <Link to={'/category/' + el} className='nav-link'>
          
           {el.charAt(0).toUpperCase() + el.slice(1)}
          
          </Link>
        </li>
            })
        }
        </>
    )

  
}

export default Categories