import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    
    const onAdd = () => {
        console.log('lo agregaste al carrito mi rey')
    }
    
    return (
        <div>
        <h3 className="greeting">{props.greeting}</h3>
        <ItemCount initial={1} stock={15} onAdd={onAdd}/>
        </div>
        ) 
}

export default ItemListContainer;