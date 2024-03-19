import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'
import Logo from '../../Public/img/logoLogin.png'
export const Login = () => { 

const navigate = useNavigate();

const [formData,setFormData]=useState({
email:"",
password:""
}
)
const handleLogin=(e)=>{
  setFormData({...formData, [e.target.name]: e.target.value})
  
 }


const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post('https://cmicverback-production.up.railway.app/api/Login/login',formData);// Envía los datos al backend
     
     // Puedes redirigir al usuario a una página de éxito o hacer cualquier otra acción
     navigate('/Dashboard');
    }catch(e){
      console.error('Error:',e)
      
    }
  };

return (
    <div id="contenedor">
  <div id="contenedorcentrado">
    <div id="login">
      <form id="loginform" onSubmit={handleSubmit}>
        <label htmlFor="usuario">Usuario</label>
        <input id="usuario" type="text" name="email" placeholder="Usuario" value={formData.email} onChange={handleLogin} required />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" placeholder="Contraseña" name="password" value={formData.password} onChange={handleLogin} required />
        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
      </form>
    </div>
    <div id="derecho">
        <img src={Logo} alt="logo" className='imgLogo' />
      <div className="titulo">
        
        Bienvenido
      </div>
      <hr />
      <div className="pie-form">
        
        <hr />
        
      </div>
    </div>
  </div>
</div>

)

}