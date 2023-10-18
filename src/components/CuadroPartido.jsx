import { Link, useParams } from 'react-router-dom'
import './css/CuadroPartido.css'



// Putas comillas!! Muy importante <Link to={`/partidos/${props.id}`}>
function CuadroPartido(props) {

  return (
    <>
      <Link to={`/partidos/${props.id}`}  style={{ textDecoration: "none", color: "black" }}>
      <div class="CuadroPartido">
        <h4>{props.campeonato}</h4>
        <div class="equipo">
            <p>{props.title}</p>
            <p>{props.resultado.equipo_1.sets}</p>
        </div>
        <div class="equipo">
            <p>{props.description}</p>
            <p>{props.resultado.equipo_1.sets}</p>
        </div>
      <hr />
        <div class="equipo-footer">
            <p>{props.fecha}</p>
            <p>{props.hora}</p>
        </div>
      </div></Link>

    </>
  )
}


export default CuadroPartido