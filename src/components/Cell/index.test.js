import React from 'react';
import { shallow } from 'enzyme'
import Cell from '.'


describe('Cell', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Cell />);
  });

  test('renders without crashing', () => {
    wrapper = shallow(<Cell />);
  });

  test('renders a div', () => {
    const button = wrapper.find('div')
    expect(button.length).toBe(1)
  });
  
});

describe('When a mark is passed to it', () => {
  test('displays the mark X', () => {
    let props = { mark: 'X' }
    let wrapper = shallow(<Cell {...props}/>);
    const div = wrapper.find('div')
    expect(div.text()).toBe("X")
  });

  test('displays the mark O', () => {
    let props = { mark: 'O' }
    let wrapper = shallow(<Cell {...props}/>);
    const div = wrapper.find('div')
    expect(div.text()).toBe("O")
  });

  test('displays nothing when no mark', () => {
    let wrapper = shallow(<Cell />);
    const div = wrapper.find('div')
    expect(div.text()).toBe("")
  });

});
