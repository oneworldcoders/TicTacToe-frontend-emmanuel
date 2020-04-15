import responseHandler from './responseHandler'

describe('switchSymbol', () => {
  test('switches x to o', () => {
    const data = { symbol: 'x', setSymbol: jest.fn() }
    responseHandler.switchSymbol(data)
    expect(data.setSymbol).toHaveBeenCalledWith('o')
  });

  test('switches o to x', () => {
    const data = { symbol: 'o', setSymbol: jest.fn() }
    responseHandler.switchSymbol(data)
    expect(data.setSymbol).toHaveBeenCalledWith('x')
  });
});

describe('updateBoard', () => {
  test('handleResponse is called', () => {
    const data = { }
    const symbol = 'x';
    const setSymbol = jest.fn()
    const setBoard = jest.fn()
    const handleResponseSpy = jest.spyOn(responseHandler, 'handleResponse');
    const switchSymbolSpy = jest.spyOn(responseHandler, 'switchSymbol');
    const sendNotificationSpy = jest.spyOn(responseHandler, 'sendNotification');
    responseHandler.updateBoard(data, symbol, setSymbol, setBoard)
    expect(handleResponseSpy).toHaveBeenCalledWith(data, switchSymbolSpy, sendNotificationSpy)
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
  beforeEach(() => {
    const success = jest.fn()
    const error = jest.fn()

    test('success callback is called on error', () => {
      const data = { message: 'Ok' }
      responseHandler.handleResponse(data, success, error)
      expect(success).toHaveBeenCalledWith(data)
    });

    test('error callback is called on error', () => {
      const data = { message: '' }
      responseHandler.handleResponse(data, success, error)
      expect(error).toHaveBeenCalledWith(data)
    });
  })
});
