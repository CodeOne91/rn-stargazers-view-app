import React from 'react';
import renderer from 'react-test-renderer';
import {Provider as PaperProvider} from 'react-native-paper'; // Import PaperProvider
import {describe, expect, it} from '@jest/globals';
import StargazerItem from './StargazersItem.tsx';

describe('StargazerItem', () => {
  it('renders correctly', () => {
    const stargazer = {
      login: 'user',
      avatar_url: 'https://image.com/logo.jpg',
    };

    const tree = renderer
      .create(
        <PaperProvider>
          <StargazerItem stargazer={stargazer} />
        </PaperProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
