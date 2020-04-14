import React, { useState } from 'react'
import Button from '../../components/Button'
import Board from '../Board';
import { playMove, resetBoard } from '../../actions/restActions'
import './index.css'


function TicTacToe() {
  const [symbol, setSymbol] = useState('x')
  const [board, setBoard] = useState(["-","-","-","-","-","-","-","-","-"]);

  return (
    <div>
      <div className="control-btns">
        <Button 
          mark="X" 
          handleClick={() => {}} 
          symbol={symbol} />
        <Button
          mark="RESET"
          handleClick={() => resetBoard({ setBoard })} />
        <Button
          mark="O"
          handleClick={() => {}} 
          symbol={symbol} />
      </div>
      <Board
        handleClick={(position) => {playMove({
            symbol,
            setSymbol,
            position,
            setBoard
          })}}
        board={board} />
    </div>
    
  );
}

export default TicTacToe;
