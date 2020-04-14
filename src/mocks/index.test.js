import { mockFetch } from '.';

describe('mockFetch', () => {
  test('returns data', async () => {
    let data = { 'message' : 'OK', 'board' : ['', '', ''] }
    let url = '/getBoard'
    let response = await mockFetch(url)
    response = await response.json()
    expect(response).toEqual(data)
  });
});
