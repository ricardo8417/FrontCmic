import React from "react";
import { Banner } from "../Banner/Banner.jsx";
import { Footer } from "../Footer/Footer.jsx";
import EventForm from "../EventForm/EventForm.jsx";
import Logo from "../../Public/img/logo.png";

export const Home = () => {
    return (
        <div>
            <div className="container">
                <Banner />
                <div className="titleCamara">
                    <img src={Logo} className="App-Logo" alt="Logo" />
                    <h1>Cámara Mexicana de La Industria de la Construcción</h1>
                </div>
                <div className="titleRegistro">
                    <h2>Registro al 2do Torneo de Golf</h2>
                </div>
            </div>
            <EventForm />
            <Footer />
        </div>
    );
};
