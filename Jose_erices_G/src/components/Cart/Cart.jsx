import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = () => {

    const { cart, vaciarCarrito, eliminarItem, totalCarrito, } = useContext(CartContext)

    return (
        <div >
            <Link className='Inicio' to={"/"}  > 🏠Volver al inicio</Link>
            {cart.length == 0
                ?
                <>
                    <h2 className='total'>Aún no has seleccionado Productos. </h2>
                    <Link className='irCarritoInicioCart' to={"/"}>Volver atras</Link>
                </>

                :

                <>

                    <h2 className='tituloCarItem'>Carrito de Compras</h2>

                    {cart.map((p) => (
                        <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem} />
                    ))}

                    <p className='total'>Total: ${totalCarrito()}</p>

                    <button className='vaciar' onClick={vaciarCarrito}>Vaciar Carro</button>
                    {/* <Link className='comprar' to={"/ComponenteFuncional"}>Comprar Productos </Link> */}


                    <Link className='comprar' to={"/Checkout"}>Comprar</Link>

                </>



            }
        </div>
    );
};

export default Cart;