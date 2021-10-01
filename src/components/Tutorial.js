//! Importaciones 
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTutorial, deleteTutorial } from "../actions/tutorials";
import TutorialDataService from "../services/TutorialService";

//! Funcion Visual
const Tutorial = (props) => {
  const initialTutorialState = {
    id: null,
    Nombre: "",
    Apellido: "",
    Edad: "",
    Horario: "",
    Clase: "",
    
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getTutorial = id => {
    TutorialDataService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updateContent = () => {
    dispatch(updateTutorial(currentTutorial.id, currentTutorial))
      .then(response => {
        console.log(response);

        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeTutorial = () => {
    dispatch(deleteTutorial(currentTutorial.id))
      .then(() => {
        props.history.push("/CRUD");
      })
      .catch(e => {
        console.log(e);
      });
  };
  //! Visualisacion del CRUD (UPDATE)
  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Entrenador</h4>
          <form>
            <div className="form-group">
              <label htmlFor="Nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="Nombre"
                name="Nombre"
                value={currentTutorial.Nombre}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="Apellido">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="Apellido"
                name="Apellido"
                value={currentTutorial.Apellido}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="Edad">Edad</label>
              <input
                type="number"
                className="form-control"
                id="Edad"
                name="Edad"
                value={currentTutorial.Edad}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="Horario">Horario</label>
              <input
                type="text"
                className="form-control"
                id="Horario"
                name="Horario"
                value={currentTutorial.Horario}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="Clase">Clase</label>
              <input
                type="text"
                className="form-control"
                id="Clase"
                name="Clase"
                value={currentTutorial.Clase}
                onChange={handleInputChange}
              />
            </div>
            <br />
            
          </form>

          <button className="btn btn-outline-danger" onClick={removeTutorial}>
            Borrar
          </button>

          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={updateContent}
          >
            Actualizar
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Por favor da click en algun Entrenador...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;