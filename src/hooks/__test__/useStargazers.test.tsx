import {act} from 'react-test-renderer';
import {renderHook} from '@testing-library/react-native';
import useStargazers from '../useStargazers.tsx';
import {Stargazer} from '../../models/interface.ts';

// Mocking the useDispatch hook
jest.mock('react-redux', () => ({
  //spread actual propreties to the mock
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('useStargazers', () => {
  it('given a response from github API,dispatch action', async () => {
    const dispatchMock = jest.fn();

    // Mocking useDispatch to return the mock dispatch function
    require('react-redux').useDispatch.mockReturnValue(dispatchMock);

    // Mocking axios,replaces the get function with a mock function that returns a resolved promise
    jest.mock('axios', () => ({
      get: jest.fn(() => Promise.resolve({data: []})),
    }));

    //render custom hook in order to return  result object wich contains values and methods
    const {result} = renderHook(() => useStargazers());

    // Pass repo object to test
    const repository = {owner: 'pagopa', name: 'io-app'};

    // Use act in order to be sure that react complete all  async operations before fetch
    await act(async () => {
      await result.current.fetchStargazers(repository);
    });

    // Assert that the dispatch function was called with the expected actions
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'stargazersList/setLoading',
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'stargazersList/setStargazers',
      payload: expect.any(Function), // Expect a function
    });

    // Clean up mocks after the test
    jest.clearAllMocks();
    //timeout need
  }, 10000);
});
