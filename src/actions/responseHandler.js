import { toast } from 'react-toastify';


const responseHandler = {

  updateBoard(data, symbol, setSymbol, setBoard) {
    if(data.board) setBoard(data.board)
    responseHandler.handleResponse(data, symbol, setSymbol)
  },

  handleResponse(data, symbol, setSymbol) {
    if(data.message === 'Ok') {
      responseHandler.switchSymbol(symbol, setSymbol)
    } else {
      responseHandler.sendNotification(data)
    }
  },

  sendNotification(data) {
    if(data.errors) {
      toast.error(data.errors[0].message)
    } else {
      toast.success(data.message)
    }
  }, 

  switchSymbol(symbol, setSymbol) {
    const currentSymbol = (symbol === 'x') ? 'o' : 'x'
    setSymbol(currentSymbol)
  }
}

export default responseHandler;
