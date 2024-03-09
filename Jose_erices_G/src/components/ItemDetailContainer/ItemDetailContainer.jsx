import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDeteail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, doc,getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const [producto,setProducto] = useState([]);

  const {id} = useParams()

    useEffect(()=>{
        
      //INICIALIZAMOS LA INSTANCIA DE LA BD
      const db = getFirestore()

      //GENERAMOS EL LLAMADO AL DOCUMENTO DETERMINADO
      const nuevoDoc = doc(db,"Item1",id)

      //HACEMOS EL LLAMADO AL DOCUMENTO Y LO RENDERIZAMOS EN PANTALLA
      getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevoProducto = {id: res.id,...data}
        setProducto(nuevoProducto)
      })
      .catch(error => console.log(error))
  },[])
    
  return (

    
    <div>
      
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer






