import React from 'react';
import {Banner}  from '../Banner/Banner.jsx';
import {Footer}  from '../Footer/Footer.jsx';
import './RegistroExitoso.css'


const RegistroExitoso = () => {
  return (
    <div className='container-Registro'>
<Banner />
      <div className='descrip-Registro'>
        <h2>Gracias por tu Registro.</h2>

<p>La Cámara Mexicana de la Industria de la Construcción Agradece tu Registro al 2do, Torneo de Golf.</p>

<p>Vía correo electrónico le llegaran los datos bancarios y el proceso a seguir para el pago de su registro.</p>
      </div>
        

      <Footer />
    </div>
    
  );
};

export default RegistroExitoso;