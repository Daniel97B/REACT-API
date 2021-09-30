
import '../css/incio.css';
import React from 'react';
import { Link } from "react-router-dom";

const asesoria = () => {
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
            <aside class="row">

                <section class="col-12 p-0" id="banner">

                    <img class="banner" src={require('../img/banner.jpg').default} alt=""></img>

                    <div class="contenedor" id="reproductor">
                        <Link to="/INICIO/CONOCENOS">
                            <h class="Franklin-Gothic"> CONOCENOS </h>
                            <img class="reproductor" src={require('../img/reproductor.png').default} alt=""></img>
                        </Link>

                    </div>

                </section>

            </aside>

            <aside class="row ">

                <div class="col-1">
                    <p></p>
                </div>

                <section class="col-12 col-md-5 p-1 mx-auto" id="nut">

                    <img class="nut" src={require('../img/asesoriadenutricion.jpg').default} alt=""></img>

                    <div class="contenedor">

                        <Link to="/INICIO/NO">
                            <h class="Franklin-Gothic">MÁS INFORMACION </h>
                        </Link>

                    </div>

                </section>

                <section class="col-12 col-md-5 p-1 mx-auto" id="med">

                    <img class="med" src={require('../img/medicina deportiava.jpg').default} alt=""></img>

                    <div class="contenedor">

                        <Link to="/INICIO/MEDICINA">
                            <h class="Franklin-Gothic">MÁS INFORMACION </h>
                        </Link>
                    </div>
                </section>

                <div class="col-1">
                    <p></p>
                </div>

            </aside>

            <aside class="row">

                <div class="col-1">
                    <p></p>
                </div>

                <section class="col-12 col-md-5 p-1 mx-auto " id="eva">

                    <img class="eva" src={require('../img/evaluacion clinica.jpg').default} alt=""></img>
                    <div class="contenedor">

                        <Link to="/INICIO/EVALIACION">
                            <h class="Franklin-Gothic">MÁS INFORMACION </h>
                        </Link>

                    </div>

                </section>

                <section class="col-12 col-md-5 p-1 mx-auto" id="rut">

                    <img class="rut" src={require('../img/rutina de entrenamiento.jpg').default} alt=""></img>
                    <div class="contenedor">

                        <Link to="/INICIO/RUTINA">
                            <h class="Franklin-Gothic">MÁS INFORMACION </h>
                        </Link>

                    </div>

                </section>

                <div class="col-1">
                    <p></p>
                </div>


            </aside>


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
    );

}

export default asesoria;