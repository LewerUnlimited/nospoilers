import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  test("renders", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true)
  })

  test('renders nospoilers title', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.findWhere(x => x.text() === 'Click below for a random movie!').exists()).toBe(true)
  });

  test('random movie button should render correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('button').text()).toEqual('Random Movie')
  });
})
