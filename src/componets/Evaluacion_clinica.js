import React from 'react'
import '../css/evalluacion_clinica.css'

const Evaluacion_clinica = () => {
    return (
        <div>
            <br></br>
        <aside class="row">

            <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
                <div class="contenedor Franklin-Gothic">
                    <h2 class="Eras-ITC">EVALUACIÓN CLÍNICA</h2>
                    <p>Una completa evaluación sobre tu condición y cualidades físicas te permite establecer objetivos
                        claros que alcanzarás con un programa de entrenamiento diseñado a tu medida.</p>
                    <p>Servicios incluidos en cualquier clase deportiva</p>
                </div>
            </section>

            <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="banner">
                <img class="banner " src={require("../img/evaluacion clinica.jpg").default} height="500px" alt=""></img>
            </section>

            <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
                <div class="contenedor Franklin-Gothic">
                    <h2 class="Eras-ITC">SERVICIOS</h2>
                    <p>-Conocer la frecuencia cardiaca en la que debes trabajar para obtener mayores resultados.</p>
                    <p>-Prevenir lesiones.</p>
                    <p>-Mejorar tu postura.</p>
                    <p>-Saber si tienes algún riesgo muscular, postural y de flexibilidad para tratarlo con el
                        entrenamiento.</p>
                </div>
            </section>

        </aside>

        <br></br>

        

        <footer class="row azul">

            <div class="col-1">
                <p></p>
            </div>

            <div class="col ">

                <i class="fab fa-facebook-f logo1"></i>
                <i class="fab fa-twitter logo2"></i>
                <i class="fab fa-instagram logo2"> <img src = {require('../img/w3c.png').default } class="p-0 logo2" alt="certificado W3C"></img>
                </i>

                <h6 class="blanco p-3 text-center">  COPYRIGHT © Certificado W3C  Kevin Fraile, Ivan Baron,
                    Michael Muñoz </h6>

            </div>

            <div class="col-1">
                <p></p>
            </div>

        </footer>

        </div>
    )
}

export default Evaluacion_clinica
