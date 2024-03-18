import RegistroExitoso from "./EventDisplay/RegistroExitoso.jsx";
import "./App.css";
import  {Home}  from "./Home/Home.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { Login } from "./Login/Login.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path="/registroExitoso" element={<RegistroExitoso/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
