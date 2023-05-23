import React from 'react';
import './Space_Button.css';

function SpaceButton(props) {
  return (
    <button className="btn" type="button" onClick={props.onClick}>
      <strong>SPACE</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
}

export default SpaceButton;
