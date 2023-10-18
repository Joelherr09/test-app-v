import './css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
      <div >
        <nav class="navbar">
          <a href="/">Inicio</a>
          <a href="/campeonatos">Campeonatos</a>

          <a href="/listas">Equipos</a>
          <a href="/partidos/">Partidos</a>
        </nav>
      </div>

    </>
  )
}


export default Navbar
