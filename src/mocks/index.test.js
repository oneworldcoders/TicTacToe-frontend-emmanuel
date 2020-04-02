import { mockFetch, mockUseState, mockUseEffect } from '.';

describe('mockFetch', () => {
  test('returns no data for wrong url', () => {
    let url = ''
    let response = mockFetch(url)
    expect(response).toEqual({})
  })

  test('returns board for board url', () => {
    let data = { 'board' : ['', '', ''] }
    let url = '/getBoard'
    let response = mockFetch(url)
    expect(response.json()).toEqual(data)
  })

  test('returns message ok for reset board url', () => {
    let data = { 'message' : 'OK' }
    let url = '/resetBoard'
    let response = mockFetch(url)
    expect(response.json()).toEqual(data)
  })
})

describe('mockUseState', () => {
  test('returns a list of data var and setData fn', () => {
    let defaultData = []
    let response = mockUseState(defaultData)
  
    expect(Array.isArray(response)).toBeTruthy
    expect(response.length).toEqual(2)
    expect(Array.isArray(response[0])).toBeTruthy
    expect(typeof response[1]).toEqual('function')
  })

  test('the function returned is a setter for the variable', () => {
    let defaultData = []
    let response = mockUseState(defaultData)
    response[1]('x')
    expect(response[0]).toEqual(['x'])
  })
})

describe('mockUseEffect', () => {
  test('returns response[0] of useState', () => {
    let response = mockUseEffect()
    expect(response).toEqual(['OK'])
  })
})
