import RegistroExitoso from "./EventDisplay/RegistroExitoso.jsx";
import "./App.css";
import  {Home}  from "./Home/Home.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="/registroExitoso" element={<RegistroExitoso/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
