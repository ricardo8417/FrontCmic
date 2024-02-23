import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'


import './EventForm.css'
const EventForm = () => {
const [mostrarFormulario, setMostrarFormulario] = useState(false);
const [camposAdicionales, setCamposAdicionales] = useState({
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
     campo5: '',
      campo6: '',
    // Agrega más campos según sea necesario
  });


// const handleChange = (e) => {
//     setMostrarFormulario(e.target.value === 'Si');
    
//   };

  
const [mostrarFormDelegacion, setMostrarFormDelegacion] = useState(false);

  const handleChangeDeleg = (e) => {
    setMostrarFormDelegacion(e.target.value === 'Si');
  };

  

const [mostrarFormAfi, setMostrarFormAfi] = useState(false);
const [camposAfi, setCamposAfi] = useState({
    campo1: '',
    
    // Agrega más campos según sea necesario
  });

   const handleChangeAfi = (e) => {
    setMostrarFormAfi(e.target.value === 'No');
  };
const handleCampoChangeAfi = (e) => {
    setCamposAfi({
      ...camposAdicionales,
      [e.target.name]: e.target.value,
    });
  };

  

const [formData,setFormData]=useState({
name_complete:'',
email:'',
tel_oficina:'',
num_cel:'',
nom_emp:'',
afil_cmic:'',
del_cmic:'',
int_afil:'',
handicap:'',
talla:'',
factura:'',
razon_social:'',
rfc_fact:'',
dom_fact:'',
cfdi_fact:'',
regFiscal_fact:'',
email_fact:''
})

  


 const handleRegistro=(e)=>{
  setFormData({...formData, [e.target.name]: e.target.value})
 }
 

  const handleSubmit= async (e) =>{
    e.preventDefault();
    console.log('aqui estoy')
    try{
      await axios.post('backcmicver-production.up.railway.app/api/registro/Registro',formData);// Envía los datos al backend
     alert('Registro Enviado correctamente')
     // Puedes redirigir al usuario a una página de éxito o hacer cualquier otra acción
    window.location.href= '/registroExitoso';

    }catch(e){
      console.error('Error:',e)
    }
  }
  return (

      <Form className='FormRegistro' onSubmit={handleSubmit}>
                
      <Form.Group  className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre Completo:</Form.Label>
        <Form.Control type="text" placeholder="Escribe el Nombre completo:" name='name_complete' value={formData.name_complete} onChange={handleRegistro} required/>
     
      </Form.Group>
      <Form.Group  className="mb-3" controlId="formBasicNombre">
        <Form.Label>Correo Electrónico:</Form.Label>
        <Form.Control type="text" placeholder="email:" name='email' value={formData.email}  onChange={handleRegistro} required/>
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTelOfi">
        <Form.Label> Número de Teléfono Oficina:</Form.Label>
        <Form.Control type="text" placeholder="Teléfono Oficina" name='tel_oficina' value={formData.tel_oficina}  onChange={handleRegistro} />
      </Form.Group>
<Form.Group className="mb-3" controlId="formBasicCel">
        <Form.Label> Número de Celular:</Form.Label>
        <Form.Control type="text" placeholder="Número de Celular" name='num_cel' value={formData.num_cel}  onChange={handleRegistro} required/>
      </Form.Group>

<Form.Group className="mb-3" controlId="formBasicRazon">
        <Form.Label> Razón Social:</Form.Label>
        <Form.Control type="text" placeholder="Razón Social" name='nom_emp' value={formData.nom_emp}  onChange={handleRegistro} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Es Afiliado CMIC:</Form.Label>
        <Form.Check type="radio" label="Si" name="afil_cmic"  value="Si"  onChange={(e) => {
              handleChangeDeleg(e);
              handleChangeAfi(e);
              handleRegistro(e)
            }} required/>
        <Form.Check type="radio" label="No" name="afil_cmic"  value="No"  onChange={(e) => {
              handleChangeDeleg(e);
              handleChangeAfi(e);
              handleRegistro(e)
            }} required/>
      </Form.Group>
      

 
  {mostrarFormDelegacion && (

  
  <Form.Select aria-label="Default select example" name='del_cmic' value={formData.del_cmic} onChange={handleRegistro} required >
  
      <option>Elige la Delegación CMIC</option>
      <option value="AGUASCALIENTES">AGUASCALIENTES</option>
      <option value="BAJA CALIFORNIA">BAJA CALIFORNIA</option>
      <option value="BAJA CALIFORNIA SUR">BAJA CALIFORNIA SUR</option>
      <option value="CAMPECHE">CAMPECHE</option>
      <option value="CIUDAD DEL CARMEN">CIUDAD DEL CARMEN</option>
      <option value="CIUDAD JUAREZ">CIUDAD JUAREZ</option>
      <option value="CIUDAD DE MEXICO">CIUDAD DE MEXICO</option>
      <option value="CIUDAD VICTORIA">CIUDAD VICTORIA</option>
      <option value="CHIAPAS">CHIAPAS</option>
      <option value="CHIHUAHUA">CHIHUAHUA</option>
      <option value="COAHUILA CENTRO NORTE">COAHUILA CENTRO NORTE</option>
      <option value="COAHUILA SURESTE">COAHUILA SURESTE</option>
       <option value="COLIMA">COLIMA</option>
      <option value="COMARCA LAGUNERA">COMARCA LAGUNERA</option>
      <option value="DURANGO">DURANGO</option>
      <option value="ESTADO DE MEXICO">ESTADO DE MEXICO</option>
      <option value="GUANAJUATO">GUANAJUATO</option>
      <option value="GUERRERO">GUERRERO</option>
      <option value="AGUASCALIENTES">AGUASCALIENTES</option>
      <option value="HIDALGO">HIDALGO</option>
      <option value="JALISCO">JALISCO</option>
      <option value="LAZARO CARDENAS">LAZARO CARDENAS</option>
      <option value="MICHOACAN">MICHOACAN</option>
      <option value="MORELOS">MORELOS</option>
       <option value="NAYARIT">NAYARIT</option>
      <option value="NUEVO LEON">NUEVO LEON</option>
      <option value="OAXACA">OAXACA</option>
      <option value="PUEBLA">PUEBLA</option>
      <option value="QUERETARO">QUERETARO</option>
      <option value="QUINTANA ROO">QUINTANA ROO</option>
      <option value="SAN LUIS POTOSI">SAN LUIS POTOSI</option>
      <option value="SINALOA CENTRO">SINALOA CENTRO</option>
      <option value="SINALOA NORTE">SINALOA NORTE</option>
      <option value="SINALOA SUR">SINALOA SUR</option>
      <option value="SONORA">SONORA</option>
      <option value="TABASCO">TABASCO</option>
      <option value="TAMAULIPAS<">TAMAULIPAS</option>
      <option value="TLAXCALA">TLAXCALA</option>
      <option value="VERACRUZ CENTRO">VERACRUZ CENTRO</option>
      <option value="VERACRUZ NORTE">VERACRUZ NORTE</option>
      <option value="VERACRUZ PUERTO">VERACRUZ PUERTO</option>
      <option value="VERACRUZ SUR">VERACRUZ SUR</option>
      <option value="YUCATAN">YUCATAN</option>
      <option value="ZACATECAS">ZACATECAS</option>
         
    </Form.Select>
 )}

     {mostrarFormAfi && (
<Form.Group  className="mb-3" controlId="formBasicCheckbox">
  
        <Form.Label value={camposAfi.campo1} onChange={handleCampoChangeAfi}>Le interesaría Afiliarse a CMIC:</Form.Label>
        <Form.Check type="radio" label="Si" name="int_afil" value="Si"  onChange={handleRegistro} required/>
        <Form.Check type="radio" label="No" name="int_afil" value="No"  onChange={handleRegistro} required/>
       
      </Form.Group>
)}


      <Form.Group  className="mb-3" controlId="formBasicHandicap">
        <Form.Label> Handicap:</Form.Label>
        <Form.Control type="text" placeholder="Handicap" name='handicap'  onChange={handleRegistro} required/>
      </Form.Group>

<Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Talla de Playera:</Form.Label>
        <Form.Check type="radio" label="S" name="talla" value="S" onChange={handleRegistro} required/>
        <Form.Check type="radio" label="M" name="talla"  value="M" onChange={handleRegistro} required/>
        <Form.Check type="radio" label="G" name="talla"  value="G" onChange={handleRegistro} required/>
        <Form.Check type="radio" label="EG" name="talla" value="EG" onChange={handleRegistro} required/>
        <Form.Check type="radio" label="EEG" name="talla" value="EEG" onChange={handleRegistro} required/>
      </Form.Group>

<Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Requiere Factura:</Form.Label>
        <Form.Check type="radio" label="Si" name="factura" value="Si"  onChange={handleRegistro} required/>
        <Form.Check type="radio" label="No" name="factura" value="No" onChange={handleRegistro} required/>
        
      </Form.Group>

{mostrarFormulario && (
  <>
         <Form.Group  className="mb-3" controlId="formBasicEmpresa">
        <Form.Label> Razón Social:</Form.Label>
        <Form.Control type="text" placeholder="Razón Social:"name="razon_social" value={formData.razon_social} onChange={handleRegistro} />
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicRfc">
        <Form.Label> Rfc:</Form.Label>
        <Form.Control type="text" placeholder="Rfc:" name="rfc_fact" value={formData.rfc_fact}  onChange={handleRegistro}/>
      </Form.Group>

       <Form.Group  className="mb-3" controlId="formBasicRfc">
        <Form.Label> Domicilio:</Form.Label>
        <Form.Control type="text" placeholder="Domicilio:" name="dom_fact" value={formData.dom_fact}  onChange={handleRegistro} />
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicRfc">
        <Form.Label> Uso de CFDI:</Form.Label>
        <Form.Control type="text" placeholder="Uso de CFDI:" name="cfdi_fact" value={formData.cfdi_fact} onChange={handleRegistro} />
      </Form.Group>

        <Form.Group  className="mb-3" controlId="formBasicRfc">
        <Form.Label> Régimen Fiscal:</Form.Label>
        <Form.Control type="text" placeholder="Régimen Fiscal:" name="regFiscal_fact" value={formData.regFiscal_fact}  onChange={handleRegistro} />
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicRfc">
        <Form.Label> Correo para enviar factura:</Form.Label>
        <Form.Control type="text" placeholder="Correo para enviar factura:" name="email_fact" value={formData.email_fact}  onChange={handleRegistro} />
      </Form.Group>
      </>
        )}




{/* Botón de enviar */}
      <Button variant="primary" type="submit" size='lg'>
       Enviar
      </Button>
    </Form>    
   

    );
};

export default EventForm;





  