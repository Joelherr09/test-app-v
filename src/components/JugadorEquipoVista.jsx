import React from 'react'
import './css/JugadorEquipoVista.css'

function JugadorEquipoVista(props) {
  return (
    <div className='JugadorEquipoVistaComp'>
        <div className="FotoPerfilJugador">

        </div>
        <div className="NombreJugador">
            <p>{props.nombre}</p>
            <p>ROL</p>
        </div>
    </div>
  )
}

export default JugadorEquipoVista