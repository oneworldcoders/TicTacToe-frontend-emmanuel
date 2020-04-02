import React from 'react';
import { shallow } from 'enzyme'
import App from '.';
import Board from '../Board';
import Reset from '../Reset';


describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('renders without crashing', () => {
    wrapper = shallow(<App />);
  });
  
  test('renders the board', () => {
    const board = wrapper.find(Board)
    expect(board.length).toBe(1)
  });

  test('renders the reset pane', () => {
    const board = wrapper.find(Reset)
    expect(board.length).toBe(1)
  });
});
