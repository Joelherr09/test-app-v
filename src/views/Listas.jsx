import React from 'react'
import './css/Listas.css'
import equipos from '../data/equipos'
import EquipoListaRectangulo from '../components/EquipoListaRectangulo'



function Listas() {

  const ListaEquiposClub = equipos.filter((e) =>{
    return e.tipo === "club";
  })
  const ListaEquiposUniversitario = equipos.filter((e) =>{
    return e.tipo === "universidad";
  })


  const ListaEquiposClubes = ListaEquiposClub.map((e) => {
      return <EquipoListaRectangulo title={e.name} description={e.ciudad} id={e.id}/>
  })
  const ListaEquiposUniversitarios = ListaEquiposUniversitario.map((e) => {
      return <EquipoListaRectangulo title={e.name} description={e.ciudad} id={e.id}/>
  })




  return (
    <div className='ListasCuerpo'>
        <h2 className='TituloListas'>Lista de Equipos</h2>
        <hr />
        <div className="ListaEquipos">
          <strong><p className='TituloHistorialEquipoVista'>Clubes</p></strong>
            {ListaEquiposClubes}
            <strong><p className='TituloHistorialEquipoVista'>Selecciones Universitarias</p></strong>
            {ListaEquiposUniversitarios}
        </div>
    </div>
  )
}

export default Listas