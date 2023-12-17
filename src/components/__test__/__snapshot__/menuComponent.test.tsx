import React from 'react';
import {render} from '@testing-library/react-native';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import MenuButton from '../../menu/MenuComponent.tsx';

// Mock the useNavigation and useTheme hooks
jest.mock('@react-navigation/native');

describe('MenuButton snapshot', () => {
  it('renders correctly', () => {
    // Mock the navigate function otherwise error appear
    const mockNavigate = jest.fn();

    // Mock the useNavigation hook otherwise error appear
    (useNavigation as jest.Mock).mockImplementation(() => ({
      navigate: mockNavigate,
    }));

    // Mock the useTheme hook otherwise error appear
    (useTheme as jest.Mock).mockReturnValue({
      colors: {
        primary: 'mockPrimaryColor',
      },
    });

    const {toJSON} = render(<MenuButton />);
    expect(toJSON()).toMatchSnapshot();
  });
});
