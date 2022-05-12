import React from 'react';
import renderer from 'react-test-renderer';

describe('renders page to DOM and we test functionality', () => {
  it('renders the Rocketcard Correctly in the DOM', () => {
    const tree = renderer
      .create(<rockets />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
