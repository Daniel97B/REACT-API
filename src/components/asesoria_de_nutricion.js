//! Importaciones 
import React from 'react'
import '../css/asesoria_de_nutricion.css'
import { Link } from "react-router-dom";

//! Funcion Visual
const Asesoria_de_nutricion = () => {
    //! Vista de nutricion 
    return (
        <div>
            <main class="row">

                <div class="col-1 azul">
                    <p></p>
                </div>

                <nav class="navbar navbar-expand-lg navbar-light azul p-1 col">

                    <img src={require('../img/logo.jpg').default} alt="ahora" height="60px"></img>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* Integracion de Links */}
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">
                                    <h class="blanco Eras-ITC">INICIO</h>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/CLASES">
                                    <h class="blanco Eras-ITC">CLASES</h>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/COMPLENTARIO">
                                    <h class="blanco Eras-ITC">COMPLEMENTARIOS</h>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/CONTACTOS">
                                    <h class="blanco Eras-ITC">CONTACTOS</h>
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <Link class="nav-link active" to="/LOGUEO">
                        <h class="rojo Eras-ITC">INICIO DE SESION</h>
                    </Link>

                    <Link class="nav-link active" to="">
                        <h class="rojo Eras-ITC">REGISTRO</h>
                    </Link>

                </nav>

                <div class="col-1 azul">
                    <p></p>
                </div>
                {/* Informacion de la pagina */}
            </main>

            <aside class="row">

                <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
                    <div class="contenedor Franklin-Gothic">
                        <h2 class="Eras-ITC">ASESORIA DE NUTRICI??N</h2>
                        <p>Consulta Nutricional Presencial y Online. No importa cu??l sea tu objetivo. Podemos ayudarte</p>
                        <p>Servicios incluidos en cualquier clase deportiva</p>
                    </div>
                </section>

                <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="banner">
                    <img class="banner " src={require('../img/asesoriadenutricion.jpg').default} height="500px" alt=""></img>
                </section>

                <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
                    <div class="contenedor Franklin-Gothic">
                        <h2 class="Eras-ITC">SERVICIOS</h2>
                        <p>-Evaluaci??n antropom??trica y del estado Nutricional</p>
                        <p>-Evaluaci??n de h??bitos y consumo de nutrientes</p>
                        <p>-Entrega de plan de alimentaci??n con opciones de comidas/recetas</p>
                        <p>-Acceso a canal de Whatsapp para resoluci??n de dudas</p>
                        <p>-Plan Nutricional Personalizado</p>
                        <p>-4 sesion de control</p>
                        <p>-Talleres educativos te??rico - Pr??cticos</p>
                        <p>-Aprende a comer de acuerdo a tus necesidades</p>
                    </div>
                </section>

            </aside>

            <br></br>
            {/* Footer */}
            <footer class="row azul">

                <div class="col-1">
                    <p></p>
                </div>

                <div class="col ">

                    <i class="fab fa-facebook-f logo1"></i>
                    <i class="fab fa-twitter logo2"></i>
                    <i class="fab fa-instagram logo2"> <img src={require('../img/w3c.png').default} class="p-0 logo2" alt="certificado W3C"></img>
                    </i>

                    <h6 class="blanco p-3 text-center">  COPYRIGHT ?? Certificado W3C  Kevin Fraile, Ivan Baron,
                        Michael Mu??oz </h6>

                </div>

                <div class="col-1">
                    <p></p>
                </div>

            </footer>
        </div>
    )
}

//!Exportacion funcion 
export default Asesoria_de_nutricion
