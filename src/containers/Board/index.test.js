import React from 'react';
import { shallow } from 'enzyme'
import Board, { displayBoard, useFetch, fetchData } from '.';
import Cell from '../../components/Cell';
import { mockFetch, mockUseState, mockUseEffect } from '../../mocks';


describe('Board', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Board />);
  });
  test('renders without crashing', () => {
    shallow(<Board />);
  });

  test('renders 9 cells', () =>{
    const cell = wrapper.find(Cell)
    expect(cell.length).toBe(9)
  });

});

describe('displayBoard', () => {
  test('returns empty when empty array is passed', () => {
    let board = displayBoard([])
    expect(board.length).toBe(0)
  });

  test('returns array of 1 element when 1 mark is passed', () => {
    let board = displayBoard(['x'])
    expect(board.length).toBe(1)
  });

  test('returns array of 5 element when 5 marks are passed', () => {
    let board = displayBoard(['', '', '', '', ''])
    expect(board.length).toBe(5)
  });

  test('returns Cell components', () => {
    let board = displayBoard([''])
    function isACell(obj){ return obj.type(Cell) }

    expect(board.every(isACell)).toBeTruthy()
  });
});

describe('fetchData', () => {
  test('is called without crashing', () => {
    let response = mockUseState([])
    let setData = response[1]
    let url = '/getBoard'
    fetchData(url, mockFetch, setData)
  })
})


describe('useFetch', () => {
  test('is called without crashing', () => {
    let url = '/resetBoard'
    let defaultData = []
    useFetch(url, defaultData, mockFetch, mockUseState, mockUseEffect)
  })
});

