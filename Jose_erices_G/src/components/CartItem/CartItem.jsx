import React from 'react';
import './CartItem.css'
import ComponenteFuncional from '../ComponenteFuncional/ComponenteFuncional';



const CartItem = ({producto,eliminarItem}) => {

    return (
        <div className='CartContainer'>
            <h3>{producto.producto.nombre}</h3>

            <img className='imgItem' src={producto.producto.img} alt={producto.producto.nombre}/>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Valor Unidad: ${producto.producto.precio*producto.cantidad}</p>
            <button className='eliminarP' onClick={()=> eliminarItem(producto.producto.id)}>Eliminar Producto</button>
          

            
            

        </div>
    );
};

export default CartItem;