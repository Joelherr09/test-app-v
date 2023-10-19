import React from 'react'
import './css/PerfilEquipo.css'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar'
import partidos from '../data/partidos'
import CuadroListaPartido from '../components/CuadroListaPartido'
import JugadorEquipoVista from '../components/JugadorEquipoVista'
import { Link } from 'react-router-dom'

function PerfilEquipo({ equipo }) {


  const partidosEquipo = partidos.filter((p) => {
    return (p.equipo_1 === equipo.name || p.equipo_2 === equipo.name);
  })
  const partidosEquipoSiguiente = partidosEquipo.filter((p) => {
    return (p.estado === "proximo")
  })
  const ListaPartidosSiguiente = partidosEquipoSiguiente.map((p) => {
    return <CuadroListaPartido title={p.equipo_1} description={p.equipo_2} id={p.id} hora={p.hora} fecha={p.fecha} camp={p.campeonato} resultadoUno={p.resultado.equipo_1.sets} resultadoDos={p.resultado.equipo_2.sets} />
  })
  const partidosEquipoTerminados = partidosEquipo.filter((p) => {
    return (p.estado === "terminado")
  })
  const ListaPartidosTerminados = partidosEquipoTerminados.map((p) => {
    return <CuadroListaPartido title={p.equipo_1} description={p.equipo_2} id={p.id} hora={p.hora} fecha={p.fecha} camp={p.campeonato} resultadoUno={p.resultado.equipo_1.sets} resultadoDos={p.resultado.equipo_2.sets} />
  })
  


  return (
    <div className='CuerpoPerfilEquipo'>
      <Navbar />
      <div className="ContainerTopEquipo">
        <div className="FotoPerfilEquipo">
        </div>
        <div className="InfoPerfilEquipo">
          <strong><p>{equipo.name}</p></strong>
          <Link to={equipo.instagram} style={{ textDecoration: "none", color: "blue" }}><p>Instagram</p></Link>
          <p>{equipo.ciudad}</p>
        </div>
      </div>
      <strong><p className='TituloHistorialEquipoVista'>Partidos Siguientes</p></strong>
      <div className="UltimosPartidosEquipoVista">
        {ListaPartidosSiguiente}
      </div>
      <strong><p className='TituloHistorialEquipoVista'>Partidos Terminados</p></strong>
      <div className="UltimosPartidosEquipoVista">
        {ListaPartidosTerminados}
      </div>
      <strong><p className='TituloHistorialEquipoVista'>Jugadores</p></strong>
      <div className="JugadoresEquipoVista">
        <div className='JugadorEquipoVistaComp'>
          <div className="FotoPerfilJugador">

          </div>
          <div className="NombreJugador">
              <p>{equipo.jugadores.jugador_1.nombre}</p>
              <p>ROL</p>
          </div>
        </div>
        <div className='JugadorEquipoVistaComp'>
          <div className="FotoPerfilJugador">

          </div>
          <div className="NombreJugador">
              <p>{equipo.jugadores.jugador_2.nombre}</p>
              <p>ROL</p>
          </div>
        </div>
        <div className='JugadorEquipoVistaComp'>
          <div className="FotoPerfilJugador">

          </div>
          <div className="NombreJugador">
              <p>{equipo.jugadores.jugador_3.nombre}</p>
              <p>ROL</p>
          </div>
        </div>
        <div className='JugadorEquipoVistaComp'>
          <div className="FotoPerfilJugador">

          </div>
          <div className="NombreJugador">
              <p>{equipo.jugadores.jugador_4.nombre}</p>
              <p>ROL</p>
          </div>
        </div>
        <div className='JugadorEquipoVistaComp'>
          <div className="FotoPerfilJugador">

          </div>
          <div className="NombreJugador">
              <p>{equipo.jugadores.jugador_5.nombre}</p>
              <p>ROL</p>
          </div>
        </div>
        <div className='JugadorEquipoVistaComp'>
          <div className="FotoPerfilJugador">

          </div>
          <div className="NombreJugador">
              <p>{equipo.jugadores.jugador_6.nombre}</p>
              <p>ROL</p>
          </div>
        </div>
        
        <div className='JugadorEquipoVistaComp'>
          <div className="FotoPerfilJugador">

          </div>
          <div className="NombreJugador">
              <p>{equipo.entrenadores.entrenador1}</p>
              <p>Entrenador</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilEquipo