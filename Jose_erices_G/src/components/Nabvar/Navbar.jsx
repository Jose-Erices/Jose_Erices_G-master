import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (

    <nav>
      <Link className="Logo" to={"/"}>
        <h1>El Castillo de tu mascota</h1>
      </Link>

      <ul>
        <li>
          <NavLink className="listado" to={"/"}>Inicio</NavLink>
        </li>
        <li>
          <NavLink className="listado" to={"categoria/Perro"}>Perro</NavLink>
        </li>
        <li>
          <NavLink className="listado" to={"categoria/Gato"}>Gato</NavLink>
        </li>
        <li>
          <NavLink className="listado" to={"categoria/Accesorios"}>Accesorios</NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
