import RegistroExitoso from "./EventDisplay/RegistroExitoso.jsx";
import "./App.css";
import  {Home}  from "./Home/Home.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { Login } from "./Login/Login.jsx";
import { Dashboard } from "./Dashboard/Dashboard.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="/registroExitoso" element={<RegistroExitoso/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
