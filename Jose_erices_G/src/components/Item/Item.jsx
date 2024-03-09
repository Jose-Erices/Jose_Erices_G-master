import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'



const Item = ({producto}) => {



  return (

    <Link className='CartDetail' to={`/detalle/${producto.id}`}>

      <div 
           className='container' key={producto.id} >
          <h3 className='titulo3'> {producto.nombre}</h3>
          <img className='itemImg' src={producto.img} alt={producto.nombre} />
      </div> 
      

    </Link>
    
  )
}

export default Item;