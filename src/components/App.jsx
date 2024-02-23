import EventForm from "../components/EventForm/EventForm.jsx";
import RegistroExitoso from './EventDisplay/RegistroExitoso.jsx'
import "./App.css"
import {Banner} from './Banner/Banner.jsx'
import { Footer } from "./Footer/Footer.jsx";

import { BrowserRouter , Route, Routes } from "react-router-dom";

import Logo from '../Public/img/logo.png'

const App = () => {
  

  return (
<BrowserRouter>

<Routes>
<Route path='/registroExitoso' element={RegistroExitoso} />

</Routes>
  <div className="container">
<Banner />
<div className="titleCamara">
<img src={Logo} className="App-Logo" alt="Logo"/>
<h1>Cámara Mexicana de La Industria de la Construcción</h1>
</div>
<div className="titleRegistro">
<h2>Registro al 2do Torneo de Golf</h2>
     
    </div>
       
           </div>
           <EventForm  />
<Footer />
</BrowserRouter>
  
    
  );
};

export default App;
