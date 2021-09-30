import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTutorial } from "../actions/tutorials";


const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    Nombre: "",
    Apellido: "",
    Edad: "",
    Horario: "",
    Clase: "",
  };

  const [tutorial, setTutorial] = useState(initialTutorialState);

  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    const { Nombre, Apellido, Edad, Horario, Clase  } = tutorial;

    dispatch(createTutorial(Nombre, Apellido, Edad, Horario, Clase ))
      .then(data => {
        setTutorial({
          id: data.id,
          Nombre: data.Nombre,
          Apellido: data.Apellido,
          Edad: data.Edad,
          Horario: data.Horario,
          Clase: data.Clase,
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Enviaste exitosamente!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Añadir
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="Nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="Nombre"
              required
              value={tutorial.Nombre}
              onChange={handleInputChange}
              name="Nombre"
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
                value={tutorial.Apellido}
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
                value={tutorial.Edad}
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
                value={tutorial.Horario}
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
                value={tutorial.Clase}
                onChange={handleInputChange}
              />
            </div>
            <br />

          <button onClick={saveTutorial} className="btn btn-outline-success">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;