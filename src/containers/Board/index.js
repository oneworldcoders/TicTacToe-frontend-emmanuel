import React from 'react';
import './index.css'
import Cell from '../../components/Cell';

function Board() {
  return (
      <div className="board-container">
        <div className="game-baord">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
  );
}

export default Board;
