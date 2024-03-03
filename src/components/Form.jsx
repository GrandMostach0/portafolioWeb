import React, { useRef, useState } from "react";
import emails from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

function Form() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Iniciamos el estado de envío
    setIsSubmitting(true);

    try {
      const response = await emails.sendForm(
        "service_sfpewxk",
        "template_f6hczrn",
        form.current,
        {
          publicKey: "g0Z264nL37-aXWZZe",
        }
      );

      // Éxito al enviar el correo (200 OK)
      if (response.status === 200) {
        // Notificación de éxito
        toast.success("¡Correo enviado con éxito!", {
          icon: "🚀",
          position: "bottom-center",
          reverseOrder: false,
        });

        // Reiniciamos los campos del formulario después de un envío exitoso
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      } else {
        // Notificación de error
        toast.error("Error al enviar el correo", {
          icon: "❌",
          position: "bottom-center",
          reverseOrder: false,
        });
      }
    } catch (error) {
      // Error al enviar el correo
      console.error("FAILED...", error);
      toast.error("Error al enviar el correo", {
        icon: "❌",
        position: "bottom-center",
        reverseOrder: false,
      });
    } finally {
      // Establecemos el estado de envío a false después de completar la promesa
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false}/>
      <form className="formulario" ref={form} onSubmit={sendEmail}>
        <div className="separador-form-div-name-email">
          <div className="wrapper">
            <label className="lbl-nombre" htmlFor="user_name">
              Nombre:
            </label>
            <input
              placeholder="Nombre"
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
          </div>

          <div div className="wrapper">
            <label className="lbl-nombre" htmlFor="user_email">
              Correo:
            </label>
            <input
              placeholder="Correo"
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="container-textarea">
          <label className="lbl-nombre" htmlFor="message">
            Mensaje:
          </label>
          <textarea
            placeholder="Escribeme.."
            name="message"
            className="textarea-responsive"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </>
  );
}

export default Form;
