class MockBoard {
  constructor() {
    this.data = {
      'board' : ['', '', '']
    }
  }

  json() {
    return this.data
  }
}

class MockReset {
  constructor() {
    this.data = {
      'message' : 'OK'
    }
  }

  json() {
    return this.data
  }

}

export const mockFetch = (url) => {
  if (url == '/getBoard') return new MockBoard
  if (url == '/resetBoard') return new MockReset
  return {}
}

export const mockUseState = (defaultData) => {
  let list = []
  return [list, (val)=>{ return list.push(val) }]
}

export const mockUseEffect = () => {
  let url = '/resetBoard'
  let response1 = mockFetch(url)
  let response2 = mockUseState([])
  response2[1](response1.json().message)
  return response2[0]
}
