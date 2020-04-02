import React from 'react';
import { shallow } from 'enzyme'
import Board from '.';
import Cell from '../../components/Cell';


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

