import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cartwidget.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cantidadCarrito } = useContext(CartContext);

    return (
        <div>
            <Link to={"/cart"}>
                <img className="carrito" src="./public/CartIcon.png" alt="Carrito" />
            </Link>

            <p id="pCarro">{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
        </div>
    );
};

export default CartWidget;
