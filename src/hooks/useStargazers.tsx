import {ErrorMessage, Repository, Stargazer} from '../models/interface';
import {axiosInstance} from '../services/api';
import {AxiosResponse} from 'axios';
import {useDispatch} from 'react-redux';
import {
  setError,
  setLoading,
  setStargazers,
} from '../store/reducers/stargazersSlice';
import {showErrorSnackbar} from '../store/reducers/SnackbarContextSlice.ts';
import {useState} from 'react';

/**
 * Interface for the UseStargazersProps.
 */
interface UseStargazersProps {
  /**
   * Fetches stargazers for a repository.
   *
   * @param {Repository} repository - The repository object.
   * @param {boolean} [isFirstFetch] - Indicates if it's the first fetch, useful for pagination.
   * @returns {Promise<void>} A Promise that resolves when the fetch is complete.
   */
  fetchStargazers: (
    repository: Repository,
    isFirstFetch?: boolean,
  ) => Promise<void>;
  hasMoreStargazers: boolean;
}

/**
 * Custom Hook used to retrieve stargazers list of a repository.
 *
 * @returns stargazers fetched, loading state and error.
 */
const useStargazers = (): UseStargazersProps => {
  const dispatch = useDispatch();
  const perPage = 30; // Number of stargazers per page
  const [page, setPage] = useState(1);
  const [hasMoreStargazers, setHasMoreStargazers] = useState(true); // Initialize as true

  /**
   * get request in order to retrieve list of stargazers.
   *
   * @param {Repository} repository - Object containing info about repo.
   * @param {number} page - Page number for pagination.
   * @returns {Promise<Stargazer[]>} Return the list of stargazers that match param, or an empty array.
   */
  const getStargazers = async (
    repository: Repository,
    page: number,
  ): Promise<Stargazer[]> => {
    try {
      const response: AxiosResponse<Stargazer[]> = await axiosInstance.get(
        `/repos/${repository.owner}/${repository.name}/stargazers`,
        {
          params: {
            per_page: perPage,
            page: page,
          },
        },
      );
      //set false if condition not verified
      setHasMoreStargazers(response.data.length === perPage);

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const fetchStargazers = async (
    repository: Repository,
    isFirstRequest: boolean = true,
  ) => {
    try {
      dispatch(setLoading());
      // If it's the first request, reset the page number to 1
      if (isFirstRequest) {
        setPage(1);
      }
      // Fetch stargazers based on the current page
      const response = await getStargazers(
        repository,
        isFirstRequest ? 1 : page,
      );

      // Append the new stargazers to the existing list
      dispatch(
        setStargazers((prevStargazers: Stargazer[]) => [
          ...prevStargazers,
          ...response,
        ]),
      );

      // If there are more stargazers, increment the page number for the next request
      if (hasMoreStargazers) {
        setPage(prevPage => prevPage + 1);
      } else {
        // If no more stargazers, reset the page number
        setPage(1);
      }
    } catch (error: any) {
      dispatch(setError(error));
      dispatch(showErrorSnackbar(error as ErrorMessage));
    } finally {
    }
  };

  return {fetchStargazers, hasMoreStargazers};
};

export default useStargazers;
