import React from 'react'
import './css/ListaPartidos.css'
import partidos from '../data/partidos'
import CuadroListaPartido from '../components/CuadroListaPartido'

function ListaPartidos() {
    const ListaPartidos = partidos.map((p) => {
        return <CuadroListaPartido title={p.equipo_1} description={p.equipo_2} id={p.id} hora={p.hora} camp={p.campeonato} resultadoUno={p.resultado.equipo_1.sets} resultadoDos={p.resultado.equipo_2.sets} />
    })

  return (
    <div className='ListasCuerpo'>
        <h2 className='TituloListas'>Lista de Partidos</h2>
        <hr />
        <div className="ListaEquipos">
            {ListaPartidos}
        </div>
    </div>
  )
}

export default ListaPartidos