import React from 'react'
import './css/Login.css'

function Login() {
  return (
    <div className='cuerpo-form-registro'>
      <div class="testbox-login">
        <h1 className='registro-h1'>Entrar</h1>

        <form action="/">
          <hr />
          <label id="icon" for="name"><i class="icon-envelope "></i></label>
          <input type="text" name="name" id="name" placeholder="Email" required />
          <label id="icon" for="name"><i class="icon-shield"></i></label>
          <input type="password" name="name" id="name" placeholder="Password" required />
          <hr />
          <div className="btn-entrar">
            <a href="#" class="button-entrar">Entrar</a>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login