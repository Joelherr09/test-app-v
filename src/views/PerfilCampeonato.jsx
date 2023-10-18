import React from 'react'
import './css/PerfilCampeonato.css'
import Navbar from '../components/Navbar'

function PerfilCampeonato({campeonato}) {
  return (
    <div className='CuerpoPerfilCampeonato'>
    <Navbar/>
    <div className="ContainerTopCampeonato">
        <div className="FotoPerfilCampeonato">
        </div>
        <div className="InfoPerfilCampeonato">
          <strong><p className='NombreCampVista'>{campeonato.nombre}</p></strong>
          <div className="InfoCampVista">
            <div className="FechasCampVista">
              <p>Estado</p>
              <p>{campeonato.estado}</p>
            </div>
            <div className="PremioCampVista">
              <p>Premio</p>
              <p>{campeonato.premio}</p>
            </div>
            <div className="LugarCampVista">
              <p>Lugar</p>
              <p>{campeonato.ciudad}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PerfilCampeonato