import React from 'react';
import { shallow } from 'enzyme'
import TicTacToe from '.';
import Button from '../../components/Button';
import Board from '../Board';


describe('TicTacToe', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TicTacToe />);
  });

  test('renders without crashing', () => {
    shallow(<TicTacToe />);
  });

  test('renders 3 control btns', () =>{
    const cell = wrapper.find(Button)
    expect(cell.length).toBe(3)
  });

  test('renders the board', () => {
    const board = wrapper.find(Board)
    expect(board.length).toBe(1)
  });
});
