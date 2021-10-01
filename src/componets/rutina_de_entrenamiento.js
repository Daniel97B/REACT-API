//! Importaciones
import React from 'react'
/*import { Route, Router, Switch } from 'react-router';
import Clases from '../pagination/container';*/
import '../css/medicina_deportiva.css'
//! Funcion de visualizacion
const Rutina_de_entrenamiento = () => {
    return (
      <>
        {/* Infomracion de Rutina entrenamiento */}
         <aside class="row">
            <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
                <div class="contenedor Franklin-Gothic">
                    <h2 class="Eras-ITC">RUTINA DE ENTRENAMIENTO</h2>
                    <p>Entrenador personal  Potencializa tu capacidad física (velocidad, fuerza, resistencia), mejora tu salud, aspecto físico y autoestima, 
                        recupérarte de lesiones o mejor evítarlas y lograr el control absoluto de tu peso.</p>
                    <p>Servicios incluidos en cualquier clase deportiva</p>
                </div>
            </section>
            {/* Agregamos imagen */}
            <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="banner">
                <img class="banner" src={require('../img/rutina de entrenamiento.jpg').default }  height="500px"  alt=""></img>
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
                <i class="fab fa-instagram logo2"> <img src = {require('../img/w3c.png').default } class="p-0 logo2" alt="certificado W3C"></img>
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

export default Rutina_de_entrenamiento;
