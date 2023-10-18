import React from 'react'
import './css/ListaCampeonatos.css'
import campeonatos from '../data/campeonatos'
import CuadroCampeonato from '../components/CuadroCampeonato'

function ListasCampeonatos() {
    const ListaCampeonatos = campeonatos.map((c) => {
        return <CuadroCampeonato title={c.nombre} id={c.id} estado={c.estado} premio={c.premio} ciudad={c.ciudad} />
    })


  return (
    <div className='ListasCuerpoCampeonatos'>
        <h2 className='TituloListasCampeonatos'>Lista de Campeonatos</h2>
        <hr />
        <div className="ListaCampeonatos">
            {ListaCampeonatos}
        </div>
    </div>
  )
}

export default ListasCampeonatos