import React from 'react';
import { set, useForm } from 'react-hook-form';
import FotoPersonal from '../assets/images/foto.png';
import LogoGit from '../assets/icons/github-mark/github-mark-white.svg';
import LogoLinkedlin from '../assets/icons/icon-linkedlin.svg';
import LogoBehance from '../assets/icons/icon-behance.svg';
import LogoTwitter from '../assets/icons/icon-twitter.svg';
import './contactform.css';

//componente para relalizar el cipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
 
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
              <label className='lbl-nombre' htmlFor='name'>Nombre</label>
              <input autoComplete='off' type='text' {...register('name')}/>
            </div>

            <div div className='wrapper'>
              <label className='lbl-nombre' htmlFor='email'>Email</label>
              <input autoComplete='off' type='email' {...register('email')}/>
            </div>

          </div>

          <div className='container-textarea'>
            <label className='lbl-nombre' htmlFor="message">Message</label>
            <textarea name="message" className='textarea-responsive' {...register('message')}/>
          </div>

          <button className='sendMessage' type='submit'>Enviar</button>
        </form>
        
        <div className='contact'>
          <h2 className='contact-title'>Let's Talk</h2>
          <p>More information contact:</p>
          <div className='container-info'>
            <div className='info'>
              <>
                <CopyToClipboard text='mi text a pegar'>
                  <p>Copy me!!</p>
                </CopyToClipboard>
              </>
            </div>
            <div className='info'>

            </div>
            <div className="info cards">
              <section className='seccion-sociales-botones'>
                    <a href="https://github.com/GrandMostach0" target='_blank'><img src={LogoGit} alt="git-hub"/></a>
                    <a href="https://www.linkedin.com/in/victorchanvarguez/" target='_blank'><img src={LogoLinkedlin} alt="linkedln"/></a>
                    <a href="https://www.behance.net/victorchanva" target='_blank'><img src={LogoBehance} alt="behance"/></a>
                    <a href="#"><img src={LogoTwitter} alt="twitter"/></a>
                </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm