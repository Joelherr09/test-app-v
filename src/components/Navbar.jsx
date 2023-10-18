import './css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
      <div >
        <div class="navbar">
        
          <Link to={`/`} style={{color: "white", fontSize: "1rem", width: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}><p >Inicio</p></Link>
          <Link to={`/campeonatos/`} style={{color: "white", fontSize: "1rem", width: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}><p>Campeonatos</p></Link>
          <Link to={`/listas/`} style={{color: "white", fontSize: "1rem", width: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}><p>Equipos</p></Link>
          <Link to={`/partidos/`} style={{color: "white", fontSize: "1rem", width: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}><p>Partidos</p></Link>
        </div>
      </div>

    </>
  )
}


export default Navbar
