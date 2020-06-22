import React from 'react';
import './ValidationSuccess.css';


export default function ValidationSuccess(props) {
  if(props.message) {
    return (
      <div className="success">{props.message}
        <button className="x-button" onClick={props.changeMessage}>
        X
        </button>
      </div>
    );
  }
  return <></>
}
