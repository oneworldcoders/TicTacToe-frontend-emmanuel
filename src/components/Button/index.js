import React from 'react'
import './index.css'

function Button(props) {
  return (
    <div>
      <button className="btn">{props.mark}</button>
    </div>
  );

}

export default Button;