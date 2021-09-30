//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { Link } from "react-router-dom";
import '../css/conocenos.css';
import video from '../video/GYM.mp4'
import { Link } from "react-router-dom";

const Conocenos = () => {
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
            <br/><br/>
            <aside class="row">
                <div class="grid">
                    <video controls autoplay muted src={video} type="video/mp4" />

                </div>
            </aside>

            <footer class="row azul">

                <div class="col-1">
                    <p></p>
                </div>

                <div class="col ">

                    <i class="fab fa-facebook-f logo1"></i>
                    <i class="fab fa-twitter logo2"></i>
                    <i class="fab fa-instagram logo2">
                        <img src={require('../img/w3c.png').default} class="p-0 logo2" alt="certificado W3C"></img>
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
export default Conocenos;