import './css/EquipoListaRectangulo.css'
import { Link } from 'react-router-dom'

function EquipoListaRectangulo(props) {

  return (
    <>
      <div className='CuerpoListaEquipos'>
        <Link to={props.title} style={{ textDecoration: "none", color: "black", display: "flex" }}>
        <p>{props.id}</p>
        <div className='InfoLista'>
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
        </Link>
      </div>

    </>
  )
}


export default EquipoListaRectangulo 