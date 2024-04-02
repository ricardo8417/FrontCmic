import RegistroExitoso from "./EventDisplay/RegistroExitoso.jsx";
import "./App.css";
import  {Home}  from "./Home/Home.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { Login } from "./Login/Login.jsx";
import { Dashboard } from "./Dashboard/Dashboard.jsx";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { RoutePrivated } from "./RoutePrivated.js";
import {useLocalStorage} from 'react-use'

const App = () => {

   const [user,setUser]= useLocalStorage('user');

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
                    <Route element={<RoutePrivated canActive={user} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/registroExitoso" element={<RegistroExitoso />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
};



export default App;
