import React from 'react';
import { useForm } from 'react-hook-form';
import './contactform.css';

function ContactForm() {

  const {register, handleSubmit} = useForm ();

  const onSubmit = (data) =>{
    console.log(data);
  }

  return (
    <div className='separador'>
      <div className='container-form-contact'>

        <form className='formulario' onSubmit={handleSubmit(onSubmit)}>

          <div className='separador-form-div-name-email'>
            
            <div className='wrapper'>
              <div className='input-data'>
                <input type='text' {...register('name')}/>
                <label htmlFor='name'>Nombre*</label>
              </div>
            </div>

            <div div className='wrapper'>
              <input type='email' {...register('email')}/>
              <label className='lbl-nombre' htmlFor='email'>Email*</label>
            </div>

          </div>

          <div>
            <textarea name="message" className='textarea-responsive'></textarea>
          </div>

          <button type='submit'>Enviar</button>
        </form>
        
        <div className='contact'>
          <h2>Hola Mundo</h2>
        </div>
      </div>
    </div>
  )
}

export default ContactForm