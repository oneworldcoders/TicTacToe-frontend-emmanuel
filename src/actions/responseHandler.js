import { toast } from 'react-toastify';


const responseHandler = {

  updateBoard(data, symbol, setSymbol, setBoard) {
    if(data.board) setBoard(data.board)
    data.symbol = symbol
    data.setSymbol = setSymbol
    this.handleResponse(data, this.switchSymbol, this.sendNotification)
  },

  handleResponse(data, success, error) {
    if(data.message === 'Ok') {
      success(data)
    } else {
      error(data)
    }
  },

  sendNotification(data) {
    if(data.errors) {
      toast.error(data.errors[0].message)
    } else {
      toast.success(data.message)
    }
  }, 

  switchSymbol(data) {
    const currentSymbol = (data.symbol === 'x') ? 'o' : 'x'
    data.setSymbol(currentSymbol)
  }
}

export default responseHandler;
