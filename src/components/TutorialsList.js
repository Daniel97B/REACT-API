import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
} from "../actions/tutorials";

import { Link } from "react-router-dom";

const TutorialsList = () => {
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const tutorials = useSelector(state => state.tutorials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTutorials());
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshData = () => {
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    dispatch(deleteAllTutorials())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findTutorialsByTitle(searchTitle));
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Lista de Entrenador</h4>

        <ul className="list-group">
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.Nombre}
              </li>
            ))}
        </ul>

<br/>
        <button
          className="btn btn-outline-danger"
          onClick={removeAllTutorials}
        >
          Borrar todos
        </button>
      </div>
      <div className="col-md-6">
        {currentTutorial ? (
          <div>
            <h4>Entrenador</h4>
            <div>
              <label>
                <strong>Nombre:</strong>
              </label>{" "}
              {currentTutorial.Nombre}
            </div>
            <div>
              <label>
                <strong>Apellido:</strong>
              </label>{" "}
              {currentTutorial.Apellido}
            </div>
            <div>
              <label>
                <strong>Edad:</strong>
              </label>{" "}
              {currentTutorial.Edad}
            </div>
            <div>
              <label>
                <strong>Horario:</strong>
              </label>{" "}
              {currentTutorial.Horario}
            </div>
            <div>
              <label>
                <strong>Clase:</strong>
              </label>{" "}
              {currentTutorial.Clase}
            </div>
            
            <br/>
            <Link
              to={"/tutorials/" + currentTutorial.id}
              className="btn btn-outline-success"
            >
              Editar
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor da click en algun Entrenador...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialsList;