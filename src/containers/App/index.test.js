import React from 'react';
import { shallow } from 'enzyme'
import App from '.';
import TicTacToe from '../TicTacToe';
import { ToastContainer } from 'react-toastify';


describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('renders without crashing', () => {
    wrapper = shallow(<App />);
  });

  test('renders the tictactoe Container', () => {
    const board = wrapper.find(TicTacToe)
    expect(board.length).toBe(1)
  });

  test('renders the ToastContainer ', () => {
    const board = wrapper.find(ToastContainer)
    expect(board.length).toBe(1)
  });
});
