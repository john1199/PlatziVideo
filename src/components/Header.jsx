import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  //user en vez de props.user
  const { user } = props;
  //validar si existen usuarios
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className='header'>
      {/*evita ver la recarga de la pagina*/}
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            {/*<a href='/'>Cuenta</a>*/}
            <Link to='/'>
              Cuenta
            </Link>
          </li>
          <li>
            {/*<a href='/'>Cerrar Sesión</a>*/}
            <Link to='/login'>
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

//export default Header;
export default connect(mapStateToProps, null)(Header);
