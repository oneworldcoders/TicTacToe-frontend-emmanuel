import { resetBoard, playMove } from './restActions';
import { mockFetch } from '../mocks'

jest.mock('./responseHandler')
import responseHandler from './responseHandler';


describe('resetBoard', () => {
  test('calls the url with the restClient', () => {
    const url = ''
    const restClient = jest.fn()
    resetBoard({restClient, url})
    expect(restClient).toHaveBeenCalledWith(url)
  });

  test('calls setBoard with data from restClient', async () => {
    const url = '/resetBoard'
    const restClient = mockFetch
    const expectedDataFromMockFetch = ['', '', '']
    const setBoard = jest.fn()
    await resetBoard({setBoard, restClient, url})
    expect(setBoard).toHaveBeenCalledWith(expectedDataFromMockFetch)
  });
});

describe('playMove', () => {
  test('restClient is called with url', () => {
    const url = ''
    const restClient = jest.fn()
    const symbol = 'x'
    const position = 1
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ symbol: symbol, position: position })
    }
    playMove({restClient, symbol, position, url})
    expect(restClient).toHaveBeenCalledWith(url, requestOptions)
  });

  test('updateBoard is called with data from restClient', async() => {
    const url = '/play'
    const restClient = mockFetch
    const expectedDataFromMockFetch = {
      'message' : 'OK',
      'board' : ['', '', '']
    }

    const symbol = 'x'
    const setSymbol = jest.fn()
    const setBoard = jest.fn()
    await playMove({symbol, setSymbol, url, restClient, setBoard})
    expect(responseHandler.updateBoard).toHaveBeenCalledWith(expectedDataFromMockFetch, symbol, setSymbol, setBoard)
  })

});

