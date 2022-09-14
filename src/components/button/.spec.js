import React from 'react';
import { shallow } from 'enzyme';
import findByTestAttr, { checkProps } from '../../Utils';
import SharedButton from './index';

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {},
      };
      const propsErr = checkProps(SharedButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mockFunc,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('Should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    it('Should emit callback on click event', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
