import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart]= useState([])

    const addCart = (item) => {
        const itemInCart = cart.find((prod)=> prod.id === item.id)
        if(itemInCart){
            const updatedCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(updatedCart)
        }else{
            setCart([...cart, item])
        }
       
    }

    const inCart = (id) => {
        return cart.come((prod) => prod.id === id) 
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity,0)
    }
    const cartPriceTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addCart, inCart, emptyCart, removeItem, cartQuantity, cartPriceTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)