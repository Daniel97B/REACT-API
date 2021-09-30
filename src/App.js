/* eslint-disable react/jsx-pascal-case */
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/incio.css';
import Asesoria from './pagination/asesoria_de_nutricion';
import Complementario from "./pagination/complementarios";
import Contactos from "./pagination/contactos";
import "bootstrap/dist/css/bootstrap.min.css";
import Clases from "./pagination/container";
import Rutina_de_entrenamiento from "./components/rutina_de_entrenamiento";
import Asesoria_de_nutricion from "./components/asesoria_de_nutricion";
import Medicina_deportiva from "./components/medicina_deportiva";
import Evaluacion_clinica from "./components/Evaluacion_clinica";
import Conocenos from "./components/conocenos";
import Logueo from "./pagination/logueo";

import Crud from './Crud';
import { Provider } from 'react-redux';
import store from './store';


//import Asesoria from './pagination/asesoria_de_nutricion';
/*import container from './pagination/container';*/

function App() {
    return (
        <Router>
            <>
                <div class="container-fluid">

                    <Switch>

                        <Route path="/INICIO/RUTINA" exact>
                            <Rutina_de_entrenamiento />
                        </Route>
                        <Route path="/INICIO/EVALIACION" exact>
                            <Evaluacion_clinica />
                        </Route>
                        <Route path="/INICIO/MEDICINA" exact>
                            <Medicina_deportiva />
                        </Route>
                        <Route path="/INICIO/NO" exact>
                            <Asesoria_de_nutricion />
                        </Route>
                        <Route path="/INICIO/CONOCENOS" exact>
                            <Conocenos />
                        </Route>
                        <Route path="/CLASES">
                            <Clases />
                        </Route>
                        <Route path="/COMPLENTARIO">
                            <Complementario />
                        </Route>
                        <Route path="/CONTACTOS">
                            <Contactos />
                        </Route>
                        <Route path="/LOGUEO">
                            <Logueo />
                        </Route>
                        <Route path="/CRUD" exact>
                            <Provider store={store}>
                                <Crud />
                            </Provider>
                        </Route>
                        <Route path="/" exact>
                            <Asesoria />
                        </Route>
                    </Switch>

                </div>
            </>

        </Router>

    );
}

export default App;
