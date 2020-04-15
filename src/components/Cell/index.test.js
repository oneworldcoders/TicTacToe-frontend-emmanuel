import React from 'react';
import { shallow } from 'enzyme'
import Cell from '.'


describe('Cell', () => {
  test('renders a div', () => {
    const wrapper = shallow(<Cell />);
    const button = wrapper.find('div')
    expect(button.length).toBe(1)
  });
});

describe('When a mark is passed to it', () => {
  test('displays the mark X', () => {
    const props = { mark: 'X' }
    const wrapper = shallow(<Cell {...props}/>);
    const div = wrapper.find('div')
    expect(div.text()).toBe("X")
  });

  test('displays the mark O', () => {
    const props = { mark: 'O' }
    const wrapper = shallow(<Cell {...props}/>);
    const div = wrapper.find('div')
    expect(div.text()).toBe("O")
  });

  test('displays nothing when no mark', () => {
    const wrapper = shallow(<Cell />);
    const div = wrapper.find('div')
    expect(div.text()).toBe("")
  });

  describe('ClickEvent', () => {
    test('prop function is called', () => {
      const props = { handleClick: jest.fn() }
      const wrapper = shallow((<Cell {...props} />));
      wrapper.find('div').simulate('click');
      expect(props.handleClick).toHaveBeenCalled()
    });
  });
});
