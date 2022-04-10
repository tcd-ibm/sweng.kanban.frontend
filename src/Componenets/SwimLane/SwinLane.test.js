import React from 'react';
import renderer from 'react-test-renderer';
import SwimLane from './SwimLane';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<SwimLane />).toJSON();
  expect(tree).toMatchSnapshot();
});