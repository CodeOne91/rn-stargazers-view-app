import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import StargazerItem from './StargazersItem.tsx';
import {describe, expect, it} from '@jest/globals';

describe('StargazerItem', () => {
  it('renders correctly', () => {
    const stargazer = {
      login: 'user',
      avatar_url: 'https://image.com/logo.jpg',
    };

    const tree = renderer
      .create(
        <NativeBaseProvider>
          <StargazerItem stargazer={stargazer} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
