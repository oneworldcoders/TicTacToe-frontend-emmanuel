import React from 'react';
import './index.css'


function Cell(props) {
  return (
    <div
      className="box"
      onClick={() => props.handleClick()}>
        {props.mark}
    </div>
  );
}

export default Cell;
