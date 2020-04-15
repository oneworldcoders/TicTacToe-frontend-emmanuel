import React from 'react';
import Cell from '../../components/Cell';
import './index.css'


export const displayBoard = (props) => {
  return props.board.map((name, index) => {
    return (<Cell
      key={index}
      mark={name}
      handleClick={() => props.handleClick(index+1)}
      position={index+1}/>);
  });
}

export default function Board(props) {
  return (
      <div className="board-container">
        <div className="game-baord">
          {displayBoard(props) }
        </div>
      </div>
  );
}

Board.defaultProps = {
  board: []
};