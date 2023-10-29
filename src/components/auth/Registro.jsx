import React from 'react'
import './css/Registro.css'

function Registro() {
    return (
        <div className='cuerpo-form-registro'>
            <div class="testbox">
                <h1 className='registro-h1'>Registro</h1>
                
                <form action="/">
                    <hr />
                    <label id="icon" for="name"><i class="icon-envelope "></i></label>
                    <input type="text" name="name" id="name" placeholder="Email" required />
                    <label id="icon" for="name"><i class="icon-user"></i></label>
                    <input type="text" name="name" id="name" placeholder="Name" required />
                    <label id="icon" for="name"><i class="icon-shield"></i></label>
                    <input type="password" name="name" id="name" placeholder="Password" required />
                    <hr />
                    <p className='aceptar-term'>By clicking Register, you agree on our <a href="#">terms and condition</a>.</p>
            
                    <a href="#" class="button">Register</a>
                </form>
            </div>
        </div>
    )
}

export default Registro