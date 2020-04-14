import responseHandler from './responseHandler'

describe('switchSymbol', () => {
  test('switches x to o', () => {
    const symbol = 'x'
    const setSymbol = jest.fn()
    responseHandler.switchSymbol(symbol, setSymbol)
    expect(setSymbol).toHaveBeenCalledWith('o')
  });

  test('switches o to x', () => {
    const symbol = 'o'
    const setSymbol = jest.fn()
    responseHandler.switchSymbol(symbol, setSymbol)
    expect(setSymbol).toHaveBeenCalledWith('x')
  });
});

describe('updateBoard', () => {
  test('handleResponse is called', () => {
    const data = { }
    const symbol = 'x';
    const setSymbol = jest.fn()
    const setBoard = jest.fn()
    const handleResponseSpy = jest.spyOn(responseHandler, 'handleResponse');
    responseHandler.updateBoard(data, symbol, setSymbol, setBoard)
    expect(handleResponseSpy).toHaveBeenCalledWith(data, symbol, setSymbol)
  });

  test('setBoard is called when board in data', () => {
    const data = { board: [] }
    const setBoard = jest.fn()
    const symbol = 'x';
    const setSymbol = jest.fn()
    responseHandler.updateBoard(data, symbol, setSymbol, setBoard)
    expect(setBoard).toHaveBeenCalledWith(data.board)
  });

  test("setBoard isn't called when board not in data", () => {
    const data = { }
    const setBoard = jest.fn()
    const symbol = 'x';
    const setSymbol = jest.fn()
    responseHandler.updateBoard(data, symbol, setSymbol, setBoard)
    expect(setBoard).toHaveBeenCalledTimes(0)
  });
});

describe('handleResponse', () => {
  test('switchSybol is called when message is OK', () => {
    const data = { message: 'Ok' }
    const symbol = 'x';
    const setSymbol = jest.fn()
    const handleResponseSpy = jest.spyOn(responseHandler, 'switchSymbol');
    responseHandler.handleResponse(data, symbol, setSymbol)
    expect(handleResponseSpy).toHaveBeenCalledWith(symbol, setSymbol)
  });

  test('sendNotification is called with data when message is not OK', () => {
    const data = { message: '' }
    const symbol = 'x';
    const setSymbol = jest.fn()
    const handleResponseSpy = jest.spyOn(responseHandler, 'sendNotification');
    responseHandler.handleResponse(data, symbol, setSymbol)
    expect(handleResponseSpy).toHaveBeenCalledWith(data)
  });
});
