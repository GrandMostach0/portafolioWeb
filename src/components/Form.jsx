import React from 'react';
import '../styles/formulario.css';

function Form() {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Lógica para manejar el envío del formulario
      console.log("Formulario enviado"); // Añade un mensaje de prueba para verificar si la función se está ejecutando
    };


  return (
    <div className="cenetred-form">
      <form
        className="formulario2"
        name="FormularioContacto"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="FormularioContacto" />
        <div hidden>
          <input name="bot-field" />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" required></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Form