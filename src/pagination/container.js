/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/clases.css';
import { Link } from "react-router-dom";

const Clases = () => {

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

                    <Link class="nav-link active" to="/LOGUEO">
                        <h class="rojo Eras-ITC">REGISTRO</h>
                    </Link>

                </nav>

                <div class="col-1 azul">
                    <p></p>
                </div>

            </main>
            <Router>

                <div class="container-fluid">


                    <div class="col-1 ">
                        <p></p>
                    </div>
                    <div class="row">

                        <div class="col-1 ">
                            <p></p>
                        </div>

                        <div class="col-10 col-md-3 p-0" id="cycl">

                            <img class=" img-fluid m-arriba" src={require('../img/hit cycling.jpg').default} alt=""
                                width="100%"></img>

                            <div>


                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>


                        <div class="col-10 col-md-3 p-0 mx-auto" id="bung">

                            <img class=" img-fluid m-arriba" src={require('../img/bungge.png').default} alt="" width="100%"></img>

                            <div>

                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>


                        <div class="col-10 col-md-3 p-0" id="aero">

                            <img class=" img-fluid der-f m-arriba" src={require('../img/aerobicos.jpg').default} alt=""
                                width="100%"></img>

                            <div>

                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-sm-none d-md-block">
                            <p></p>
                        </div>

                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col-1 ">
                            <p></p>
                        </div>

                        <div class="col-10 col-md-3 p-0" id="yoga">

                            <img class=" img-fluid izq-f m-arriba" src={require('../img/yoga.jpg').default} alt=""
                                width="100%"></img>

                            <div>

                                <button href="#" class="posicion-bt1" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">MAÑANA</button>

                                <a class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-10 col-md-3 p-0 mx-auto" id="boxe">

                            <img class=" img-fluid m-arriba" src={require('../img/boxeo.jpg').default} alt="" width="100%"></img>

                            <div>

                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-10 col-md-3 p-0 " id="trx">

                            <img class=" img-fluid der-f m-arriba" src={require('../img/trx.jpg').default} alt=""
                                width="100%"></img>

                            <div>

                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>
                        </div>

                        <div class="col-1 d-sm-none d-md-block">
                            <p></p>
                        </div>

                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">

                                <div class="modal-header">

                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                </div>

                                <div class="modal-body texto-iniciasesion Franklin-Gothic">
                                    <h3>REGISTRATE O INICIA SESION PRIMERO</h3>
                                </div>

                                <br /><br /><br />


                            </div>
                        </div>
                    </div>
                </div>

                <br /><br />
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
            </Router>
        </>
    )
}
/* eslint-disable react/jsx-no-undef */
export default Clases;