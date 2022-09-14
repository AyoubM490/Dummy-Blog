import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import findByTestAttr, { testStore } from './Utils';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title 1',
          body: 'Some text',
        },
        {
          title: 'Example title 2',
          body: 'Some text',
        },
        {
          title: 'Example title 3',
          body: 'Some text',
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });

  it('exampleMethodUpdatesState method should update state as expected', () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethodUpdatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it('exampleMethodReturnsAValue method should return value as expected', () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethodReturnsAValue(6);
    expect(newValue).toBe(7);
  });
});
