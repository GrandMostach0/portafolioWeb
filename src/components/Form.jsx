import React from "react";

function Form() {

  return (
    <form
      className="formulario"
      name="FormularioContacto"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="FormularioContacto" />

      <div hidden>
        <input name="bot-field" />
      </div>

      <div className="separador-form-div-name-email">
        <div className="wrapper">
          <label className="lbl-nombre" htmlFor="name">
            Nombre
          </label>
          <input placeholder="Nombre" type="text" name="name" />
        </div>

        <div div className="wrapper">
          <label className="lbl-nombre" htmlFor="email">
            Email
          </label>
          <input placeholder="Correo" type="email" name="email" />
        </div>
      </div>

      <div className="container-textarea">
        <label className="lbl-nombre" htmlFor="message">
          Message
        </label>
        <textarea placeholder="Escribeme.." name="message" className="textarea-responsive" />
      </div>

      <button type="submit"> Enviar </button>
    </form>
  );
}

export default Form;
