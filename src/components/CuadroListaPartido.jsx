import React from 'react'
import './css/CuadroListaPartido.css'
import { Link } from 'react-router-dom'

function CuadroListaPartido(props) {
  return (
    <Link to={`/partidos/${props.id}`}  style={{ textDecoration: "none", color: "black" }}>
        <div className='CuadroListaPartido'>
            <div className="FechaHoraPartido">
              <p className='HoraListaPartidos'>{props.hora}</p>
              <p className='FechaListaPartidos'>{props.fecha}</p>
            </div>
            <div className="EquiposContraLista">
              <div className="EquipoUnoLista">
                <h2>{props.title}</h2>
                <p>{props.resultadoUno}</p>
              </div>
              <div className="EquipoDosLista">
                <h2>{props.description}</h2>
                <p>{props.resultadoDos}</p>
              </div>
            </div>
            <div className="TorneoList">
              <h2>{props.camp}</h2>
            </div>
        </div>
    </Link>

  )
}

export default CuadroListaPartido