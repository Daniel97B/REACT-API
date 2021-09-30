
import '../css/contactos.css';
import React from 'react';
import { Link } from "react-router-dom";
const Contactos = () => {
    return (
        <>

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

            </main>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col p-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.4005290508503!2d-73.62527748573716!3d4.141364347407739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2dd8a475c4ab%3A0xe68b9373189b1502!2sGym%20Style!5e0!3m2!1ses!2sco!4v1616685368316!5m2!1ses!2sco"
                            height="400" width="100%" allowfullscreen="" loading="lazy">
                        </iframe>

                    </div>

                    <div class="col-1">
                        <p></p>
                    </div>

                </div>

                <div class="row">

                    <div class="col-1">
                        <p></p>
                    </div>
                    <div class="col-3 borde-arriba-abajo-izquierda centrar-texto  tamañoletra">


                        <h5 class="azul-letra Franklin-Gothic">CONTACTO</h5>
                        <h class="rojo-letra Franklin-Gothic"> 3138409361</h>

                    </div>

                    <div class="col-3 borde-arriba-abajo centrar-texto tamañoletra">



                        <h5 class="azul-letra Franklin-Gothic">DIRECCION</h5>
                        <h class="rojo-letra Franklin-Gothic"> Cra 3 # 17b-2, Mosquera</h>

                    </div>

                    <div class="col-4 borde-arriba-abajo-derecha centrar-texto tamañoletra">

                        <h5 class="azul-letra Franklin-Gothic">CORREO</h5>
                        <h class="rojo-letra Franklin-Gothic"> Gymstyles @gmali.com</h>
                    </div>

                    <div class="col-1">
                        <p></p>
                    </div>
                </div>

                <div class="row">

                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col borde-abajo-izquierda-derecha centrar-texto">
                        <h3 class="azul-letra Franklin-Gothic"> Horario de apertura</h3>
                    </div>

                    <div class="col-1">
                        <p></p>
                    </div>
                </div>


                <div class="row">

                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col borde-abajo-izquierda-derecha centrar-texto ">
                        <h5 class="azul-letra Franklin-Gothic"> LUNES A DOMINGO :</h5>
                        <h5 class="rojo-letra Franklin-Gothic"> 6AM-9PM</h5>
                    </div>

                    <div class="col-1">
                        <p></p>
                    </div>

                </div>

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
            </div>
        </>
    )
}
export default Contactos;