import React, {useState} from 'react'
import './ItemCount.css';

const ItemCount = ({initial,stock,onAdd}) => {

    const [contador,setContador] = useState(1);

    const decrementar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const incrementar = () => {
        if(contador < stock){
            setContador(contador+1)
        }
    }

    const agregarCarrito = () => {
        onAdd(contador)
    }

  return (
    <div >
        
        <button className='Count1' onClick={decrementar}>-</button>
        <button className='Count1' onClick={agregarCarrito}>Agregar al Carrito</button>
        <button className='Count1' onClick={incrementar}>+</button>
        <p className='counInDetail'>{"Cantidad"+ " " +contador}</p>

        
    </div>
  )
}

export default ItemCount;