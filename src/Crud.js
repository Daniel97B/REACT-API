import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import './css/sesion.css';

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

function Crud() {
  return (
    <Router>



      <main class="row">

        <div class="col-1 azul">
          <p></p>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light azul p-0 col">

          <a class="navbar-brand" href="#">
            <img src={require('./img/logo.jpg').default} alt="ahora" height="60px"></img>
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li className="nav-item">
                <Link to={"/CRUD"} className="nav-link text-white blanco Eras-ITC">
                  Entrenadores
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/add"} className="nav-link text-white blanco Eras-ITC">
                  Crear
                </Link>
              </li>
            </ul>
          </div>

          <div class="">
            <a href="/" class="text-end">
              <h class="p-1 text-danger Eras-ITC text-end">( SALIR)</h>
            </a>
          </div>

        </nav>

        <div class="col-1 azul">
          <p></p>
        </div>

      </main>

      <div className="container mt-3">

        <Switch>
          <Route exact path={["/", "/CRUD"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </Router>
  );
}

export default Crud;