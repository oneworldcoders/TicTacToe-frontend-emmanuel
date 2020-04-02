import React, { useState, useEffect } from 'react';
import './index.css'
import Cell from '../../components/Cell';

export const useFetch = (url, defaultData, restClient = fetch, state = useState, effect = useEffect) => {
  const [data, setData] = state(defaultData);

  effect(() => {
    fetchData(url, restClient, setData);
  }, [url]);

  return data;
}

export async function fetchData(url, restClient, setData) {
  const response = await restClient(url)
  const data = await response.json()
  setData(data)
}

export const displayBoard = (board) => {
  return board.map(function(name, index){
    return (<Cell key={index} mark={name}/>);
  });
}


export default function Board() {
  const boardData = useFetch('http://localhost:9292/draw', {"board":["","","","","","","","",""]})

  return (
      <div className="board-container">
        <div className="game-baord">
          { displayBoard(boardData.board) }
        </div>
      </div>
  );
}
