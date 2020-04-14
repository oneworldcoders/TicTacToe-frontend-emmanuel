import React from 'react';
import { shallow } from 'enzyme'
import Board, { displayBoard } from '.';
import Cell from '../../components/Cell';


describe('Board', () => {
  test('renders without crashing', () => {
    shallow(<Board />);
  });

  test('renders cells when props are available', () => {
    const props = { board: [''] }
    const wrapper = shallow(<Board {...props}/>);

    const cell = wrapper.find(Cell)
    expect(cell.length).toBe(1)
  });

});

describe('displayBoard', () => {
  test('returns empty when empty array is passed', () => {
    const props = { board: [] }
    const board = displayBoard(props)
    expect(board.length).toBe(0)
  });

  test('returns array of 1 element when 1 mark is passed', () => {
    const props = { board: ['x'] }
    const board = displayBoard(props)
    expect(board.length).toBe(1)
  });

  test('returns array of 5 element when 5 marks are passed', () => {
    const props = { board: ['', '', '', '', ''] }
    const board = displayBoard(props)
    expect(board.length).toBe(5)
  });

  test('returns Cell components', () => {
    const props = { board: [''] }
    const board = displayBoard(props)
    function isACell(obj){ return obj.type(Cell) }

    expect(board.every(isACell)).toBeTruthy()
  });
});
