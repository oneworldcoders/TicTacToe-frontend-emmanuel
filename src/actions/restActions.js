import responseHandler from './responseHandler'
import dotenv from 'dotenv';
dotenv.config();


const base_url = process.env.REACT_APP_BASE_URL;
const reset_game_url = base_url+'reset_game';
const play_url = base_url+'play';

export async function resetBoard({setBoard, restClient=fetch, url=reset_game_url}){
  const response = await restClient(url)
  const data = await response.json()
  setBoard(data.board)
}

export async function playMove({symbol, setSymbol, position, url=play_url, restClient=fetch, setBoard}) {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({ symbol: symbol, position: position })
  }
  
  const response = await restClient(url, requestOptions)
  const data = await response.json()
  responseHandler.updateBoard(data, symbol, setSymbol, setBoard)
}
