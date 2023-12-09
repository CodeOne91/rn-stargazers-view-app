import React from 'react';
import renderer from 'react-test-renderer';
import {describe, expect, it} from '@jest/globals';
import StargazerItem from './StargazersItem.tsx';

describe('StargazerItem', () => {
  it('renders correctly', () => {
    const stargazer = {
      login: 'user',
      avatar_url: 'https://image.com/logo.jpg',
    };

    const tree = renderer
      .create(<StargazerItem stargazer={stargazer} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
