import './css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
      <div >
        <nav class="navbar">
          <a href="/">Inicio</a>
          <Link to={`/campeonatos/`}><a href="">Campeonatos</a></Link>
          <Link to={`/listas/`}><a href="/listas">Equipos</a></Link>
          <Link to={`/partidos/`}><a href="/partidos/">Partidos</a></Link>
        </nav>
      </div>

    </>
  )
}


export default Navbar
