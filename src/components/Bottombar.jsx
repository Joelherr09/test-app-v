import './css/Bottombar.css'
import { Link } from 'react-router-dom'


// Hay que hacer que dependiendo de si el usuario
// no está registrado muestre el BOTTOMBAR con el 
// botón para registrarse.

// Y si está registrado muestre otra.
// Hay que hacer la otra y pensar qué botones llevaría

// Hacer componente para BottombarNoAuth y BottombarAuth
// y renderizar dependiendo del auth del usuario
// Ambas deben ser un nav.

function Bottombar() {

  return (
    <>
      <div >
        <nav class="bottombar">

          <div className="NoTienesCuenta">
            <p className='NoCuenta'> <strong>No tienes cuenta?</strong></p>
            <p className='OlvidasteTuCuenta'>Olvidaste tu cuenta?</p>
          </div>
          <div className="BotonesAuth">
            <Link to={`/registro/`}  style={{ textDecoration: "none", color: "black" }}>
              <button className='btn-registrarse'><strong>Regístrate</strong></button>
            </Link>
            
            <br />
            <Link to={`/login/`}  style={{ textDecoration: "none", color: "black" }}>
              <button className='btn-entrar'>Entra</button>
            </Link>
            
          </div>

        </nav>
      </div>

    </>
  )
}


export default Bottombar