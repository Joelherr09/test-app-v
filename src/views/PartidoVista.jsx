import React from 'react'
import './css/PartidoVista.css'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar'

function PartidoVista({partido}) {
  return (
    <div>
        <Navbar/>
        
        <div className='PartidoVistaCuerpo'>
            
            <div className="TitulosPartidoCuadroVista">
              <div className="InfoCampeonatoPartido">
                <p>Liga de Educación Superior</p>
                <p>Lugar: {partido.lugar}</p>
              </div>
              <div className="FechaInfoPartido">
                <p>{partido.fecha}</p>
                <p>{partido.hora}</p>
              </div>
            </div>
            <hr /> 
            <div className="VersusPartidoVista">
              <div className="EquipoUno">
                <p>{partido.equipo_1} </p>
                <p>{partido.resultado.equipo_1.sets}</p>
              </div>
              <p>VS</p>
              <div className="EquipoDos">
                <p>{partido.resultado.equipo_2.sets} </p>
                <p>{partido.equipo_2}</p>
              </div>
            </div>
        </div>
        <div className='PartidoVistaCuerpoDos'>
          <div className='BotonesPartidoVista'>
            <p>Todo</p>
            <p>Set 1</p>
            <p>Set 2</p>
            <p>Set 3</p>
          </div>
          <hr />
          <div className="InfoPartidoVista">
            <div className="SetsEquiposPartidoVista">
              <div className="SetsEquipoUno">
                <p className='NumeroSetPartidoVista'>{partido.resultado.equipo_1.sets}</p>
                <p>{partido.equipo_1}</p>
              </div>
              <div className="SetsEquipoDos">
              <p>{partido.equipo_2}</p>
              <p className='NumeroSetPartidoVista'>{partido.resultado.equipo_2.sets}</p>
              </div>
            </div>
          </div>




        </div>

    </div>
  )
}

export default PartidoVista