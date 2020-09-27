import React from 'react'
import renderer from 'react-test-renderer'

import App from 'layout/App';

test('it works', () => {
  const wrapper = renderer.create(<App />).toJSON();
  expect(wrapper).toMatchSnapshot()
})