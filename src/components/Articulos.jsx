import React, { useState, useEffect } from 'react'
import './css/Articulos.css'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function Articulos() {
    const [articulos, setArticulos] = useState([]);
    useEffect(()=>{
      const articuloRef = collection(db, "Articulos");
      const q = query(articuloRef, orderBy("creadoEn", "desc"));
      onSnapshot(q, (snapshot) => {
        const articulos = snapshot.docs.map((doc) =>({
          id: doc.id, 
          ...doc.data()
        }));
        setArticulos(articulos);
        console.log(articulos);
      })
    },[]);
  return (
    <div>
      {articulos.length === 0 ?(
        <p>No hay ningun blog</p>
      ) : (
        articulos.map(({id, titulo, descripcion, ImageUrl, creadoEn}) => (
          <div className='ArticuloComp'>
            <div className="foto-articulo">
              <img src={ImageUrl} alt="titulo" style={{height:100,width:100}}/>
            </div>
            <div className="datos-artiuclo">
              <h3>{titulo}</h3>
              <h4>{creadoEn.toDate().toDateString()}</h4>
              <p>{descripcion}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Articulos