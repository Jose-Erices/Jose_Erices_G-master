import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import './itemList.css'
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore,query,where} from 'firebase/firestore'




const ItemListContainer = () => {

    const [productos,setProductos] = useState([]);

    const {categoryId} = useParams()

    useEffect(()=>{
        
const db = getFirestore()

const misProd =  categoryId?

query(collection(db,"Item1"),where("categoria","==", categoryId))

:
collection(db, "Item1")



getDocs(misProd)
.then((res)=>{
    const nuevosProductos = res.docs.map((doc) => {
        const data = doc.data ()
        return {id: doc.id,...data}
    })
    setProductos(nuevosProductos)
})
.catch((error)=> console.log(error))
 },[categoryId])


  return (
    <div className='itemcontainer'>

        {productos.length == 0 ? (<h1>CARGANDO..</h1>) : (<ItemList productos={productos}/>)}

    </div>
  )

}

export default ItemListContainer