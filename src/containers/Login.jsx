/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
//manejar informacion  de formulario
const Login = () => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => { //si solo tiene un parametro
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
//manejar informacion  de formulario
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' /> Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div><img src={twitterIcon} alt='' /> Inicia sesión con Google</div>
          <div><img src={googleIcon} alt='' /> Inicia sesión con Twitter</div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>
            Regístrate
          </Link>
          {/*<a href=''>Regístrate</a>  se remplaza por link */}
        </p>
      </section>
    </section>
  );
};
export default Login;

