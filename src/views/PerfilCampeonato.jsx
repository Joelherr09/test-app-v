import React from 'react'
import './css/PerfilCampeonato.css'
import Navbar from '../components/Navbar'
import partidos from '../data/partidos'
import CuadroListaPartido from '../components/CuadroListaPartido';




function PerfilCampeonato({campeonato}) {

  

  function esPartidoDelCampeonato(partido) {
    return partido.campeonato === campeonato.siglas;
  }
  const partidosDelCampeonato = partidos.filter(esPartidoDelCampeonato);

  const partidosSiguientes = partidosDelCampeonato.filter((ps) =>{
    return (ps.estado === "proximo")
  })
  const partidosTerminados = partidosDelCampeonato.filter((pt) =>{
    return (pt.estado === "terminado")
  })

  const ListaPartidosCampeonatoSiguientes = partidosSiguientes.map((camp) => {
      return <CuadroListaPartido title={camp.equipo_1} description={camp.equipo_2} id={camp.id} hora={camp.hora} camp={camp.campeonato} resultadoUno={camp.resultado.equipo_1.sets} resultadoDos={camp.resultado.equipo_2.sets} />
    })
  const ListaPartidosCampeonatoTerminados = partidosTerminados.map((camp) => {
    return <CuadroListaPartido title={camp.equipo_1} description={camp.equipo_2} id={camp.id} hora={camp.hora} camp={camp.campeonato} resultadoUno={camp.resultado.equipo_1.sets} resultadoDos={camp.resultado.equipo_2.sets} />
  })

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
      <strong><p className='TituloHistorialEquipoVista'>Partidos Siguientes</p></strong>
      <div className='PartidosCampeonato'>
        {ListaPartidosCampeonatoSiguientes}
      </div>
      <strong><p className='TituloHistorialEquipoVista'>Partidos Terminados</p></strong>
      <div className='PartidosCampeonato'>
        {ListaPartidosCampeonatoTerminados}
      </div>
    </div>

  )
}

export default PerfilCampeonato