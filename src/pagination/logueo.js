import '../css/sesion.css';
import React from 'react';
import { Link } from "react-router-dom";
const Logueo = () => {
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
                <br></br>
                <div class="row">
                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-4 borde-rojo margen-abajo p-4">
                        <br></br>
                        <div class="centrar-vertical">
                            <h2 class="rojo-sesion">INICIO DE SESION</h2>
                            <form>
                                <label for="" class="rojo-sesion"> CORREO </label><br></br>
                                <input type="email" id="I-CORREO" class="campo" ></input><br></br>
                                <label for="" class="rojo-sesion"> CONTRASEÑA</label><br></br>
                                <input type="password" id="I-CONTRASENNA" class="campo" ></input><br></br><br></br><br></br>

                                <a type="button" value="INGRESAR" class="bt-cancelar " id="INGRESAR" href="http://localhost:8081/CRUD" >INGRESAR</a><br></br>

                            </form>

                        </div>
                    </div>


                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-4 borde-azul margen-abajo p-4">
                        <br></br>

                        <h2 class="azul-registro">REGISTRO</h2>
                        <form >
                            <label for="" class="azul-registro"> NUMERO DE DOCUMENTO </label>
                            <br></br>

                            <input type="number" id="NUMERO-DE-DOCIMENTO" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro"> NOMBRE*</label>
                            <br></br>

                            <input type="text" id="NOMBRE" class="campo" required></input>
                            <br></br>

                            <label for="" class="azul-registro"> APELLIDO</label>
                            <br></br>

                            <input type="text" id="APELLIDO" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro campo2">GENERO </label>
                            <br></br>
                            <select name="" id="GENERO" class="campo">

                                <option value="" class="azul-text ">MASCULINO</option>
                                <option value="" class="azul-text ">FEMENINO</option>
                                <option value="" class="azul-text ">OTRO</option>

                            </select> <br></br>

                            <label for="" class="azul-registro campo2"> FECHA DE NACIMIENTO</label>
                            <br></br>

                            <input type="date" id="FECHA-DE-NACIMIENTO" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro"> CORREO*</label>
                            <br></br>

                            <input type="email" id="CORREO" class="campo" required></input>
                            <br></br>

                            <label for="" class="azul-registro"> CIUDAD</label>
                            <br></br>

                            <input type="email" id="CIUDAD" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro"> TELEFONO</label>
                            <br></br>

                            <input type="email" id="TELEFONO" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro"> CONTRASEÑA*</label>
                            <br></br>

                            <input type="password" id="CONTRASEÑA" class="campo" required></input>
                            <br></br>

                            <label for="" class="azul-registro"> CONFIRMAR CONTRASEÑA</label>
                            <br></br>

                            <input type="password" id="CONFIRMAR-CONTRASEÑA" class="campo" ></input>
                            <br></br>

                            <input type="checkbox" id="" required></input>

                            <label for="" class="azul-registro"> TERMINOS Y CONDICIONES</label>

                            <br></br>
                            <br></br>
                            <br></br>


                            <a type="button" value="REGISTRARME" class="bt-listo" id="REGISTRARME" onClick="crearUsuario()">REGISTRARME</a>

                            <br></br>


                        </form>

                    </div>


                    <div class="col-1">
                        <p></p>
                    </div>

                </div>

            </div>
            <footer class="row azul ">

                <div class="col-1">
                    <p></p>
                </div>

                <div class="col">

                    <i class="fab fa-facebook-f logo1"></i>
                    <i class="fab fa-twitter logo2"></i>
                    <i class="fab fa-instagram logo2"> <img src={require('../img/w3c.png').default} class="p-0 logo2" alt="certificado W3C"></img>
                    </i>

                    <h6 class="blanco p-3 text-center">  COPYRIGHT © Certificado W3C  Kevin Fraile, Ivan Baron,
                        Michael Muñoz
                    </h6>

                </div>

                <div class="col-1">
                    <p></p>
                </div>

            </footer>
        </>

    )
}
export default Logueo;