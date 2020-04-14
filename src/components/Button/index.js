import React from 'react'
import './index.css'


const btnStyle = {
  backgroundColor: '#FFEBD9',
  color: "black"
};

function Button(props) {
  return (
    <div>
      <button
        className="btn"
        style={(props.mark && props.symbol === props.mark.toLowerCase())? btnStyle : []}
        onClick={() => props.handleClick() }>
          {props.mark}
      </button>
    </div>
  );

}

export default Button;