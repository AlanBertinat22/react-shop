import React from 'react';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className='Container'>
      <div className='NotFound'>
        <div className="NotFound-Text">
          <h3> Página no encontrada </h3>
        </div>
      </div>
      <div className='MesaPool'>
        <div className='Container-circles'>
          <div className='one'></div>
          <div className='two'></div>
          <div className='three'></div>
          <div className='four'></div>
          <div className='five'></div>
          <div className='six'></div>
          <div className='seven'></div>
          <div className='eight'></div>
          <div className='nine'></div>
          <div className='teen'></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;