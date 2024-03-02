import React, { useState } from "react";
import "../styles/formulario.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="centered-form">
      <form
        className="formulario"
        name="FormularioContacto"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="FormularioContacto" />
        <div hidden>
          <label>
            No llenar: <input name="bot-field" onChange={handleChange} />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" onChange={handleChange} required></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
