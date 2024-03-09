import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
    const stockDisponible = producto.stock > 0;

    const [cart, setCart] = useState(false)

    const { agregarCarrito } = useContext(CartContext)

    const onAdd = (count) => {

        setCart(true)

        agregarCarrito(producto, count)

    }

    return (
        <div className='CartDetail'>
            <div>
                <h2>{producto.nombre}</h2>
                <img src={producto.img} alt={producto.nombre} />
                <h3>{"Precio" + " " + producto.precio}</h3>
                <h3>{"Stock" + " " + producto.stock}</h3>
                <p className='descripDetail'>{producto.description}</p>
            </div>

            {stockDisponible ? (
                <>
                    {cart ? (
                        <Link to={'/cart'} className='irCarritoInicio'>
                            Ir al Carrito
                        </Link>
                    ) : (
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                    )}
                </>
            ) : (
                <h2>Sin Stock Disponible 😥</h2>
            )}




        </div>
    );
};

export default ItemDetail;