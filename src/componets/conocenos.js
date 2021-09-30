//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { Link } from "react-router-dom";
import '../css/conocenos.css';
import '../css/sesion.css';
import React from 'react';

const Conocenos = () =>{
    return(
        <>
        
        <aside class="row">
            <div class="grid">
            <ReactPlayer
          url='https://www.youtube.com/watch?v=rnwlWn603g4'
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
            </div>
        </aside>


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
export default Conocenos;