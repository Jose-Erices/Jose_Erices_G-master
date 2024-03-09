import React, { useContext, useState } from "react";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    getDoc,
    getFirestore,
} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
    //INFORMACIÓN DEL CONTEXT
    const { cart, totalCarrito, cantidadCarrito, vaciarCarrito } =
        useContext(CartContext);

    //DATOS DEL COMPONENT
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    //SUBMIT
    const manejadorFormulario = (event) => {
        //EVITAMOS QUE SE EJECUTE EL EVENTO POR DEFECTO DEL SUBMIT
        event.preventDefault();

        //ALGUNOS MANEJOS DE ERRORES
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Favor completar los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        //CREAMOS LA INSTANCIA DE LA BD
        const db = getFirestore();

        //GENERAMOS EL OBJETO DE LA ORDEN DE COMPRA
        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad,
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        //GENERAMOS LA LÓGICA PARA LA ÓRDEN Y REDUCCIÓN DEL STOCK
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "Item1", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setError("");
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log(error);
                        setError("Error al crear la orden");
                    });
            })
            .catch((error) => {
                console.log(error);
                setError("Debes iniciar Firebase");
            });
    };

    return (
        <div>
            <Link className="Inicio" to={"/"}>
                {" "}
                🏠Volver al inicio
            </Link>
            <h3 className="total">Formulario de Compra</h3>

            <form onSubmit={manejadorFormulario}>
                {/* MAPEO DE PRODUCTOS */}
                {cart.map((producto) => (
                    <div key={producto.producto.id}>
                        <p>
                            {""}
                            {producto.producto.nombre} x {producto.cantidad}
                        </p>
                        <hr />
                    </div>
                ))}

                {/* CAMPOS DEL FORMULARIO */}

                <div className="CheckOutCont">
                    <div>
                        <label htmlFor="Nombre">Nombre</label>
                        <input
                            className="inputF"
                            name="Nombre"
                            type="text"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="Apellido">Apellido</label>
                        <input
                            className="inputF"
                            name="Apellido"
                            type="text"
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="Nombre">Teléfono</label>
                        <input
                            className="inputF"
                            name="Teléfono"
                            type="text"
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="Email">Email</label>
                        <input
                            className="inputF"
                            name="Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="EmailConfirmacion">Email Confirmacion</label>
                        <input
                            className="inputF"
                            name="EmailConfirmacion"
                            type="email"
                            onChange={(e) => setEmailConfirmacion(e.target.value)}
                        />
                    </div>

                    <button className="comprar" type="submit">
                        Completar compra
                    </button>
                    <a
                        href="https://wa.me/+56938614835"
                        target="_blank"
                        className="whatsapp-link"
                    >
                        Si deseas puedes contactar directo al vendedor vía WhatsApp
                    </a>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    {ordenId && (
                        <strong className="graciasCheckout">
                            <br />
                            ¡Gracias por tu compra 😊! <br /> <br />
                            Tu número de orden es: {ordenId} <br /> <br />
                        </strong>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Checkout;
