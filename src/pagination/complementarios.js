import '../css/incio.css';
import React from 'react';
import { Link } from "react-router-dom";
const Complementario = () => {
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

                <br></br>
                <div class="row">

                    <div class="col-1 ">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-3 p-0 ">
                        <img class=" img-fluid izq-f m-arriba" src={require('../img/zonaestiramiento.jpg').default} alt="" width="100%"></img>
                    </div>

                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>


                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-3 mx-auto p-0">
                        <img class=" img-fluid m-arriba" src={require('../img/zonacardiovascular.jpg').default} alt="" width="100%"></img>
                    </div>


                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>


                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>


                    <div class="col-10 col-md-3 p-0 ">
                        <img class=" img-fluid m-arriba der-f" src={require('../img/zonamusculacion.jpg').default} alt="" width="100%"></img>
                    </div>

                    <div class="col-1 ">
                        <p></p>
                    </div>

                </div>

                <br></br>

                <div class="row">

                    <div class="col-1 ">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-3 p-0 ">
                        <img class=" img-fluid m-arriba izq-f" src={require('../img/clasesgrupales.jpg').default} alt="" width="100%"></img>
                    </div>


                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-3 mx-auto p-0">
                        <img class=" img-fluid m-arriba" src={require('../img/zonashumedas.jpg').default} alt="" width="100%"></img>
                    </div>


                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-3 p-0 ">
                        <img class=" img-fluid m-arriba der-f" src={require('../img/artesmarcialesmixtas.jpg').default} alt="" width="100%"></img>
                    </div>

                    <div class="col-1 ">
                        <p></p>
                    </div>

                </div>

                <br></br>

                <div class="row">

                    <div class="col-1 ">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-3 p-0 ">
                        <img class=" img-fluid m-arriba izq-f" src={require('../img/entrenamientopersonalizado.jpg').default} alt="" width="100%"></img>
                    </div>

                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>


                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>


                    <div class="col-10 col-md-3 mx-auto p-0">
                        <img class=" img-fluid m-arriba" src={require('../img/zonafuncional.jpg').default} alt="" width="100%"></img>
                    </div>


                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-block d-sm-none  ">
                        <p></p>
                    </div>


                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-1 d-none d-sm-block d-md-none  ">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-3 p-0 ">
                        <img class=" img-fluid m-arriba der-f" src={require('../img/piscina.jpg').default} alt="" width="100%"></img>
                    </div>

                    <div class="col-1 ">
                        <p></p>
                    </div>

                </div>

                <br></br>


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
export default Complementario;