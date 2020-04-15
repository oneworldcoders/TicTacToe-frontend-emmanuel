import React from 'react'
import './index.css'


const btnStyle = {
  backgroundColor: '#FFEBD9',
  color: "black"
};

function Button(props) {
  return (
    <div className="btn-container">
      <button
        className="btn"
        style={(props.symbol === props.mark.toLowerCase())? btnStyle : []}
        onClick={() => props.handleClick() }>
          {props.mark}
      </button>
    </div>
  );

}

Button.defaultProps = {
  mark: ''
};

export default Button;