import React from 'react'
import './css/Listas.css'
import equipos from '../data/equipos'
import EquipoListaRectangulo from '../components/EquipoListaRectangulo'



function Listas() {
    const ListaEquipos = equipos.map((e) => {
        return <EquipoListaRectangulo title={e.name} description={e.ciudad} id={e.id}/>
    })


  return (
    <div className='ListasCuerpo'>
        <h2 className='TituloListas'>Lista de Equipos</h2>
        <hr />
        <div className="ListaEquipos">
            {ListaEquipos}
        </div>
    </div>
  )
}

export default Listas