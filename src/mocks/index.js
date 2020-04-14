class MockResponse {
  constructor() {
    this.data = {
      'message' : 'OK',
      'board' : ['', '', '']
    }
  }

  async json() {
    return this.data
  }
}

export const mockFetch = async (_) => {
  return new MockResponse
}
