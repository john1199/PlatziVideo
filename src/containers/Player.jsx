/* eslint-disable react/destructuring-assignment */
import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import NotFound from './NotFound';
import { getVideoSource } from '../actions/index';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  //obtenemos el id
  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        {/* funcion disponible al encapsular nuestra app en browser-loader */}
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) :
    (
      <NotFound />
      /* <Redirect to='/404/' />*/
    );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};
const mapDispatchToProps = {
  getVideoSource,
};
//export default Player;
export default connect(mapStateToProps, mapDispatchToProps)(Player);
