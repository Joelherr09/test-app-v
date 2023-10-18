import React from 'react'
import './css/CuadroCampeonatos.css'
import { Link } from 'react-router-dom'

function CuadroCampeonato(props) {
  return (
    <Link to={`/campeonatos/${props.id}`}  style={{ textDecoration: "none", color: "black" }}>
        <div className='CuadroCampeonato'>
            <h2>{props.title}</h2>
            <div className="BottomCamp">
                <div className='BottomCuadroReal'>
                <strong><p className='EstadoCamp'>{props.estado}</p></strong>
                <p>{props.premio}</p>
                <p>Fechas</p>
                <p>{props.ciudad}</p>
              </div>
              <div className='BottomCuadroCampeonato'>
                <p>Estado</p>
                <p>Premio</p>
                <p>Fechas</p>
                <p>Ciudad</p>
              </div>
            </div>

        </div>
    </Link>

  )
}

export default CuadroCampeonato