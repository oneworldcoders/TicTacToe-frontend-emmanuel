import React from 'react';
import { shallow } from 'enzyme'
import Button from '../Button';


describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  test('renders without crashing', () => {
    wrapper = shallow(<Button />);
  });

  test('renders a button element', () => {
    const button = wrapper.find('div')
    expect(button.length).toBe(1)
  });
  
});

describe('When a mark is passed to it', () => {
  test('displays the mark X', () => {
    let props = { mark: 'X' }
    let wrapper = shallow(<Button {...props}/>);
    const button = wrapper.find('button')
    expect(button.text()).toBe("X")
  });

  test('displays the mark O', () => {
    let props = { mark: 'O' }
    let wrapper = shallow(<Button {...props}/>);
    const button = wrapper.find('button')
    expect(button.text()).toBe("O")
  });

  test('displays nothing when no mark', () => {
    let wrapper = shallow(<Button />);
    const button = wrapper.find('button')
    expect(button.text()).toBe("")
  });

});
