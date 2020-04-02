import React from 'react';
import { shallow } from 'enzyme'
import Reset from '.';
import Button from '../../components/Button';


describe('Reset', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Reset />);
  });
  
  test('renders without crashing', () => {
    shallow(<Reset />);
  });

  test('renders 9 cells', () =>{
    const cell = wrapper.find(Button)
    expect(cell.length).toBe(3)
  });
});
