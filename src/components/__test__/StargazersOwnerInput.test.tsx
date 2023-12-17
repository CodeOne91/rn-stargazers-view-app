import React from 'react';
import {render, fireEvent, act, cleanup} from '@testing-library/react-native';
import StargazersOwnerInput from '../input/StargazersOwnerInput.tsx';
import {useTheme} from 'react-native-paper';
// Mock the useTheme hook otherwise error appears
(useTheme as jest.Mock).mockReturnValue({
  colors: {
    primary: 'white',
  },
});
// Cleanup after each test
beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  cleanup(); // Ensure cleanup from @testing-library/react-native
});

describe('StargazersOwnerInput', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(
      <StargazersOwnerInput owner="" onChangeOwner={() => {}} />,
    );

    // Make assertions about the rendered component
    expect(getByTestId('OwnerInput')).toBeTruthy();
  });

  it('calls onChangeOwner prop on text change', async () => {
    const onChangeOwnerMock = jest.fn();
    const {getByTestId} = render(
      <StargazersOwnerInput owner="" onChangeOwner={onChangeOwnerMock} />,
    );

    // Use act to wrap the code that triggers state updates
    await act(async () => {
      // Simulate asynchronous action, if any
      fireEvent.changeText(getByTestId('OwnerInput'), 'newOwner');
    });

    // Check if the prop function was called with the correct value
    expect(onChangeOwnerMock).toHaveBeenCalledWith('newOwner');
  });
});
