import React from 'react';
import '../css/asesoria_de_nutricion.css';

const Asesoria_de_nutricion = () => {
    return (
        <div>
            
        <aside class="row">

<section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
    <div class="contenedor Franklin-Gothic">
        <h2 class="Eras-ITC">ASESORIA DE NUTRICIÓN</h2>
        <p>Consulta Nutricional Presencial y Online. No importa cuál sea tu objetivo. Podemos ayudarte</p>
        <p>Servicios incluidos en cualquier clase deportiva</p>
    </div>
</section>

<section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="banner">
    <img class="banner " src={require('../img/asesoriadenutricion.jpg').default} height="500px" alt=""></img>
</section>

<section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
    <div class="contenedor Franklin-Gothic">
        <h2 class="Eras-ITC">SERVICIOS</h2>
        <p>-Evaluación antropométrica y del estado Nutricional</p>
        <p>-Evaluación de hábitos y consumo de nutrientes</p>
        <p>-Entrega de plan de alimentación con opciones de comidas/recetas</p>
        <p>-Acceso a canal de Whatsapp para resolución de dudas</p>
        <p>-Plan Nutricional Personalizado</p>
        <p>-4 sesion de control</p>
        <p>-Talleres educativos teórico - Prácticos</p>
        <p>-Aprende a comer de acuerdo a tus necesidades</p>
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

export default Asesoria_de_nutricion;
