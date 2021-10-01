//! Importaciones 
import React from 'react'
/*import { Route, Router, Switch } from 'react-router';
import Clases from '../pagination/container';*/
import '../css/medicina_deportiva.css'
import { Link } from "react-router-dom";

//! Funcion Visual
const Rutina_de_entrenamiento = () => {
    //! Vista de Buton mas informacion (Rutina entrenamiento)
    return (
        <>
            {/* Nav*/}
            <div class="row">

                <div class="col-1 azul">
                    <p></p>
                </div>

                <nav class="navbar navbar-expand-lg navbar-light azul p-1 col">

                    <img src={require('../img/logo.jpg').default} alt="ahora" height="60px"></img>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        {/* Integracion de links */}
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

            </div>
            {/* Aside informacion de la pagina */}
            <aside class="row">
                <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
                    <div class="contenedor Franklin-Gothic">
                        <h2 class="Eras-ITC">RUTINA DE ENTRENAMIENTO</h2>
                        <p>Entrenador personal  Potencializa tu capacidad física (velocidad, fuerza, resistencia), mejora tu salud, aspecto físico y autoestima,
                            recupérarte de lesiones o mejor evítarlas y lograr el control absoluto de tu peso.</p>
                        <p>Servicios incluidos en cualquier clase deportiva</p>
                    </div>
                </section>

                <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="banner">
                    <img class="banner" src={require('../img/rutina de entrenamiento.jpg').default} height="500px" alt=""></img>
                </section>

                <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
                    <div class="contenedor Franklin-Gothic">
                        <h2 class="Eras-ITC">SERVICIOS</h2>
                        <p>-Contarás con asistencia durante tus planes de entrenamiento.</p>
                        <p>-Te ayudarán en la corrección de tu postura.</p>
                        <p>-Recibirás ayuda en los ejercicios que realizabas incorrectamente.</p>
                        <p>-Dirigirán el uso de los equipos dentro del gimnasio</p>
                        <p>-Mantendrá la motivación y la voluntad en los nuevos participantes.</p>

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

                    <h6 class="blanco p-3 text-center">  COPYRIGHT © Certificado W3C  Kevin Fraile, Ivan Baron,
                        Michael Muñoz </h6>

                </div>

                <div class="col-1">
                    <p></p>
                </div>

            </footer>
        </>
    )
}

//! exportacion 
export default Rutina_de_entrenamiento;
